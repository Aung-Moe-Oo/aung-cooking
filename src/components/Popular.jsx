import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=b4cb3b9df2bd44c18b2d14a0a5fe28f1`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          breakpoints: {
            768: {
              destroy: true,
            },
          },
          rewind: true,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {popular.map((recipe) => (
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
  margin: 2rem 0;
  width: 100%;
  h3 {
    ${mobile({
      marginBottom: "0",
    })}
  }
`;

const Card = styled.div`
  min-height: 25rem;
  left: 0;
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

export default Popular;

// process.env.REACT_APP_API_KEY =51d0e725a5f9407891c4892e29d1c70a
