import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import Image from "gatsby-image"

const MenuItem = ({ menu }) => {
  const { name, price, ingredients } = menu
  const menuimage = menu.image.fixed
  return (
    <MenuWrapper>
      <Image fixed={menuimage} className="img" />
      <div className="text">
        <div className="menu-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
  }

  .img {
    border-radius: 0.5rem;
  }

  .menu-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }

  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`

export default MenuItem
