import React from "react"
import igicon from '../images/icon_instagram.webp'
import lineicon from '../images/icon_line.png'
import linkedinicon from '../images/icon_linkedin.png'

const Contacts = () => {
  return (
    <div className="min-h-screen container-contact-us flex flex-col items-center md:justify-around p-16 space-y-8">
      <h2 className="text-6xl text-white font-bold text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-around lg:pt-12 w-full h-full">
        <a
          href="https://www.instagram.com/gmad.ugm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={igicon} className=" w-24" alt="instagram" />
        </a>
        <a
          href="https://liff.line.me/1645278921-kWRPP32q?accountId=aju6891t&openerPlatform=native&openerKey=talkroom%3Amessage#mst_challenge=O4XGNlX_dzY1ej85a48ulf2G79sR-QOWWK4gGFtObzE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={lineicon} className=" w-24" alt="line" />
        </a>
        <a
          href="https://www.linkedin.com/company/gmad.ugm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinicon} className=" w-24" alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Contacts
