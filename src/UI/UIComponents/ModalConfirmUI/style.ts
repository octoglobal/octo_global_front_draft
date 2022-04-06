import React from 'react';
import {Dialog, styled, DialogActions, Backdrop} from '@mui/material';

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

		marginBottom: '70px',

		color: '#000000',

		[theme.breakpoints.down(500)]: {
			textAlign: 'center',
			fontSize: '18px',
			lineHeight: '21px',

			marginBottom: '23px',
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

	const BackDropBlurMUI = styled(Backdrop, {
		name: 'MuiModal',
		slot: 'Backdrop',
		overridesResolver: (props, styles) => {
			return styles.backdrop
		},
	})({
		background: 'rgba(255, 255, 255, 0.5)',
		backdropFilter: 'blur(1px)',
		filter: 'blur(3px)',

		position: 'fixed',
		display: 'flex',
		// -moz-box-align: center,
		alignItems: 'center',
		// -moz-box-pack: 'center',
		justifyContent: 'center',
		inset: '0px',
		zIndex: '-1',
	});

	// const BackDropBlur: React.CSSProperties = {
	// 	blur: {
	// 		background: 'rgba(255, 255, 255, 0.5)',
	// 		backdropFilter: 'blur(10px)',
	// 	}
	//
	// };

	const ButtonConfirmUI = {
		width: '135px',
		height: '32px',
		minWidth: '93px',

		opacity: '0.8',
		marginRight: '80px',
	};

	return {
		BackDropBlurMUI,
		ModalUI,
		ButtonCancelUI,
		ButtonConfirmUI,
		DialogActionsUI,
		DialogTitleUI
	};
};
