import React from "react"
import Layout from "../components/layout"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"
import SEO from "../components/seo"

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="Menu" key={[`restaurant`, `food`]} />
      <PageHeader img={menuImg}>
        <Banner title="menu" subtitle={`let's dig in`}></Banner>
      </PageHeader>
    </Layout>
  )
}

export default MenuPage
