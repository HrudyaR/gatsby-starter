import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Welcome to {data.site.siteMetadata.title}</h1>
    <p>I have used a GraphQL query</p>
    <p>{data.site.siteMetadata.description}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query testQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default SecondPage
