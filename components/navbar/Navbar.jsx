import Link from "next/link"
import { PoseGroup } from "react-pose"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatedNavContainer, AnimatedNavItem, AnimatedNavLink } from './NavbarStyles'
import useAtTopOfPage from '~/hooks/useAtTopOfPage'

export default function Navbar() {
  const offTop = useAtTopOfPage() ? "init" : "offTop"
  
  return (
    <PoseGroup>
      <AnimatedNavContainer key="unique" pose={offTop}>
        <Link href="/">
          <AnimatedNavLink pose={offTop}>
            <FontAwesomeIcon icon={faHome} />
          </AnimatedNavLink>
        </Link>
          <AnimatedNavItem pose={offTop}>
            <FontAwesomeIcon icon={faBars} />
          </AnimatedNavItem>
      </AnimatedNavContainer>
    </PoseGroup>
  );
}
