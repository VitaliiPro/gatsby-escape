import * as React from "react"
import { Section, NavLink } from "./category-menu.style"

const CategoryMenu = () => {
  return (
    <Section>
      <NavLink to="/">Nature</NavLink>
      <NavLink to="/">Photography</NavLink>
      <NavLink to="/">Relaxation</NavLink>
      <NavLink to="/">Vacation</NavLink>
      <NavLink to="/">Travel</NavLink>
      <NavLink to="/">Adventure</NavLink>
    </Section>
  )
}

export default CategoryMenu
