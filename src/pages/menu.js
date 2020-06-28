import React from "react"
import Layout from "../components/layout"
import { PageHeader } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"
import SEO from "../components/seo"

const MenuPage = () => {
  return (
    <Layout>
      <SEO title="Menu" key={[`restaurant`, `food`]} />
      <PageHeader img={menuImg}>
        <h1> this is the MenuPage</h1>
      </PageHeader>
    </Layout>
  )
}

export default MenuPage
