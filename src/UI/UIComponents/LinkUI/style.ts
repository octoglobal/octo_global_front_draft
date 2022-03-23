import {styled, Link} from '@mui/material';

export const useLinkStyle = () => {

	const LinkUI = styled(Link)(() => ({
		color: '#000000',
		cursor: 'pointer',
		textDecoration: 'none',

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
