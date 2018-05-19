import React from 'react';
import { func, bool } from 'prop-types';
import Button from '../Button/Button';
import './Footer.css';

const Footer = ({ isPrevDisabled, isNextDisabled, onPrevClick, onNextClick }) => {
	return (
		<footer className="Footer">
			<div className="Footer__button">
				<Button onClick={onPrevClick} disabled={isPrevDisabled}>{'< Prev'}</Button>
			</div>
			<div className="Footer__button">
				<Button onClick={onNextClick} disabled={isNextDisabled}>{'Next >'}</Button>
			</div>
		</footer>
	)
}

Footer.propTypes = {
	isPrevDisabled: bool,
	isNextDisabled: bool,
	onPrevClick: func,
	onNextClick: func
}

export default Footer
