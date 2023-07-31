import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Hero = () => {
	return (
		<div className='bg-white h-screen flex flex-col justify-center items-center'>
			<h1 className='lg:text-7xl md:text-6xl sm:text-3xl font-black mb-14'>
				BOSS MONSTER BAGELS
			</h1>
			<Link
				className='py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-500 ease-in-out flex items-center font-mono'
				to='/'
			>
				Order Now
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6 ml-4'
				>
					<path
						fillRule='evenodd'
						d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z'
						clipRule='evenodd'
					/>
				</svg>
			</Link>
		</div>
	);
};

export default Hero;
