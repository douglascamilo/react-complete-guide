import React from 'react';

const Validation = (props) => {
	let message = 'Text is too short';

	if (props.textLength > 5) {
		message = 'Text long enough'
	}

	return (
			<div>
				<p>{message}</p>
			</div>
	);
};

export default Validation;
