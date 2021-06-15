import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import logoGmad from '../images/logo.png'

const Navbar = ({ location }) => {
  const [url, setUrl] = useState(window.location.pathname)

  return (
    <div>
      <div className="absolute w-screen z-50">
        <nav
          // className={
          //   window.location.pathname === "/nao" ||
          //   window.location.pathname === "/jnc"
          //     ? "transition ease-in duration-200 bg-palette-blue"
          //     : "transition ease-in duration-200"
          // }
        >
          <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
              <div class="w-full justify-between flex items-center text-white">
                <Link class="flex-shrink-0" to="/">
                  <img class="h-20" src={logoGmad} alt="GMAD 2021" />
                </Link>
                <div class="hidden md:block">
                  <div
                    className={
                      url === "/" ||
                      url === "/contact"
                        ? "flex items-baseline space-x-6"
                        : "flex items-baseline space-x-6 text-gray-800"
                    }
                  >
                    <Link
                      class=" py-2 px-2 rounded-md text-sm font-medium"
                      activeClassName="px-2  bg-palette-orange text-sm text-white transition ease-in duration-200 text-center text-base  shadow-md rounded-full"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      class=" py-2 px-2 rounded-md text-sm font-medium"
                      activeClassName="px-2  bg-palette-orange text-sm text-white transition ease-in duration-200 text-center text-base  shadow-md rounded-full"
                      to="/jnc"
                    >
                      JNC
                    </Link>
                    <Link
                      class=" py-2 px-2 rounded-md text-sm font-medium"
                      activeClassName="px-2  bg-palette-orange text-sm text-white transition ease-in duration-200 text-center text-base  shadow-md rounded-full"
                      to="/nao"
                    >
                      NAO
                    </Link>
                    <Link
                      class=" py-2 mx-2 rounded-md text-sm font-medium"
                      activeClassName="px-2  bg-palette-orange text-sm text-white transition ease-in duration-200 text-center text-base  shadow-md rounded-full"
                      to="/a-talk"
                    >
                      A-TALK
                    </Link>
                    {/* <div class=" py-2 px-2 rounded-md text-sm font-medium">
                      |
                    </div>
                    <Link
                      class="  hover: dark:hover:text-white mx-8 py-2 rounded-md text-sm font-medium"
                      activeClassName="px-2  bg-palette-orange text-sm text-white transition ease-in duration-200 text-center text-base  shadow-md rounded-full"
                      to="/contact"
                    >
                      Contact
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
