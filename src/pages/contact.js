import React from 'react';
import ContactContent from '../components/ContactContent';

const Contact = () => {
	return (
		<div className=' bg-purple-400 py-40'>
			<h1 className='flex justify-center text-5xl uppercase font-black mb-40'>
				Contact Us
			</h1>
			<ContactContent />
		</div>
	);
};

export default Contact;
