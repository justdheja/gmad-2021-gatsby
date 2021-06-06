import React from 'react'
import Layout from '../components/Layout'

const jnc = () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Gatsby Starter Tailwind CSS
            </h1>
            <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
              Start your Gatsby and Tailwind CSS project easily with this Gatsby
              Starter
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <a
            href="https://github.com/melanienolan/gatsby-starter-tailwind-css"
            className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default jnc
