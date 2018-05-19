import React from 'react';
import { string } from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ width }) => {
	return (
		<div className="ProgressBar">
			<div className="ProgressBar__track" style={{ width }}/>
		</div>
	)
}

ProgressBar.propTypes = {
	width: string
}

export default ProgressBar