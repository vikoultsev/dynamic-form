import React from 'react';
import { string, bool, node } from 'prop-types';
import './SingleQuestion.css'

const SingleQuestion = ({ prompt, is_required, component }) => {
	return (
		<div className="SingleQuestion">
			<h2 className="SingleQuestion__prompt">{prompt}</h2>
			<p className="SingleQuestion__required">{is_required ? '* Required!' : 'Optional.'}</p>
			<div className="SingleQuestion__data">{component}</div>
		</div>
	)
}

SingleQuestion.propTypes = {
	prompt: string,
	is_required: bool,
	component: node
}

export default SingleQuestion
