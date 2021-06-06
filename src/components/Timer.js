import React from 'react';
import { useTimer } from 'react-timer-hook';
import atalkWhite from '../images/atalk_white.png';

function Timer({ expiryTimestamp }) {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp,
		onExpire: () => console.log('time expired'),
	});
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

      <div className="flex w-full flex-col md:flex-row justify-center items-center my-20 md:space-x-12">
        <div className="text-center flex items-center justify-center w-56 h-56 bg-timer-red">
          <div className="my-auto">
            <div className="timer-number poppins font-semibold">
              {days < 10 ? "0" + days : days}
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

      <img className="h-20 mx-auto mt-12" src={atalkWhite} alt="logo_atalk" />
    </div>
  )
}

export default Timer;
