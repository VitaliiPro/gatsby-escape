import styled from "styled-components"
import img from "../../images/header-background.jpg";

export const HeaderSection = styled.div`
  height: 500px;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  border-radius: 0px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`
export const HeaderSectionBox = styled.div`
  position: absolute;
  margin-top: 180px;
  margin-left: 17.5%;
  margin-right: 17.5%;
  width: 65%;
  height: 160px;
`
export const DetailsHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Lora";
    font-size: 50px;
    color: #ffffff;
    margin-bottom: 20px;
    top: -7px;
    line-height: 51px;
    letter-spacing: 2px;
    font-weight: 400;
  }

  h4 {
    font-family: "Oxygen";
    font-size: 17px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.63);
    font-weight: 400;
  }

  button {
    font-weight: 400;
    font-family: "Oxygen";
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    background-color: #dd783f;
    height: 45px;
    width: 165px;
    border-radius: 3px;
    border: none;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: #dd783f;
    }

    &:active {
      background-color: #dd783f;
      color: #ffffff;
    }
  }
`
