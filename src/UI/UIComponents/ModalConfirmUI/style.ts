import React from 'react';
import {styled, DialogActions} from '@mui/material';

export const useModalConfirmStyle = () => {

	const ModalUI = styled('div')(({theme}) => ({
		background: '#F1F4F9',
		boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',

		padding: '80px 70px',
		[theme.breakpoints.down(500)]: {
			padding: '20px 30px',
		}
	}));

	const DialogTitleUI = styled('h4')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',

		color: '#000000',

		[theme.breakpoints.down(500)]: {
			textAlign: 'center',
			fontSize: '18px',
			lineHeight: '21px',
		}
	}));

	const DialogActionsUI = styled(DialogActions)(() => ({
		display: 'flex',
		justifyContent: 'center'
	}));

	const ButtonCancelUI: React.CSSProperties = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '21px',
		textDecorationLine: 'underline',
		color: '#274D82',
		background: 'initial',

		width: '65px',
		height: '21px',
		textTransform: 'none',
	};

	const ButtonConfirmUI = {
		width: '135px',
		height: '32px',

		marginRight: '80px',
	};

	return {
		ModalUI,
		ButtonCancelUI,
		ButtonConfirmUI,
		DialogActionsUI,
		DialogTitleUI
	};
};
