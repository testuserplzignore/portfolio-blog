import Navbar from "../navbar";
import Footer from "../footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default props => (
  <>
    <GlobalStyle />
    <Navbar />
    {props.children}
    <Footer />
  </>
)