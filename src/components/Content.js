import React from 'react';
import ImageOne from '../images/plain_bagel.jpg';
import ImageTwo from '../images/bagel_flight.jpg';

const Content = () => {
	return (
		<>
			<div className='menu-card'>
				<img
					src={ImageOne}
					alt='Plain Bagel'
					className='h-full rounded mb-20 shadow'
				/>
				<div className='center-content'>
					<h2 className='text-2xl mb-2 pt-10'>Plain Bagel</h2>
					<p className='mb-2'>
						The original classic - boiled and baked
					</p>
					<span className='text-lg'>$2</span>
				</div>
			</div>
			<div className='menu-card'>
				<img
					src={ImageTwo}
					alt='Bagel Flight'
					className='h-full rounded mb-20 shadow'
				/>
				<div className='center-content'>
					<h2 className='text-2xl mb-2 pt-10'>Bagel Flight</h2>
					<p className='mb-2'>
						A four-bagel lineup accessorized with your choice of
						schmear
					</p>
					<span className='text-lg'>$10</span>
				</div>
			</div>
		</>
	);
};

export default Content;
