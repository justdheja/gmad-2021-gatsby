import React from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import { Fade } from "react-reveal"
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen static">
        <Navbar />
          {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
