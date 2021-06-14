import React from "react"
import Layout from "../components/Layout"
import Timer from '../components/Timer'

const atalk = () => {
  let myDate = "26-08-2021"
  myDate = myDate.split("-")
  const time = new Date(myDate[2], myDate[1] - 1, myDate[0])

  return (
    <Layout>
      <Timer expiryTimestamp={time} />
    </Layout>
  )
}

export default atalk
