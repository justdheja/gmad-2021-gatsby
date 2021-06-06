import React from 'react';
import Timer from './Timer';
import { Slide } from 'react-reveal';
import { Link } from 'gatsby';

function Events() {
	let myDate = '26-05-2021';
	myDate = myDate.split('-');
	const time = new Date(myDate[2], myDate[1] - 1, myDate[0]);
	return (
		<div className="events-container lg:flex justify-center items-center py-8 relative">
			<div className="lg:flex justify-center items-center content-around min-h-96 w-full">
				<Slide left>
					<div className="w-72 mx-auto bg-white border-t-8 rounded dark:bg-gray-800 shadow-lg text-center p-4 m-4 jnc">
						<div className="overflow-hidden">
							<div className="text-2xl font-medium mb-8 text-gray-800 dark:text-white">
								Logo JNC
							</div>
							<div className="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-10">
								<div className="font-bold">JNC</div>
								<div className="text-center mt-4">
									Lorem ipsum dolor sit amet
								</div>
							</div>
							<div className="px-4 mt-8 pb-8">
								<Link to="/jnc">
									<button
										type="button"
										className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full jnc-btn"
									>
										Selengkapnya
									</button>
								</Link>
							</div>
						</div>
					</div>
				</Slide>

				<Slide bottom>
					<div className="w-72 h-80 mx-auto bg-white border-t-8 rounded dark:bg-gray-800 shadow-lg text-center p-4 m-4 atalk">
						<div className="overflow-hidden">
							<div className="text-2xl font-medium mb-8 text-gray-800 dark:text-white">
								Logo ATalk
							</div>
							<div className="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-10">
								<div className="font-bold">ATalk</div>
								<div className="text-center mt-4">
									Lorem ipsum dolor sit amet
								</div>
							</div>
							<div className="px-4 mt-8 pb-8">
								<Link to="/atalk">
									<button
										type="button"
										className="py-2 px-4  bg-indigo-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none  rounded-full atalk-btn"
									>
										Selengkapnya
									</button>
								</Link>
							</div>
						</div>
					</div>
				</Slide>

				<Slide right>
					<div className="w-72 mx-auto bg-white border-t-8 rounded dark:bg-gray-800 shadow-lg text-center p-4 m-4 nao">
						<div className="overflow-hidden">
							<div className="text-2xl font-medium mb-8 text-gray-800 dark:text-white">
								Logo NAO
							</div>
							<div className="leading-loose text-sm font-light text-gray-700 dark:text-gray-50 mb-10">
								<div className="font-bold">NAO</div>
								<div className="text-center mt-4">
									Lorem ipsum dolor sit amet
								</div>
							</div>
							<div className="px-4 mt-8 pb-8">
								<Link to="/nao">
									<button
										type="button"
										className="py-2 px-4  nao-btn  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-full "
									>
										Selengkapnya
									</button>
								</Link>
							</div>
						</div>
					</div>
				</Slide>
			</div>
		</div>
	);
}

export default Events;
