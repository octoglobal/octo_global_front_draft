import React from 'react';
import {styled} from '@mui/material';

export const useAddLocationFormStyle = () => {

	const FormUI = styled('form')(({theme}) => ({
		display: 'flex',
		margin: '5px 0 0',
		[theme.breakpoints.down(500)]: {
			marginTop: '24px',
		}
	}));

	const FormWrapper = styled('div', {
		shouldForwardProp: (prop) => prop !== 'increaseFormField',
	})<{increaseFormField?: boolean}>(({theme, increaseFormField = false}) => ({
		width: '100%',
		height: '100%',

		display: 'grid',
		gridTemplateColumns: `87px ${increaseFormField ? 501 : 451}px`,
		gridTemplateRows: 'auto auto auto auto auto',
		gridColumnGap: `${increaseFormField ? 39 : 21}px`,
		gridRowGap: `${increaseFormField ? 15 : 10}px`,

		[theme.breakpoints.down(660)]: {
			gridTemplateColumns: '87px auto',
		},

		[theme.breakpoints.down(501)]: {
			gridTemplateColumns: 'auto',
			gridTemplateRows: 'auto auto auto auto',
			gridRowGap: `${increaseFormField ? 10 : 15}px`,

			'& > div:last-child': {
				marginTop: '10px',
			}
		}
	}));

	const FormRowTitle = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
		paddingTop: '13px',

		[theme.breakpoints.down(501)]: {
			fontSize: '16px',
			lineHeight: '19px',

			display: 'none'
		}
	}));

	const FormTextFieldUI = {
		width: '50%',
		height: '49px !important',
		textAlign: 'start',
		borderRadius: '5px',
		// border: '1px solid #DFE4EC',
		// boxSizing: 'border-box',
		// boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& label': {
			transform: 'translate(14px, 2px) scale(1)',
		},

		'& .MuiOutlinedInput-root': {
			'& input': {
				padding: '0px 14px',
				height: '49px !important',
				color: 'black',

				fontFamily: 'Roboto',
				fontStyle: 'normal',
				fontWeight: '300',
				fontSize: '20px',
				lineHeight: '18px',

				'-webkit-text-fill-color': 'black',
			},

			'& fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
			'&:hover fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
			'&.Mui-focused fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
		},
	};

	const FormRowTextField = styled('div')(({theme}) => ({

		// width: '501px',

		'&:last-child': {
			justifySelf: 'end',
			marginTop: '11px',
		},

		'& .MuiFormControl-root': {
			// border: 'none',
			// boxShadow: 'none',

			border: '1px solid #DFE4EC',
			boxSizing: 'border-box',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',

			height: 'auto',
		},

		'& .MuiFormControl-root input:focus ': {
			// border: '1px solid #DFE4EC',
			// boxSizing: 'border-box',
			// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
		},

		[theme.breakpoints.down(500)]: {
			'& input': {
				fontWeight: '300 !important',
				fontSize: '16px !important',
				lineHeight: '19px !important',
			},
		}
	}));

	const FormRowButtonUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: '20px'
	}));

	const ButtonSubmitUI: React.CSSProperties = {
		width: '135px',
		height: '32px',
		marginBottom: '0',
	};

	const ButtonCancelUI: React.CSSProperties = {
		background: '#fff',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',
		color: '#274D82',

		margin: '0 15px 0 0',
		width: '49px',
		height: '16px',

		alignSelf: 'center',
	};

	const FormIconUI = styled('span')(() => ({
		height: 'fit-content',

		'& svg': {
			cursor: 'pointer'
		}
	}));

	return {
		FormUI,
		FormWrapper,
		FormRowTitle,
		FormRowTextField,
		FormRowButtonUI,
		FormTextFieldUI,
		ButtonSubmitUI,
		ButtonCancelUI,
		FormIconUI
	};
};
