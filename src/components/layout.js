import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
// we are able to do this because we made navbar the entry point in that folder
import Navbar from "../components/Globals/Navbar"
import Footer from "./Globals/Footer"

// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open sans', sans-serif;
  color:#262626;
  background:#fff;
}

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
