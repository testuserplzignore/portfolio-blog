import { useState } from "react";
import Link from "next/link";
import { PoseGroup } from "react-pose";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  AnimatedNavContainer,
  AnimatedNavItem,
  AnimatedNavLink,
  AnimatedDropdownContent
} from "./NavbarStyles";
import { atTopOfScrollablePage } from "~/hooks";

export default function Navbar() {
  const [dropdownVisible, setDropDownVisible] = useState(null);

  const offTop = atTopOfScrollablePage() ? "init" : "offTop";

  return (
    <PoseGroup>
      <AnimatedNavContainer key="unique" pose={offTop}>
        <Link href="/">
          <AnimatedNavLink pose={offTop}>
            <FontAwesomeIcon icon={faHome} />
          </AnimatedNavLink>
        </Link>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setDropDownVisible("dropdownVisible")}
          onMouseLeave={() => setDropDownVisible("init")}
        >
          <AnimatedNavItem pose={offTop}>
            <FontAwesomeIcon icon={faBars} />
          </AnimatedNavItem>
          <AnimatedDropdownContent pose={dropdownVisible}>
            <ul>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </AnimatedDropdownContent>
        </div>
      </AnimatedNavContainer>
    </PoseGroup>
  );
}
