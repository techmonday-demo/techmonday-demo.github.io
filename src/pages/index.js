import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/header'

export default ({data}) => (
  <div>
    <Header />
    <div>Hi, {data.site.siteMetadata.title}

    </div>
    <footer>Footer</footer>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`