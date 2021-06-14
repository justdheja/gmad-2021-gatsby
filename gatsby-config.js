const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "GMAD 2021",
    author: "GMAD 2021",
    description: "GMAD 2021 ",
    url: "/",
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
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        mainHeader: "Qatar 2022",
        secondaryHeader: "",
        targetDate: "2022-11-21 00:00:00",
        hideParticles: true,
        hideWhatsappShareButton: true,
        hideTwitterShareButton: true,
        hideFacebookShareButton: true,
        daysLabel: "يوم",
        hoursLabel: "ساعة",
        minutesLabel: "دقيقة",
        secondsLabel: "ثان",
      },
    },
  ],
}
