import React from 'react';
import { string, func } from 'prop-types';
import './TextField.css'

const TextField = ({ onChange, is_required, min_char_length, value }) => {
	return (
		<div className="TextField">
			<textarea
				className="TextField__input"
				onChange={onChange}
				value={value}
				minLength={is_required ? min_char_length : null}
			>
			</textarea>
			<p className="TextField__chars">
				{(is_required && min_char_length > value.length) && `You should type at least ${min_char_length - value.length} char${min_char_length - value.length > 1 ? 's' : ''} more.`}
			</p>
		</div>
	)
}

TextField.propTypes = {
	value: string,
	onChange: func
}

export default TextField
