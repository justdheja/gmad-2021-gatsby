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
      <script data-ad-client="ca-pub-3498584576110631" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
  )
}

export default SEO
