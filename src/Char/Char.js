import React from 'react';

const Char = (props) => {
	const style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		border: '1px solid black'
	};

	return (
		<div style={style} onClick={props.clicked}>
			<p>{props.letter}</p>
		</div>
	);
};

export default Char;
