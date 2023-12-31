import React from 'react';
import MenuContent from '../components/MenuContent';

const Menu = () => {
	return (
		<>
			<div className='bg-teal-600 py-40'>
				<h1 className='flex justify-center text-5xl uppercase font-black mb-40'>
					Menu
				</h1>
				<MenuContent />
			</div>
		</>
	);
};

export default Menu;
