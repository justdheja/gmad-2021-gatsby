import React from "react"
import Layout from "../components/Layout"
import Timer from '../components/Timer'
import { Fade } from 'react-reveal'
import atalkLogo from '../images/logoAtalkEvent.png'

const atalk = () => {

  return (
    <Layout>
      <div className="min-h-screen container-desc-atalk p-16 flex flex-col space-y-24 items-center justify-center">
        <Fade right>
          <img src={atalkLogo} alt="logo jnc" className="mx-auto md:h-56" />
        </Fade>
        <Fade left>
          <p className="mt-8 text-justify lg:px-64">
            <mark className="bg-palette-orange text-white p-1">
              Accounting Talk (A-Talk)
            </mark>{" "}
            s a national accounting seminar and talk show that is intended for students, business people, civil servant, and the general public. With this year theme of "Companies vs Crises: A Call for Rapid Responsible Transformation", A-Talk is expected to attract attention of the wider community about problems that occur in the business, especially on the going concern aspect of business in the long term. With a track record of inviting competent speakers in the past, A-Talk will again invite people who are experts in their fields so they can educate people and have a positive impact on society at large.
          </p>
        </Fade>
      </div>
    </Layout>
  )
}

export default atalk
