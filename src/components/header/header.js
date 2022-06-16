import * as React from "react"
import { HeaderSection, HeaderSectionBox, DetailsHeaderBox } from "./header.style"
const Header = () => {
  return (
    <HeaderSection>
      <HeaderSectionBox>
        <DetailsHeaderBox>
          <h1>Let's do it together.</h1>
          <h4>
            We travel the world in search of stories. Come along for the ride.
          </h4>
          <button>View Latest Posts</button>
        </DetailsHeaderBox>
      </HeaderSectionBox>
    </HeaderSection>
  )
}



export default Header
