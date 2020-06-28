import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import styled from "styled-components"
import Img from "gatsby-image"

const getImage = graphql`
  {
    firstImage: file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    secondImage: file(relativePath: { eq: "homeGallery/img-2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    thirdImage: file(relativePath: { eq: "homeGallery/img-3.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(getImage)
  const firstImage = data.firstImage.childImageSharp.fluid
  const secondImage = data.secondImage.childImageSharp.fluid
  const thirdImage = data.thirdImage.childImageSharp.fluid

  return (
    <Section>
      <GalleryWrapper>
        <div className="item item-1">
          <Img fluid={firstImage} />
          <p className="info">awesome pizza</p>
        </div>

        <div className="item item-2">
          <Img fluid={secondImage} />
          <p className="info">awesome pizza</p>
        </div>

        <div className="item item-3">
          <Img fluid={thirdImage} />
          <p className="info">awesome pizza</p>
        </div>
      </GalleryWrapper>
    </Section>
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  .item {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    .gastby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two"
      "one one three";

    .item-1 {
      grid-area: one;
    }

    .item-2 {
      grid-area: two;
    }

    .item-3 {
      grid-area: three;
    }
  }
`

export default Gallery
