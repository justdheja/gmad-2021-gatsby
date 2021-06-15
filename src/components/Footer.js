import React from 'react'
import { Link } from 'gatsby'
import logoGmad from "../images/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="py-4 text-gray-100 bg-palette-blue ">
        {/* &copy; GMAD 2021 */}
        <div className="px-8 md:px-40 flex flex-col space-y-12">
          <div className="flex flex-col space-y-6 md:flex-row md:justify-between">
            <div>
              <h1 className="poppins text-white text-2xl mb-2">GMAD 2021</h1>
              <div className="flex space-x-8">
                <div className="flex flex-col space-y-2">
                  <Link to="/">Home</Link>
                  <Link to="/jnc">JNC</Link>
                </div>
                <div className="flex flex-col space-y-2">
                  <Link to="/nao">NAO</Link>
                  <Link to="/a-talk">A-Talk</Link>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-2xl mb-2">Follow Our Social Media:</h1>
              <div className="flex space-x-4 md:justify-end">
                <a
                  href="https://www.linkedin.com/company/gmad.ugm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-2xl text-white duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/gmad.ugm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <hr className=" border-t-2 border-white" />
            <div className="md:flex w-full md:justify-between items-center">
              <img class="h-20" src={logoGmad} alt="GMAD 2021" />
              <h4>&copy; 2021 GMAD</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
