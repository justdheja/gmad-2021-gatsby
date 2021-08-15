import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'gatsby';
import atalk from "../images/atalk_white.webp"
import nao from "../images/nao_white.webp"
import jnc from "../images/jnc_white.webp"
import fotoAtalk from "../images/fotoAtalk.webp"
import fotoNao from "../images/fotoNao.webp"
import fotoJnc from "../images/fotoJnc.webp"

function Events() {
	
	return (
    <div className="container-event">
      <div className=" md:flex h-full flex-col items-start justify-start items-center relative">
        <Fade left>
          <div className="flex p-0 w-full h-56 justify-center orange-text-container">
            <div className="flex flex-col justify-center text-left px-8 w-4/6 h-full text-white ">
              <Link to="/a-talk">
                <img src={atalk} alt="atalk logo" className="w-64 md:pl-4 mb-2" />
              </Link>
              Atalk is a national accounting seminar and talk show that is intended <br /> for students, business people, civil servant, and the general public
            </div>
            <img
              src={fotoAtalk}
              alt="A-Talk Picture"
              className="h-full px-4"
            />
          </div>
        </Fade>

        <Fade right>
          <div className="flex p-0 w-full h-56 justify-center pink-text-container">
            <img
              src={fotoNao}
              alt="Nao Picture"
              className="h-full px-4"
            />
            <div className="flex flex-col justify-center items-end text-right px-8 w-4/6 h-full text-white ">
              <Link to="/nao">
                <img src={nao} alt="nao logo" className="w-64 md:pl-4 mb-2" />
              </Link>
              NAO is one of the biggest and most prestigious <br />
              accounting competition for undergraduates in Indonesia
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="flex p-0 w-full h-56 green-text-container justify-center">
            <div className="flex flex-col justify-center text-left px-8 w-4/6 h-full text-white ">
              <Link to="/jnc">
                <img src={jnc} alt="jnc logo" className="w-64 md:pl-4 mb-2" />
              </Link>
              JNC is the event expansion in GMAD, that encompasses the aim <br /> to create an inclusive in paper research concept
            </div>
            <img
              src={fotoJnc}
              alt="JNC Picture"
              className="h-full px-4"
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Events;
