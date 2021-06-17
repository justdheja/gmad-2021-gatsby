import React, { useEffect, useState } from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Footer from './Footer'
import Loader from './Loader'

const Layout = ({ children, page }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(loading) {
      setTimeout(() => setLoading(false), 1000)
    }
  }, [])

  return (
    <>
      <SEO page={page} />
      <div className="flex flex-col min-h-screen static ">
        <Navbar />
        {loading && <Loader />}
        <span className={loading ? "hidden" : ""}>
        {children}
        </span>
        <Footer />
      </div>
    </>
  )
}

export default Layout
