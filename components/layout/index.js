import Navbar from "../navbar";
import Footer from "../footer";
import HireMe from "../hireMe";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 5em;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default function Layout (props) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {props.children}
      <HireMe />
      <Footer />
    </>
  )
}