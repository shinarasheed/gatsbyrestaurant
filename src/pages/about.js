import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" key={[`restaurant`, `food`]} />
      <PageHeader img={aboutImg}>
        <Banner title="about us" subtitle="a little about us"></Banner>
      </PageHeader>
    </Layout>
  )
}

export default AboutPage
