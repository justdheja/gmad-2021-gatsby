const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "GMAD 2021",
    author: "GMAD UGM 2021",
    description:
      "GMAD UGM 2021 The biggest annual event of the Department of Accounting, Faculty of Economics and Business, Gadjah Mada University (FEB UGM) organized by Ikatan Mahasiswa Akuntansi Gadjah Mada (IMAGAMA). Gadjah Mada Accounting Days Lomba Akuntansi Lomba Mahasiswa Lomba Ekonomi Lomba Manajemen Yogyakarta Jogjakarta Jogja 2021 Universitas Gadjah Mada UGM Fakultas Ekonomika Bisnis",
    url: "gmadugm.com/",
    image: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Tailwind CSS",
        short_name: "Gatsby Starter Tailwind CSS",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
