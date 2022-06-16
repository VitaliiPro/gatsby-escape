import * as React from "react"
import { NavLink, Wrapper, NavMenu, Logo, MenuBlock } from "./navigation.style"

const Navigation = () => {
  return (
    <Wrapper>
      <MenuBlock>
        <Logo>Escape.</Logo>
        <NavMenu>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">Categories</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </NavMenu>
      </MenuBlock>
    </Wrapper>
  )
}

export default Navigation
