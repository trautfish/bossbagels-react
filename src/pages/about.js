import React from 'react';
import AboutContent from '../components/AboutContent';

const About = () => {
	return (
		<div className=' bg-yellow-400 py-40'>
			<h1 className='flex justify-center text-5xl uppercase font-black mb-40'>
				About Us
			</h1>
			<AboutContent />
		</div>
	);
};

export default About;
