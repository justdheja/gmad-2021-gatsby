import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import yolanda from "../images/yolanda.webp"
import severinus from "../images/severinus.webp"
import gabriel from "../images/gabriel.webp"
import annisa from "../images/annisa.webp"
import wuri from "../images/wuri.webp"
import nova from "../images/nova.webp"
import herry from "../images/herry.webp"
import atalk from "../images/atalk_white.webp"
import gmadPutih from "../images/gmad_putih.png"

const AtalkSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="min-h-screen">
        <Slider {...settings} className="m-auto">
          <div className=" min-h-screen lg:p-8">
            <div className="flex flex-col text-center space-y-8 lg:px-16 relative">
              <div className="absolute top-0 right-0 z-50">
                <div className="lg:flex hidden">
                  <img src={gmadPutih} className="h-20" alt="gmad" />
                  <img src={atalk} className="h-16" alt="atalk" />
                </div>
              </div>
              <div className="">
                <h1 className="text-6xl font-medium text-white text-shadow-teal">
                  Talk Show
                </h1>
                <h4 className="text-2xl font-medium font-orange">
                  Accounting Talk | 2021
                </h4>
              </div>
              <div className="">
                <h3 className="text-3xl text-white text-left">Our Speakers:</h3>
                <div className="atalk-speaker-border mb-4" />
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-around m-auto">
                  <div className="text-center">
                    <img src={yolanda} alt="yoladna" className="m-auto h-48" />
                    <h4 className="text-xl font-semibold font-orange">
                      Yolanda Agatha
                    </h4>
                    <h5 className="text-white">Owner of Salad Nyoo</h5>
                  </div>
                  <div className="text-center">
                    <img
                      src={severinus}
                      alt="severinus"
                      className="m-auto h-48"
                    />
                    <h4 className="text-xl font-semibold font-orange">
                      Severinus Indra Wijaya
                    </h4>
                    <h5 className="text-white">
                      Chairperson of Dewan <br /> Standar Akuntansi Keuangan IAI
                    </h5>
                  </div>
                  <div className="text-center">
                    <img src={gabriel} alt="gabriel" className="m-auto h-48" />
                    <h4 className="text-xl font-semibold font-orange">
                      Gabriel Frans
                    </h4>
                    <h5 className="text-white">
                      CEO and Co-founder of <br /> CrediBook
                    </h5>
                  </div>
                </div>
              </div>
              <div className="md:w-6/12 m-auto">
                <h3 className="text-3xl text-white text-left">Moderator:</h3>
                <div className="atalk-speaker-border mb-4" />
                <div className="text-center">
                  <img
                    src={annisa}
                    alt="annisa"
                    className="m-auto w-48 h-48 object-cover object-top shadow"
                  />
                  <h4 className="text-xl font-semibold font-orange">
                    Annisa Hayatun Nazmi Burhan, S.E., M.Sc.
                  </h4>
                  <h5 className="text-white">
                    FEB UGM lecturer and Vice Coordinator of Public <br />
                    Sector and Taxation Study Center in UGM
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="min-h-screen lg:p-8">
            <div className="flex flex-col text-center space-y-20 lg:px-16 relative">
              <div className="absolute top-0 right-0 z-50">
                <div className="lg:flex hidden">
                  <img src={gmadPutih} className="h-20" alt="gmad" />
                  <img src={atalk} className="h-16" alt="atalk" />
                </div>
              </div>
              <div className="">
                <h1 className="text-6xl font-medium text-white text-shadow-teal">
                  Webinar
                </h1>
                <h4 className="text-2xl font-medium font-orange">
                  Accounting Talk | 2021
                </h4>
              </div>
              <div className="lg:flex justify-around">
                <div className="">
                  <h3 className="text-3xl text-white text-center mb-10">
                    Our Speakers:
                  </h3>
                  <div className="lg:flex justify-around lg:space-x-56 space-y-8 lg:space-y-0">
                    <div className="text-center">
                      <img src={herry} alt="gabriel" className="m-auto h-48" />
                      <h4 className="text-xl font-semibold font-orange">
                        Herry Setiadi
                      </h4>
                      <h5 className="text-white">
                        Partner of Pricewaterhouse <br /> Cooper (PwC) Indonesia
                      </h5>
                    </div>
                    <div className="text-center">
                      <img src={nova} alt="gabriel" className="m-auto h-48" />
                      <h4 className="text-xl font-semibold font-orange">
                        Nova Kurniawan
                      </h4>
                      <h5 className="text-white">
                        Senior Manager of Finance <br /> Business Partner at{" "}
                        <br /> PT Semen Indonesia
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="lg:w-12 atalk-webinar-border m-8" />
                <div className="">
                  <h3 className="text-3xl text-white text-center mb-10">
                    Moderator:
                  </h3>
                  <div className="lg:flex justify-between">
                    <div className="text-center">
                      <img src={wuri} alt="gabriel" className="m-auto h-48" />
                      <h4 className="text-xl font-semibold font-orange">
                        Wuri Handayani, Ph.D
                      </h4>
                      <h5 className="text-white">FEB UGM lecturer</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <style jsx>{`
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #f37121;
        }
        .slick-dots li button:before {
          font-size: 16px;
          line-height: 20px;
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 20px;
          content: "•";
          text-align: center;
          opacity: 0.25;
          color: #f9bc6b;
        }
        .slick-next:before,
        .slick-prev:before {
          font-size: 20px;
          line-height: 1;
          opacity: 0.75;
          color: #f37121;
        }
      `}</style>
    </>
  )
}

export default AtalkSlide
