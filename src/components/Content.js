import React from 'react';
import ImageOne from '../images/plain_bagel.jpg';
import ImageTwo from '../images/bagel_flight.jpg';

const Content = () => {
	return (
		<>
			<div class='grid grid-rows-3 grid-flow-col gap-5 place-content-center rounded-md'>
				<div className='menu-card'>
					<img
						src={ImageOne}
						alt='Plain Bagel'
						className='w-full max-h-60'
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold text-xl mb-2'>Plain Bagel</h2>
						<p className='font-semibold text-gray-600 mb-2'>
							The original NY classic - boiled and baked
						</p>
						<span className='font-medium text-lg'>$2</span>
					</div>
				</div>
				<div className='menu-card'>
					<img
						src={ImageTwo}
						alt='Bagel Flight'
						className='w-full max-h-60'
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold text-xl mb-2'>Bagel Flight</h2>
						<p className='font-semibold text-gray-600 mb-2'>
							A four-bagel lineup accessorized with your choice of
							schmear
						</p>
						<span className='font-medium text-lg'>$10</span>
					</div>
				</div>
				<div className='menu-card'>
					<img
						src={ImageOne}
						alt='Plain Bagel'
						className='w-full max-h-60'
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold text-xl mb-2'>Plain Bagel</h2>
						<p className='font-semibold text-gray-600 mb-2'>
							The original NY classic - boiled and baked
						</p>
						<span className='font-medium text-lg'>$2</span>
					</div>
				</div>
				<div className='menu-card'>
					<img
						src={ImageOne}
						alt='Plain Bagel'
						className='w-full max-h-60'
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold text-xl mb-2'>Plain Bagel</h2>
						<p className='font-semibold text-gray-600 mb-2'>
							The original NY classic - boiled and baked
						</p>
						<span className='font-medium text-lg'>$2</span>
					</div>
				</div>
				<div className='menu-card'>
					<img
						src={ImageOne}
						alt='Plain Bagel'
						className='w-full max-h-60'
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold text-xl mb-2'>Plain Bagel</h2>
						<p className='font-semibold text-gray-600 mb-2'>
							The original NY classic - boiled and baked
						</p>
						<span className='font-medium text-lg'>$2</span>
					</div>
				</div>
				<div className='menu-card'>
					<img
						src={ImageOne}
						alt='Plain Bagel'
						className='w-full max-h-60'
					/>
					<div className='px-6 py-4'>
						<h2 className='font-bold text-xl mb-2'>Plain Bagel</h2>
						<p className='font-semibold text-gray-600 mb-2'>
							The original NY classic - boiled and baked
						</p>
						<span className='font-medium text-lg'>$2</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
