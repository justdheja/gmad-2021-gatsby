import React from 'react'
import { Fade } from 'react-reveal'
import Layout from '../components/Layout'
import jncLogo from '../images/logoJncEvent.png'
import timelineJnc from '../images/timelineJnc.webp'
import iconRegister from '../images/icon_register_jnc.png'
import iconBooklet from '../images/icon_booklet_jnc.png'

const Jnc = () => {
  return (
    <Layout page="Jogjakarta National Conference">
      <div className="min-h-screen container-desc-jnc p-16 flex flex-col space-y-24 items-center justify-center">
        <Fade right>
          <img src={jncLogo} alt="logo jnc" className="mx-auto md:h-56" />
        </Fade>
        <Fade left>
          <p className="mt-8 text-justify lg:px-64">
            <mark className="bg-palette-teal text-white p-1">
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

      <div className="lg:min-h-screen">
        <Fade bottom>
          <img src={timelineJnc} alt="timeline" className="w-full" />
        </Fade>
      </div>

      <div className="min-h-screen container-theme-slide1-jnc flex flex-col justify-center items-center space-y-8">
        <Fade right>
          <div className="text-center w-full">
            <h1 className="text-6xl text-white font-extrabold text-theme-jnc">
              Grand Theme
            </h1>
            <h2 className="text-2xl text-white font-extrabold">
              Companies vs Crises: A Call for Rapid Responsible Transformation
            </h2>
          </div>
          <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-8 p-8 lg:px-12 text-white text-xl">
            <div className="text-justify">
              When crises occur, it is always the business industry taking the
              biggest hit, with medium and smaller enterprises foremostly placed
              at the risk of circling the drain. However, even the darkest cloud
              has a silver lining. Experiencing financial crises might have
              taken a huge toll on many businesses, but it yielded a valuable
              lesson: companies must always prepare themselves for the upcoming
              “worst scenarios”.
            </div>
            <div className="text-justify">
              Therefore, being aware of the importance of transformation on
              existing industry structure, we proudly present to you the
              Jogjakarta National Conference (JNC) 2021 as a platform for the
              delegates to be able to engage and indulge themselves in profound
              and in-depth research, and be able to dissect and further
              elaborate the novel discoveries and innovative ideas proposed.
            </div>
          </div>
        </Fade>
      </div>

      <div className="min-h-screen container-theme-slide2-jnc flex flex-col lg:flex-row justify-center items-start p-8 lg:pt-32 space-y-8 lg:space-y-0 lg:space-x-8">
        <Fade left>
          <div className="flex flex-col">
            <h2 className="text-4xl uppercase font-extrabold text-palette-blue">
              Subtheme 1
            </h2>
            <h2 className="text-2xl font-extrabold text-palette-blue">
              Optimizing Financial Service through Improved Technology and
              Reporting Advances
            </h2>
            <p className="text-justify mt-2">
              From small, local family businesses to large, international
              corporations, financial reporting is a compulsory process that
              each of every legal entity has to carry out. Responding to the
              current challenge of economic uncertainty, in the status quo, the
              methods of financial reporting as the demand for an optimized,
              quick, and accurate report is escalating, while retaining the
              quality and utility of the report is also urgent. Realizing the
              status quo, is this a matter of innovation, utility, or balance of
              compliance?
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="flex flex-col pt">
            <h2 className="text-4xl uppercase font-extrabold text-palette-blue">
              Subtheme 2
            </h2>
            <h2 className="text-2xl font-extrabold text-palette-blue">
              Revitalizing Tax System in the Digital Economy Environment
            </h2>
            <p className="text-justify mt-2">
              In order not to be outrun by the changes brought by the digital
              economy, the tax regulation in the digital economy should be one
              of the major economic considerations within a country. The risk of
              tax avoidance is getting more pronounced as conventional tax
              systems highly rely on the physical appearance of tax substances
              which could not capture the value creation and profit-making.
              Realizing the matter, how to transform a tax system that is
              adequate to the digital economy?
            </p>
          </div>
        </Fade>
      </div>
      <div className="min-h-screen container-submission-jnc p-4 lg:px-12 flex items-center">
        <Fade bottom>
          <div className="flex flex-col space-y-20 w-full lg:w-8/12">
            <div className="text-left w-full lg:flex">
              <img
                src={iconRegister}
                alt="icon register"
                className="icon-white-filter"
              />
              <div>
                <h1 className="text-2xl lg:text-5xl text-white font-semibold text-theme-jnc mb-4 tracking-wider">
                  Registration &<br />
                  Abstract Submission
                </h1>
                <a
                  href="http://bit.ly/Registration_JNC2021"
                  target="_blank"
                  className="p-2 lg:px-4 mx-auto cursor-pointer bg-palette-blue hover:bg-palette-teal text-white transition ease-in duration-200 text-center w-full lg:w-4/12  shadow-md rounded-full italic lg:uppercase"
                  rel="noopener noreferrer"
                >
                  Register & Submit Abstract
                </a>
              </div>
            </div>
            <div className="lg:text-right w-full lg:flex justify-end">
              <div>
                <img
                  src={iconBooklet}
                  alt="icon register"
                  className="icon-white-filter lg:hidden"
                />
                <h1 className="text-2xl lg:text-5xl text-white font-semibold text-theme-jnc mb-4 tracking-wider">
                  Booklet &<br className="hidden lg:block" />
                  {" "}Guideline
                </h1>
                <a
                  href="http://bit.ly/JNCBooklet2021"
                  target="_blank"
                  className="p-2 lg:px-4 mx-auto cursor-pointer bg-palette-blue hover:bg-palette-teal text-white transition ease-in duration-200 text-center w-full lg:w-4/12 space-x-12 text-base shadow-md rounded-full italic lg:uppercase"
                  rel="noopener noreferrer"
                >
                  Download Booklet & Guideline
                </a>
              </div>
              <img
                src={iconBooklet}
                alt="icon register"
                className="icon-white-filter ml-4 hidden lg:block"
              />
            </div>
          </div>
        </Fade>
        <div className="w-4/12 hidden lg:block"></div>
      </div>
    </Layout>
  )
}

export default Jnc
