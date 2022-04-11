import React, {FC} from 'react';
import {styled} from '@mui/material';

const HeaderMargin: FC = () => {

	const HeaderMarginMUI = styled('section')(({theme}) => ({
		height: '61px',
		width: '100%',
		backgroundColor: '#FFFFFF',
		visibility: 'hidden',
		[theme.breakpoints.down(1181)]: {
			height: '71px'
		},
		[theme.breakpoints.down(1025)]: {
			height: '65px'
		},
		[theme.breakpoints.down(501)]: {
			height: '70px'
		}
	}));

	return (
		<HeaderMarginMUI/>
	);
};

export default React.memo(HeaderMargin);
