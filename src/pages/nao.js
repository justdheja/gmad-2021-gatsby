import React, { useEffect, useState } from "react"
import { Fade } from "react-reveal"
import Layout from "../components/Layout"
import naoLogo from "../images/logoNaoEvent.png"
import TimelineNao from '../components/TimelineNao'

const Nao = () => {
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
    <Layout page="National Accounting Olympiad">
      <div className="min-h-screen container-desc-nao p-16 flex flex-col space-y-24 items-center justify-center">
        <Fade right>
          <img src={naoLogo} alt="logo jnc" className="mx-auto md:h-56" />
        </Fade>
        <Fade left>
          <p className="mt-8 text-justify lg:px-64">
            <mark className="bg-palette-blue text-white p-1">
              National Accounting Olympiad (NAO)
            </mark>{" "}
            is the one of the biggest and most prestigous accounting competition
            for undergraduates in Indonesia - an event we are proud to call
            ours. With our tagline of "Olympiad Can Be Fun", NAO will be
            packaged with fun yet challenging games, a concept designed not only
            to test the participants' accounting skill but also to motivate
            everyone involved to have fun and enjoy themselves along the
            process, as a part of Gadjah Mada Accounting Days' Sequence, NAO
            consist of three phases of preliminaries, semifinals, and final. By
            bringing the theme of the business sustainability in the long run,
            hopefully the students are encouraged to give solutions to relevant
            accounting issues through study cases.
          </p>
        </Fade>
      </div>

      <div className="min-h-screen container-event-nao flex flex-col items-center text-white space-y-4 px-4 lg:px-64">
        <h1 className="title-effect-nao font-bold text-5xl mt-4 text-center">
          National Accounting Olympiad
        </h1>
        <div className="text-center pt-8">
          <h2 className="text-4xl font-semibold ">
            <mark className="p-2 bg-palette-pink text-white shadow-effect-nao uppercase">
              Grand Theme
            </mark>
          </h2>
          <p className="title-effect-nao font-semibold text-2xl mt-6">
            Companies vs Crises: A Call for Rapid Responsible Transformation
          </p>
        </div>
        {width > 700 && (
          <div className="text-center pt-8">
            <h2 className="text-4xl font-semibold ">
              <mark className="p-2 bg-palette-pink text-white shadow-effect-nao uppercase">
                Timeline
              </mark>
            </h2>
            <Fade left>
              <TimelineNao />
            </Fade>
          </div>
        )}

        <div className="flex flex-col space-y-8 md:flex-row w-full justify-between items-baseline pt-4">
          <div className="flex w-full flex-col items-center space-y-8">
            <h2 className="text-3xl font-semibold ">
              <mark className="p-2 bg-palette-pink text-white shadow-effect-nao uppercase">
                Booklet
              </mark>
            </h2>
            <a
              href="http://bit.ly/Booklet_NAO2021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:ml-0 font-semibold cursor-pointer bg-palette-pink hover:bg-palette-dusty shadow-effect-nao text-sm text-white transition ease-in duration-200 text-center text-base w-6/12 shadow-lg rounded-full"
            >
              Download Booklet
            </a>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold ">
              <mark className="p-2 bg-palette-pink text-white shadow-effect-nao uppercase">
                Registration
              </mark>
            </h2>
            <div className="flex space-x-2">
              <div className="text-center">
                <h3 className="title-effect-nao font-semibold text-xl mt-6 uppercase">
                  Early Bird
                </h3>
                <p className="text-palette-dusty text-xl font-semibold">
                  IDR 175K
                </p>
              </div>
              <div className="text-center">
                <h3 className="title-effect-nao font-semibold text-xl mt-6 uppercase">
                  Regular
                </h3>
                <p className="text-palette-dusty text-xl font-semibold">
                  IDR 250K
                </p>
              </div>
            </div>
            <a
              href="http://bit.ly/Registrasi_NAO2021"
              target="_blank"
              className="p-2 md:ml-0 mt-2 font-semibold cursor-pointer bg-palette-pink hover:bg-palette-dusty shadow-effect-nao text-sm text-white transition ease-in duration-200 text-center text-base w-6/12 shadow-lg rounded-full"
            >
              Register
            </a>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold ">
              <mark className="p-2 bg-palette-pink text-white shadow-effect-nao uppercase">
                Total Prize
              </mark>
            </h2>
            <div>
              <h2 className="title-effect-nao font-semibold text-4xl mt-2 uppercase">
                IDR 19,700,000
              </h2>
              <p className="text-palette-dusty text-left">
                - 1st Place: IDR 8,200,000 <br />
                - 2nd Place: IDR 6,000,000 <br />
                - 3rd Place: IDR 4,500,000 <br />
                - Best Online Preliminary: IDR 500,000 <br />
                - Best Teamwork: IDR 500,000 <br />
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="title-effect-nao font-semibold text-2xl mt-6 uppercase">
            Contact Us
          </h2>

          <div className="flex space-x-4 mt-2">
            <p>Khofifah Rizza{""}</p>
            <div className="flex">
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.229c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.066-.099-.066-.161v-5.229c0-.062.025-.119.065-.161l.004-.004.003-.003c.042-.04.099-.066.162-.066h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.01.001.013.003.008.003.014.004.008.003.013.006.007.003.013.007.007.004.012.009.006.004.013.011.004.004.014.014.002.002.018.023 2.396 3.236v-3.106c0-.129.105-.233.234-.233h.841c.13 0 .234.104.234.233v5.229c0 .128-.104.233-.234.233h-.841l-.06-.008-.004-.001-.015-.005-.007-.003-.012-.004-.011-.006-.007-.003-.014-.009-.002-.002-.06-.058-2.399-3.24v3.106c0 .128-.104.233-.234.233h-.841c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.841z" />
              </svg>
              <p>19060210</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <p>Sherlyn Aurellia</p>
            <div className="flex">
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.229c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.066-.099-.066-.161v-5.229c0-.062.025-.119.065-.161l.004-.004.003-.003c.042-.04.099-.066.162-.066h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.01.001.013.003.008.003.014.004.008.003.013.006.007.003.013.007.007.004.012.009.006.004.013.011.004.004.014.014.002.002.018.023 2.396 3.236v-3.106c0-.129.105-.233.234-.233h.841c.13 0 .234.104.234.233v5.229c0 .128-.104.233-.234.233h-.841l-.06-.008-.004-.001-.015-.005-.007-.003-.012-.004-.011-.006-.007-.003-.014-.009-.002-.002-.06-.058-2.399-3.24v3.106c0 .128-.104.233-.234.233h-.841c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.841z" />
              </svg>
              <p>sherlynaurellia</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Nao
