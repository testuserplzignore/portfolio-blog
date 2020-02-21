import styled from "styled-components"
import posed from "react-pose"

export const NavContainer = styled.div`
  z-index: 1;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
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
  position: relative
  float: left;
  font-size: 2em;
  display: inline-block;
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
  },
  dropdownVisible: {
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
)(animatedNavItemConfig);

export const AnimatedDropdownContent = posed(
  styled.div`
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
    z-index: 1;
  `
)({
  init: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  },
  dropdownVisible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  }
})