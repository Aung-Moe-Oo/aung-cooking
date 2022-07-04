import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import "@splidejs/react-splide/css/sea-green";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=b4cb3b9df2bd44c18b2d14a0a5fe28f1`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Our Vegeterian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            768: {
              destroy: true,
            },
          },
          rewind: true,
          speed: 1,
          rewindSpeed: 1,
          autoplay: true,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {veggie.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipes/" + recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
  width: 100%;
  h3 {
    ${mobile({
      marginBottom: "0",
    })}
  }
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  ${mobile({
    marginBottom: "1rem",
    width: "100%",
  })}

  img {
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 1rem;
    object-fit: cover;
    position: absolute;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    width: 90%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.5));
`;

export default Veggie;

// process.env.REACT_APP_API_KEY =51d0e725a5f9407891c4892e29d1c70a
