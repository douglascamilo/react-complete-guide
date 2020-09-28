import React from 'react';

const UserInput = (props) => {
	const componentStyle = {
		border: '2px solid red'
	};

	return <input
			type="text"
			style={componentStyle}
			onChange={props.changedHandler}
			value={props.initialValue} />;
};

export default UserInput;
