import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa ";
import { useNavigate } from "react-router-dom";
import { mobile } from "../responsive";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle>
      <form onSubmit={submitHandler}>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </form>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  form {
    margin: 0 auto;
    max-width: 30rem;
    position: relative;
    ${mobile({ maxWidth: "15rem" })}
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    outline: none;
    border-radius: 1rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
