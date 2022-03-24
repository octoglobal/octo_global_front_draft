import {styled, Link} from '@mui/material';

export const useLinkStyle = () => {

	const LinkUI = styled(Link)(() => ({
		color: '#000000',
		cursor: 'pointer',
		textDecoration: 'none',

		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '21px',

		'&:link': {
			color: '#000000',
		},
		'&:visited': {
			color: '#000000',
		},
	}));

	return {
		LinkUI
	};
};
