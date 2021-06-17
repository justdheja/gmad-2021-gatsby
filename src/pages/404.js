import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import notFoundImage from "../images/not-found-image.svg"

export default () => {
  return (
    <>
      <Layout page="Not Found">
        <div className="bg-header-home w-full">
          <main className="max-w-4xl min-h-screen flex-grow mx-auto flex flex-col justify-around items-center p-8">
            <h2 className="text-4xl text-white font-semibold">
              Ooops Not Found!
            </h2>
            <img className="p-4" src={notFoundImage} alt="Page not found" />
            <Link
              to="/"
              className="p-2 md:ml-0 font-semibold cursor-pointer bg-palette-orange hover:bg-palette-dusty text-sm text-white transition ease-in duration-200 text-center text-base w-6/12 shadow-lg rounded-full"
            >
              Back to Home
            </Link>
          </main>
        </div>
      </Layout>
    </>
  )
}
