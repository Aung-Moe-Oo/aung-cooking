import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../responsive";

const Category = () => {
  return (
    <List>
      <SLink to={`/cuisine/italian`}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={`/cuisine/american`}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={`/cuisine/thai`}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={`/cuisine/chinese`}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  color: #fff;
  transform: scale(0.8);
  ${mobile({ width: "3rem", height: "3rem ", marginRight: "10px" })}
  h4 {
    color: #fff;
    ${mobile({ fontSize: "10px" })}
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
    ${mobile({ fontSize: "1rem" })}
  }
  &.active {
    background: linear-gradient(35deg, #f27121, #e94057);
  }
`;

export default Category;
