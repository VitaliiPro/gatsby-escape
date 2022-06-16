// import * as React from "react"
// // import { Link } from "gatsby"

// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// // import Seo from "../components/seo"

// const SecondPage = ({data}) => {
//   console.log(data.allPrismicPos.edges);
//   return (
//   <Layout>
//     <div>
//       {data.allPrismicPos.edges.map(post => {
//         return (
//           <div key={post.node.uid}>
//             <h1 style={{fontSize: `45px`, color: `black`}}>{post.node.data.autor.text}</h1>
//           </div>
//         )
//       })}
//     </div>

//   </Layout>
// )
//     }

//     export const pageQuery = graphql`
//   query MyQuery {
//     allPrismicPos {
//       edges {
//         node {
//           data {
//             autor {
//               text
//               richText
//             }
//             image {
//               url
//               alt
//             }
//             date
//             title {
//               text
//             }
//           }
//           uid
//         }
//       }
//     }
//   }
// `

// export default SecondPage
