import React from "react"
import { Fade } from "react-reveal"
import { Link } from "gatsby"
import atalk from "../images/atalk_white.webp"
import nao from "../images/nao_white.png"
import jnc from "../images/jnc_white.png"
import fotoAtalk from "../images/fotoAtalk.png"
import fotoNao from "../images/fotoNao.png"
import fotoJnc from "../images/fotoJnc.webp"

function EventsMobile() {
  return (
    <div className="container-event">
      <div className="">
        <Fade left>
          <div className="p-0 w-full py-4">
            <div className="justify-center text-justify px-8 h-full text-white ">
              <Link to="/a-talk">
                <img src={atalk} alt="atalk logo" className="w-64 md:pl-4 mb-2 mx-auto" />
              </Link>
              Atalk is a national accounting seminar and talk show that is
              intended for students, business people, civil servant, and
              the general public
            </div>
            <img src={fotoAtalk} alt="atalk picture" className="px-4 my-2" />
          </div>
        </Fade>

        <Fade right>
          <div className="w-full py-4">
            <div className=" px-8 h-full text-justify text-white ">
              <Link to="/nao">
                <img src={nao} alt="nao logo" className="w-64 md:pl-4 mb-2 mx-auto" />
              </Link>
              NAO is one of the biggest and most prestigious accounting competition for undergraduates in Indonesia
            </div>
            <img src={fotoNao} alt="nao picture" className="px-4 my-2" />
          </div>
        </Fade>

        <Fade left>
          <div className="py-4 w-full justify-center">
            <div className="flex-col justify-center text-justify px-8 h-full text-white ">
              <Link to="/jnc">
                <img src={jnc} alt="jnc logo" className="w-64 md:pl-4 mb-2 mx-auto" />
              </Link>
              JNC is the event expansion in GMAD, that encompasses the aim  to create an inclusive in paper research concept
            </div>
            <img src={fotoJnc} alt="jnc picture" className="px-4 my-2" />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default EventsMobile
