import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import { Switch, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
				console.log('Window resized');
			}
		};

		window.addEventListener('resize', hideMenu);

		return () => {
			window.removeEventListener('resize', hideMenu);
		};
	});

	return (
		<>
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/menu' component={Menu} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
