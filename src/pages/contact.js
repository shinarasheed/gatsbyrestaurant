import React from "react"
import Layout from "../components/layout"
import contactImg from "../images/bcg/contactBcg.jpeg"
import { PageHeader } from "../utils"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" key={[`restaurant`, `food`]} />
      <PageHeader img={contactImg}>
        <h1> this is the ContactPage</h1>
      </PageHeader>
    </Layout>
  )
}

export default ContactPage
