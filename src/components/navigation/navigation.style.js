import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  padding-top: 20px;
  position: absolute;
  width: 100%;
  height: 70px;
`

export const MenuBlock = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Logo = styled.div`
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 26px;
  color: #ffffff;
`

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 10px;
`
