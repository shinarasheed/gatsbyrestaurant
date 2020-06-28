import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

const QuickInfo = () => {
  return (
    <div>
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dignissimos sunt ab esse nemo inventore perspiciatis voluptatem
            magni, corrupti, tenetur voluptate incidunt corporis. Ut ipsa
            possimus dolores corrupti cum, aut nisi eius repudiandae commodi
            nulla asperiores et dolor at quisquam distinctio, odit aspernatur
            quasi earum unde ex debitis suscipit neque!
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    </div>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90vw;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70vw;
  }

  @media (min-width: 992px) {
    width: 60vw;
  }
`

export default QuickInfo
