import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import building from "../images/building.png"
import Events from '../components/Events'
import EventsMobile from '../components/EventsMobile'
import Timer from '../components/Timer'
import { Fade } from 'react-reveal'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link
const Element = Scroll.Element

export default () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])

  return (
    <Layout page="Home">
      <div className="w-screen min-h-screen bg-header-home flex-grow mx-auto flex flex-col justify-around pt-20">
        {/* <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Gatsby Starter Tailwind CSS
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Start your Gatsby and Tailwind CSS project easily with this Gatsby
              Starter
            </p>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Gatsby and Tailwind CSS together"
          />
        </div> */}
        <div
          className="w-10/12 mx-auto lg:grid lg:grid-cols-2 justify-between flex-row  align-middle"
          // style={
          //   window.matchMedia("(min-width: 768px)").matches
          //     ? {
          //         transform: `translateY(${offsetY * 0.19}px)`,
          //       }
          //     : {}
          // }
        >
          <Fade left>
            <div className="flex justify-center align-middle flex-col px-5 text-white mb-14">
              <h1 className="header-title text-4xl mb-2 poppins">
                Gadjah Mada <br />
                Accounting Days <br />
                2021
              </h1>
              <hr className="header-horizontal mb-6" />
              <p className="text-justify mb-5 pr-4">
                The biggest annual event of the Department of Accounting,
                Faculty of Economics and Business, Gadjah Mada University (FEB
                UGM) organized by Ikatan Mahasiswa Akuntansi Gadjah Mada
                (IMAGAMA).
              </p>
              <ScrollLink
                to="event"
                spy={true}
                smooth={true}
                className="p-2 mx-auto md:ml-0 cursor-pointer bg-palette-orange hover:bg-yellow-600 focus:ring-yellow-500 focus:ring-offset-yellow-200 focus:ring-2 focus:ring-offset-2 text-sm text-white transition ease-in duration-200 text-center text-base w-9/12 md:w-4/12 shadow-md rounded-full"
                activeClassName=""
              >
                Learn More
              </ScrollLink>
            </div>
          </Fade>
          <Fade right>
            <div className="w-full text-right mt-12">
              <img
                src={building}
                className="App-logo mx-auto my-auto w-10/12"
                alt="logo"
              />
            </div>
          </Fade>
        </div>
      </div>
      <Element id="event" name="event">
        {width <= 780 ? <EventsMobile /> : <Events />}
      </Element>
      <Timer />
    </Layout>
  )
}
