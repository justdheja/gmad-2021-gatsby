import React from "react"
import Layout from "../components/Layout"
import heroImage from "../images/hero-image.svg"
import building from "../images/building.png"
import Events from '../components/Events'
import Timer from '../components/Timer'

export default () => {
  let myDate = "26-05-2021"
  myDate = myDate.split("-")
  const time = new Date(myDate[2], myDate[1] - 1, myDate[0])

  return (
    <Layout>
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
          className="w-10/12 mx-auto lg:grid lg:grid-cols-2 justify-between flex-row align-middle"
          // style={
          //   window.matchMedia("(min-width: 768px)").matches
          //     ? {
          //         transform: `translateY(${offsetY * 0.19}px)`,
          //       }
          //     : {}
          // }
        >
          <div className="flex justify-center align-middle flex-col px-5 text-white">
            <h1 className="header-title text-4xl mb-2 poppins">
              Gadjah Mada <br />
              Accounting Days <br />
              2021
            </h1>
            <hr className="header-horizontal mb-6" />
            <p className="text-justify mb-5 pr-4">
              The biggest annual event of the Department of Accounting, Faculty
              of Economics and Business, Gadjah Mada University (FEB UGM)
              organized by Ikatan Mahasiswa Akuntansi Gadjah Mada (IMAGAMA).
            </p>
          </div>
          <div className="w-full text-right">
            <img
              src={building}
              className="App-logo mx-auto mb-8 w-10/12"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <Events />
      <Timer />
    </Layout>
  )
}
