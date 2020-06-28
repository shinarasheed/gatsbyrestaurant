import React from "react"
import Layout from "../components/layout"
import { PageHeader } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" key={[`restaurant`, `food`]} />
      <PageHeader img={aboutImg}>
        <h1> this is the AboutPage</h1>
      </PageHeader>
    </Layout>
  )
}

export default AboutPage
