import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>{data.site.siteMetadata.title}</p>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`