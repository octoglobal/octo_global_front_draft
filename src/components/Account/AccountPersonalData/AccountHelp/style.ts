import {styled, Typography} from '@mui/material';

export const useAccountHelpStyle = () => {

	const HelpWrapperMUI = styled('div')(() => ({
		// border: '1px solid blue',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',

		'& > *': {
			margin: '0 36px',
		},
		'& > :last-child': {
			marginRight: '0',
		},
	}));

	const HelpItemMUI = styled('div')(() => ({
		// border: '1px solid black',
		cursor: 'pointer',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}));

	const HelpImageMUI = styled('picture')(() => ({
		width: '43px',
		height: '43px',
	}));

	const HelperTextMUI = styled(Typography)(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		textDecorationLine: 'underline',
		color: '#C4C4C4',

		marginTop: '8px',
	}));

	return {
		HelpWrapperMUI,
		HelpItemMUI,
		HelpImageMUI,
		HelperTextMUI
	};
};
