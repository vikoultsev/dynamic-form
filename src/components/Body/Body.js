import React from 'react';
import { string, bool, node } from 'prop-types';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Body = ({ prompt, is_required, component }) => {
	return (
		<main>
			<SingleQuestion
				prompt={prompt}
				is_required={is_required}
				component={component}
			/>
		</main>
	)
}

Body.propTypes = {
	prompt: string,
	is_required: bool,
	component: node
}

export default Body
