import Link from "next/link"
import { PoseGroup } from "react-pose"
import { AnimatedNavContainer, AnimatedNavItem } from './NavbarStyles'
import useAtTopOfPage from '~/hooks/useAtTopOfPage'

export default function Navbar() {
  const visible = useAtTopOfPage() ? false : true
  
  return (
    <PoseGroup>
      {visible &&
        <AnimatedNavContainer key="unique">
          <Link href="/">
            <AnimatedNavItem>Home</AnimatedNavItem>
          </Link>
        <Link href="/projects">
          <AnimatedNavItem>Projects</AnimatedNavItem>
        </Link>
        </AnimatedNavContainer>
      }
    </PoseGroup>
  )
}
