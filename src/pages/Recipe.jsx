import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [active, setActive] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=b4cb3b9df2bd44c18b2d14a0a5fe28f1`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    console.log(details);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>
        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {active === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin: 10rem 0 5rem;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  ${mobile({ flexDirection: "column", margin: "2rem" })}

  img {
    ${mobile({ maxWidth: "15rem", maxHeight: "15rem" })}
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
    ${mobile({ marginBottom: "1rem" })}
  }
  h3 {
    ${mobile({ fontSize: "1rem", lineHeight: "1.5rem" })}
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    ${mobile({ fontSize: "1rem", lineHeight: "1.5rem" })}
  }
  ul {
    margin-top: 2rem;
    ${mobile({ marginTop: "10px" })}
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  border: 2px solid black;
  background: #fff;
  margin-right: 2rem;
  font-weight: 600;
  ${mobile({ padding: "5px 10px", margin: "5px" })}
`;

const Info = styled.div`
  margin-left: 10rem;
  ${mobile({ margin: "0" })}
`;

export default Recipe;
