import React from "react"
import { Fade } from "react-reveal"
import Layout from "../components/Layout"
import naoLogo from "../images/logoNaoEvent.png"
import timelineJnc from "../images/timelineJnc.png"

const nao = () => {
  return (
    <Layout>
      <div className="min-h-screen container-desc-nao p-16 flex flex-col space-y-24 items-center justify-center">
        <Fade right>
          <img src={naoLogo} alt="logo jnc" className="mx-auto md:h-56" />
        </Fade>
        <Fade left>
          <p className="mt-8 text-justify lg:px-64">
            <mark className="bg-palette-blue text-white p-1">
              National Accounting Olympiad (NAO)
            </mark>{" "}
            is the one of the biggest and most prestigous accounting competition for undergraduates in Indonesia - an event we are proud to call ours. With our tagline of "Olympiad Can Be Fun", NAO will be packaged with fun yet challenging games, a concept designed not only to test the participants' accounting skill but also to motivate everyone involved to have fun and enjoy themselves along the process, as a part of Gadjah Mada Accounting Days' Sequence, NAO consist of three phases of preliminaries, semifinals, and final. By bringing the theme of the business sustainability in the long run, hopefully the students are encouraged to give solutions to relevant accounting issues through study cases.
          </p>
        </Fade>
      </div>
    </Layout>
  )
}

export default nao
