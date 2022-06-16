import { Link } from "gatsby"
import styled from "styled-components"

export const Section = styled.div`
  font-family: "Lora";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  height: 45px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 9px 0px 10px 0px;
`
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 139px;
  height: 46px;
  color: #768088;
  margin-left: 21px;

  &:hover {
    background: #dd783f;
    color: #ffffff;
  }

  &:active {
    background: #ffffff;
    color: #768088;
  }

  &:first-child {
    margin-left: 0px;
  }
`
