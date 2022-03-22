import React from 'react';

const Header = () => {
	return (
		<div style={{
			height: '61px',
			width: '100%',
			border: '1px solid green',
		}}>
			header
		</div>
	);
};

export default React.memo(Header);
