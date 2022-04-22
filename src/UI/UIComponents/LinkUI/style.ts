import {styled} from '@mui/material';

export const useLinkStyle = () => {

	const LinkUI = styled('a')(({theme}) => ({
		color: '#000000',
		cursor: 'pointer',
		textDecoration: 'none',

		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23.44px',
		webkitAppearance: 'none',

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
