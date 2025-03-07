import {styled} from '@mui/material';

export const useMenuAuthContentStyle = () => {

	const MenuLinksUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginTop: '10px',
		'& a': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '16px',
			lineHeight: '19px',
			color: '#000000',
			textAlign: 'start',
			marginBottom: '25px',
		},

		'& a:last-child': {
			marginBottom: '25px',
		}
	}));

	const UserUI = styled('div')(() => ({
		marginBottom: '16px',
	}));

	const ExitLinkUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#274D82',

		cursor: 'pointer',
	}));

	const ButtonsAuthUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center'
	}));

	const ButtonLogin = {
		width: '111px',
		height: '32px',
		background: '#274D82',
		opacity: '0.8',
		borderRadius: '3px',

		marginRight: '35px',
	};

	const ButtonSignUp = {
		width: '96px',
		height: '19px',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '16px',
		lineHeight: '19px',
		color: '#274D82',
		background: 'inherit',
	};

	return {
		MenuLinksUI,
		ButtonsAuthUI,
		ButtonLogin,
		ButtonSignUp,
		UserUI,
		ExitLinkUI
	};
};
