import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const SEO = ({ page }) => {
  const { title, description } = useSiteMetadata()

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{page ? (title + " | " + page) : title}</title>
    </Helmet>
  )
}

export default SEO
