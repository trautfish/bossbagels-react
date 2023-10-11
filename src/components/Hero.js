import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const Hero = () => {
	return (
		<div className='bg-white h-screen flex flex-col justify-center items-center'>
			<h1 className='lg:text-6xl md:text-6xl sm:text-4xl font-black mb-14'>
				BOSS MONSTER BAGELS
			</h1>
			<Link
				to='/menu'
				className='py-4 px-8 bg-yellow-500 rounded-full text-2xl hover:bg-yellow-300 transition duration-500 ease-in-out flex items-center font-mono'
			>
				Order Now
				<ShoppingBagIcon className='h-6 w-6 ml-4' />
			</Link>
		</div>
	);
};

export default Hero;
