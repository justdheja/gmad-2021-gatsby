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
              Jogjakarta National Conference (JNC)
            </mark>{" "}
            is the event expansion of Gadjah Mada Accounting days, that
            encompasses the aim to create an inclusive competition in paper
            research concept. JNC 2021 provides its participants with one grand
            theme and two sub themes that enhances and accommodates the process
            of critical thinking and solution making in form of paper
            competition. The selected participant will attend the conference for
            paper presentation and final rounds. The competition aims to provide
            a memorable experience, with positive feedback that builds relation
            and substantial discussion.
          </p>
        </Fade>
      </div>
    </Layout>
  )
}

export default nao
