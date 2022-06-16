import styled from "styled-components"
import img from "../../images/footer.jpg"

export const FooterContainer = styled.div`
  width: 100%;
  height: 370px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 150% 150%;
`
export const FooterForm = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 227px;
`

export const FormSubmit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;

  input:first-child {
    width: 335px;
    height: 50px;
    background: #ffffff;
    border-radius: 3px 0px 0px 3px;
    border: none;
    color: #817f83;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    padding-left: 45px;
  }

  input:nth-child(2) {
    width: 125px;
    height: 50px;
    margin-left: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.28);
    border-radius: 0px 3px 3px 0px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #f8f8f8;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.4);
      color: #817f83;
    }
  }
`
