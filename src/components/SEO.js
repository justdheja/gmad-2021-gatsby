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
      <title>{page ? title + " | " + page : title}</title>
      <script
        data-ad-client="ca-pub-3498584576110631"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
  )
}

export default SEO
