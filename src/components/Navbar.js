import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
	return (
		<nav
			className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
			role='navigation'
		>
			<Link to='/' className='pl-8 text-lg font-bold'>
				BMB
			</Link>
			<div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6'
				>
					<path
						fillRule='evenodd'
						d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			<div className='pr-8 md:block hidden'>
				<Link className='p-4' to='/'>
					Home
				</Link>
				<Link className='p-4' to='/menu'>
					Menu
				</Link>
				<Link className='p-4' to='/about'>
					About
				</Link>
				<Link className='p-4' to='/contact'>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
