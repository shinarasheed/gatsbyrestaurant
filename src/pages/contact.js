import React from "react"
import Layout from "../components/layout"
import contactImg from "../images/bcg/contactBcg.jpeg"
import { PageHeader, Banner } from "../utils"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" key={[`restaurant`, `food`]} />
      <PageHeader img={contactImg}>
        <Banner title="contact us" subtitle="lets's get in touch"></Banner>
      </PageHeader>
    </Layout>
  )
}

export default ContactPage
