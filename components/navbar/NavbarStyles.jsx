import styled from "styled-components"
import posed from "react-pose"

export const NavContainer = styled.div`
  z-index: 1;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
`

export const AnimatedNavContainer = posed(NavContainer)({
         init: {
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgb(0, 0, 0)"
         },
         offTop: {
          backgroundColor: "#333",
          color: "rgb(255, 255, 255)"
         }
       });

const navItemStyle = `
  float: left;
  font-size: 2em;
  display: block;
  color: white;
  text-align: center;
  padding: .5em;
  text-decoration: none;
`;

const animatedNavItemConfig = {
  hoverable: true,
  init: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0, 0, 0)"
  },
  offTop: {
    backgroundColor: "#333",
    color: "rgb(255, 255, 255)"
  },
  hover: {
    backgroundColor: "#ddd",
    color: "rgb(0, 0, 0)"
  }
};

export const AnimatedNavItem = posed(
  styled.div`
    ${navItemStyle}
  `
)(animatedNavItemConfig);

export const AnimatedNavLink = posed(
  styled.a`
    ${navItemStyle}
    cursor: pointer;
  `
)(
  animatedNavItemConfig
);