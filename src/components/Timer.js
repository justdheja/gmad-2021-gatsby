import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import { useTimer } from 'react-timer-hook';
import atalkWhite from '../images/atalk_white.png';

function Timer({ expiryTimestamp }) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  // let myDate = "26-08-2021"
  // myDate = myDate.split("-")
  // const time = new Date(myDate[2], myDate[1] - 1, myDate[0])

	// const { seconds, minutes, hours, days } = useTimer({
	// 	time
	// });

  
  let countDownDate = new Date("Sep 5, 2021 15:37:25").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      let now = new Date().getTime()

      // Find the distance between now and the count down date
      let distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      var d = Math.floor(distance / (1000 * 60 * 60 * 24))
      var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      var s = Math.floor((distance % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)
  }, [])

	return (
    <div className="min-h-screen bg-timer p-8 pt-20 text-white">
      <div className="text-center">
        <h2 className="text-6xl title-timer">We Are</h2>
        <h2 className="text-6xl uppercase poppins">Coming Soon!</h2>
        <p className="text-2xl">
          We are working very hard to give you the best experiences through our
          events.
        </p>
      </div>

      <Fade bottom>
        <div className="flex w-full flex-col md:flex-row justify-center items-center my-20 md:space-x-12">
          <div className="text-center flex items-center justify-center w-56 h-56 bg-timer-red">
            <div className="my-auto">
              <div className="timer-number poppins font-semibold">
                {days < 10 ? "0" + days : days}
                {/* {timer().days} */}
              </div>
              <br />
              Hari
            </div>
          </div>
          <div className="text-center flex items-center justify-center w-56 h-56 bg-timer-orange">
            <div>
              <div className="timer-number poppins font-semibold">
                {hours < 10 ? "0" + hours : hours}
              </div>
              <br />
              Jam
            </div>
          </div>
          <div className="text-center flex items-center justify-center w-56 h-56 bg-timer-yellow">
            <div>
              <div className="timer-number poppins font-semibold">
                {minutes < 10 ? "0" + minutes : minutes}
              </div>
              <br />
              Menit
            </div>
          </div>
          <div className="text-center flex items-center justify-center w-56 h-56 bg-timer-grey">
            <div>
              <div className="timer-number poppins font-semibold">
                {seconds < 10 ? "0" + seconds : seconds}
              </div>
              <br />
              Detik
            </div>
          </div>
        </div>
      </Fade>

      <img className="h-20 mx-auto mt-12" src={atalkWhite} alt="logo_atalk" />
    </div>
  )
}

export default Timer;
