import React from "react"
import Layout from "../components/Layout"
import { Fade } from "react-reveal"
import atalkLogo from "../images/logoAtalkEvent.png"
import atalkWhite from '../images/atalk_white.webp'

const Atalk = () => {
  return (
    <Layout page="Accounting Talk">
      <div className="min-h-screen container-desc-atalk p-16 flex flex-col space-y-24 items-center justify-center">
        <Fade right>
          <img src={atalkLogo} alt="logo jnc" className="mx-auto md:h-56" />
        </Fade>
        <Fade left>
          <p className="mt-8 text-justify lg:px-64">
            <mark className="bg-palette-orange text-white p-1">
              Accounting Talk (A-Talk)
            </mark>{" "}
            is a national accounting seminar and talk show that is intended for
            students, business people, civil servant, and the general public.
            With this year theme of "Companies vs Crises: A Call for Rapid
            Responsible Transformation", A-Talk is expected to attract attention
            of the wider community about problems that occur in the business,
            especially on the going concern aspect of business in the long term.
            With a track record of inviting competent speakers in the past,
            A-Talk will again invite people who are experts in their fields so
            they can educate people and have a positive impact on society at
            large.
          </p>
        </Fade>
      </div>
      <div className="min-h-screen container-theme-atalk p-8 lg:p-16">
        <Fade bottom>
          <h2 className="title-timer text-white text-center text-4xl">
            Grand Theme
          </h2>
          <div className="flex m-auto my-12 justify-center space-x-2">
            <span className="font-bold font-orange text-6xl">"</span>
            <h4 className="text-3xl text-white font-bold text-center pt-2 title-effect-atalk">
              Companies vs Crises:
              <br /> A Call for Rapid Responsible Transformation
            </h4>
            <span className="font-bold font-orange text-6xl">"</span>
          </div>
          <h2 className="title-timer text-white text-center text-4xl mb-10">
            Subtheme
          </h2>
          <div className="lg:flex justify-center lg:space-x-4">
            <div className="text-center lg:w-4/12">
              <div className="p-2 bg-palette-orange font-bold text-white shadow-effect-nao uppercase inline-block mb-2">
                Webinar
              </div>
              <div className="font-bold text-2xl text-white">
                <span className="font-yellow-atalk">Accounting's Role:</span>
                <br />
                Providing Relevant and Timely Information for Corporate
                Investment
              </div>
            </div>
            <div className="text-center mt-4 lg:mt-0 lg:w-4/12">
              <div className="p-2 bg-palette-orange font-bold text-white shadow-effect-nao uppercase inline-block mb-2">
                Talkshow
              </div>
              <div className="font-bold text-2xl text-white">
                <span className="font-yellow-atalk">
                  Small Business Survival:
                </span>
                <br />
                Maximizing Financial Growth From Accounting Perspective
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="min-h-screen container-register-atalk p-8 flex flex-col lg:flex-row justify-center items-center text-center">
        <div className="w-6/12 hidden lg:block"></div>
        <div className="h-full lg:w-6/12 flex flex-col justify-center items-center">
          <img src={atalkWhite} alt="logo atalk white" className=" w-44" />
          <div className="text-center">
            <p className="text-white font-bold text-4xl">21 September 2021</p>
            <div className="flex flex-col">
              <div className="p-2 py-0 bg-palette-orange font-bold text-white shadow-effect-nao text-center uppercase content inline-block mb-2 text-3xl mb-6">
                Registration
              </div>
              <a
                href="http://bit.ly/ATalkRegistration"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-palette-teal text-white font-bold py-1 px-4 rounded-full text-xl lg:text-3xl content"
              >
                bit.ly/ATalkRegistration
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Atalk
