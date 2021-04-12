import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center">
        <h1 className="text-primary">The Fastest Frontend for the Modern Web</h1>
        <p>An open-source frontend framework for creating integrated, blazing fast websites and apps.</p>
        <p>Now go build something great.</p>
    </div>
    <StaticImage
      src="../images/banner.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

  </Layout>
)

export default IndexPage
