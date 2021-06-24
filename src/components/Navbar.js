import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import logoGmad from '../images/logo.png'

const Navbar = ({ location }) => {
  const [url, setUrl] = useState("")
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  useEffect(() => {
    setUrl(window.location.pathname)
    window.addEventListener("popstate", () => {
      setUrl(window.location.pathname)
      setMenuMobileOpen(false)
    })
    return () => {
      window.addEventListener("popstate", () => {})
    }
  }, [])

  const handleMenuMobile = () => {
    // if (menuMobileOpen) {
    //   setMenuMobileOpen()
    // }
    setMenuMobileOpen(!menuMobileOpen)
  }

  return (
    <div>
      <div className="absolute w-screen z-50">
        <nav className="">
          <div class="bg-white md:bg-transparent max-w-7xl mx-auto px-8">
            <div class="flex items-center  justify-between h-16">
              <div class="w-full justify-between flex items-center text-white">
                <Link class="flex-shrink-0" to="/">
                  <img class="h-20" src={logoGmad} alt="GMAD 2021" />
                </Link>
                <div class="hidden md:block">
                  <div
                    className={
                      url === "/nao" || url === "/jnc" || url === "/a-talk"
                        ? "flex items-baseline space-x-6 text-gray-800"
                        : "flex items-baseline space-x-6"
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
                <div class="-mr-2 flex md:hidden">
                  <button
                    className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-500"
                    onClick={handleMenuMobile}
                  >
                    {!menuMobileOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              menuMobileOpen
                ? "md:hidden hidden bg-transparent transition duration-500 ease-in-out"
                : "md:hidden bg-transparent transition duration-500 ease-in-out"
            }
          >
            <div
              class="px-4 pt-2 pb-3 space-y-1 sm:px-3 bg-white"
              onClick={handleMenuMobile}
            >
              <Link
                className="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/jnc"
              >
                JNC
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/nao"
              >
                NAO
              </Link>
              <Link
                className="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="text-gray-700 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/a-talk"
              >
                A-TALK
              </Link>
            </div>
            <div className="h-screen" onClick={handleMenuMobile}></div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
