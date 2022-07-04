import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { mobile } from "./responsive";

function App() {
  return (
    <BrowserRouter className="App">
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Aung</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({ padding: "1rem 0" })}
  svg {
    font-size: 2rem;
  }
`;

export default App;
