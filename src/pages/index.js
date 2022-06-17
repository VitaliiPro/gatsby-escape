import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import CategoryMenu from "../components/category-menu/category-menu"

import {
  Title,
  Line,
  Posts,
  PostsBlogAutor,
  HeaderPost,
  PostFooter,
  Container,
  MostPosts,
  MostRecentPost,
  MostRecentPostContent,
  MostRecentPostLine,
  MostRecentPostImg,
  MostRecentPostFooter,
} from "../components/index-style-components/index.style"

const IndexPage = ({ data }) => {
  const getData = data.allPrismicPos.edges
  console.log(data)
  return (
    <Layout>
      <CategoryMenu />
      <Container>
        <Title>
          <h3>Featured Posts</h3>
          <Line />
        </Title>
        <Posts>
          {getData.slice(0, 2).map(post => {
            const getPostData = post.node.data
            return (
              <PostsBlogAutor
                style={{ backgroundImage: `url(${getPostData.image.url})` }}
              >
                <HeaderPost>
                  <h2>{getPostData.title.text}</h2>
                  {post.node.data.content.richText.map(content => {
                    return <h3>{content.text}</h3>
                  })}
                </HeaderPost>

                {getPostData.autor.richText.map(autor => {
                  return (
                    <PostFooter>
                      <img src={getPostData.avatar_img.url} alt={""} />
                      <span>{autor.text}</span>
                      <span>{getPostData.date}</span>
                    </PostFooter>
                  )
                })}
              </PostsBlogAutor>
            )
          })}
        </Posts>
      </Container>
      <Container>
        <Title>
          <h3>Most Recent</h3>
          <Line />
        </Title>
        <MostPosts>
          {getData.slice(2).map(post => {
            const getMostRecentData = post.node.data
            return (
              <MostRecentPost>
                <MostRecentPostImg
                  style={{
                    backgroundImage: `url(${getMostRecentData.image.url})`,
                  }}
                />
                <MostRecentPostContent>
                  <h2>{getMostRecentData.title.text}</h2>
                  {post.node.data.content.richText.map(content => {
                    return <h3>{content.text}</h3>
                  })}
                </MostRecentPostContent>
                <MostRecentPostLine />
                {getMostRecentData.autor.richText.map(autor => {
                  return (
                    <MostRecentPostFooter>
                      <img src={getMostRecentData.avatar_img.url} alt={""} />
                      <span>{autor.text}</span>
                      <span>{getMostRecentData.date}</span>
                    </MostRecentPostFooter>
                  )
                })}
              </MostRecentPost>
            )
          })}
        </MostPosts>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allPrismicPos {
      edges {
        node {
          data {
            autor {
              text
              richText
            }
            avatar_img {
              url
            }
            image {
              url
              alt
            }
            date
            title {
              text
            }
            content {
              richText
            }
          }
          uid
        }
      }
    }
  }
`

export default IndexPage
