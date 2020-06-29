import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import MenuItem from "./MenuItem"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"

const getMenus = graphql`
  {
    menus: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(getMenus)
  const menus = data.menus.edges
  console.log(menus)
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <MenuList>
        {menus.map(({ node }) => {
          return <MenuItem menu={node} key={node.id} />
        })}
      </MenuList>
      <SectionButton style={{ margin: "3rem auto" }}>menu</SectionButton>
    </Section>
  )
}

const MenuList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 3rem;

  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 80%;
    justify-content: center;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`

export default Menu
