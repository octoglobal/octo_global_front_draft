import React from 'react';
import {styled} from '@mui/material';

export const useAddLocationFormStyle = () => {

	const FormUI = styled('form')(({theme}) => ({
		display: 'flex',
		margin: '33px 0',
		[theme.breakpoints.down(500)]: {
			marginTop: '24px',
		}
	}));

	const FormWrapper = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',

		display: 'grid',
		gridTemplateColumns: '105px 501px',
		gridTemplateRows: 'auto auto auto auto auto',
		gridColumnGap: '21px',
		gridRowGap: '10px',

		[theme.breakpoints.down(500)]: {
			gridTemplateColumns: 'auto',
		}
	}));

	const FormRowTitle = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',

		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '19px',

			display: 'none'
		}
	}));

	const FormTextFieldUI = {
		width: '50%',
		height: '32px !important',
		textAlign: 'start',

		// border: '1px solid #DFE4EC',
		// boxSizing: 'border-box',
		// boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& label': {
			transform: 'translate(14px, 2px) scale(1)',
		},

		'& .MuiOutlinedInput-root': {
			'& input': {
				padding: '0px 14px',
				height: '32px !important',
				color: 'black',

				fontFamily: 'Roboto',
				fontStyle: 'normal',
				fontWeight: '300',
				fontSize: '24px',
				lineHeight: '28px',

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
	};

	const ButtonCancelUI: React.CSSProperties = {
		background: '#fff',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',
		color: '#274D82',

		marginRight: '15px',
		width: '49px',
		height: '16px',
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
