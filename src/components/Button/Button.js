import React from 'react';
import { bool, node, func } from 'prop-types';
import './Button.css';

const Button = ({disabled, children, onClick}) => {
	return (
		<button
			type='button'
			className='Button'
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	disabled: bool,
	children: node,
	onClick: func

}

export default Button
