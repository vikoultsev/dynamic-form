import React from 'react';
import { string } from 'prop-types';
import './Header.css';

const Header = ({ title }) => {
	return (
		<header className="Header">
			<h1 className="Header__title">{title}</h1>
		</header>
	)
}

Header.propTypes = {
	title: string
}

export default Header

