import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;

  h3 {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 2px;
    color: #2e2e2e;
  }
`
export const Line = styled.div`
  width: 188px;
  height: 1px;
  background: #dedede;
  border-radius: 0px;
`
export const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
export const PostsBlogAutor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 295px;
  width: 450px;
  margin: 10px;
`

export const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;

  span {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 35px;
    color: rgba(255, 255, 255, 0.7);
    padding: 5px;
  }

  span:last-child {
    margin-left: 50%;
  }

  img {
    height: 26px;
    width: 26px;
    border-radius: 60px;
    padding: 10px 5px 0px 5px;
  }
`

export const HeaderPost = styled.div`
  padding: 20px 20px 0px 20px;

  h2 {
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 30px;
    color: #ffffff;
  }

  h3 {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.7);
  }
`
export const MostPosts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0px 14%;
`

export const MostRecentPost = styled.div`
  height: 330px;
  width: 296px;
  padding: 10px;
`

export const MostRecentPostImg = styled.div`
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 156px;
  width: 296px;
`

export const MostRecentPostContent = styled.div`
  padding: 0px 10px 0px 10px;
  height: 100px;
  h2 {
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #101315;
  }

  h3 {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #7a7a7a;
  }
`

export const MostRecentPostLine = styled.div`
  width: 100%;
  background: #efefef;
  height: 1px;
`
export const MostRecentPostFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  span {
    font-family: "Oxygen";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 35px;
    color: #999999;
    padding: 5px;
  }

  span:last-child {
    margin-left: 37%;
  }

  img {
    height: 26px;
    width: 26px;
    border-radius: 60px;
    padding: 10px 5px 0px 5px;
  }
`
