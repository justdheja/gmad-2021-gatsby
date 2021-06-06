import React from 'react';
import { useTimer } from 'react-timer-hook';

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
				<p className="text-2xl">We are working very hard to give you the best experiences through our events.</p>
			</div>
			
			<div className="font-bold">
				<span>{days} Hari </span>
				<span>{hours} Jam </span>
				<span>{minutes} Menit </span>
				<span>{seconds} Detik</span>
			</div>
		</div>
	);
}

export default Timer;
