import {styled} from '@mui/material';

export const useLinkStyle = () => {

	const LinkUI = styled('a')(({theme}) => ({
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

		[theme.breakpoints.down(1024)]: {
			fontSize: '14px',
			lineHeight: '16px',
		}
	}));

	return {
		LinkUI
	};
};
