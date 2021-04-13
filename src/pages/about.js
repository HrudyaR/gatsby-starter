import React from "react"
import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"

//const AboutPage = () => <h1>About Me</h1>
const AboutPage = () => (
  <Layout>
    <h1>About Gatsby</h1>
    <FancyParagraph paragraphText="A static site generator (SSG) for lightning speed-websites." />
    <h2>Fully functional React apps</h2>
    <FancyParagraph paragraphText="You can create high-quality, dynamic web apps." />
    <h2>Performance and SEO at the forefront</h2>
    <FancyParagraph paragraphText="Gatsby automates code splitting, image optimization, inlining critical styles, lazy-loading, prefetching resources, and more to ensure your site is fast — no manual tuning required." />
    <h2>Interested in learning more?</h2>
    <h2>Check out the step-by-step tutorial <a href="https://www.gatsbyjs.com/docs/tutorial/">here</a></h2>
  </Layout>

)

export default AboutPage
