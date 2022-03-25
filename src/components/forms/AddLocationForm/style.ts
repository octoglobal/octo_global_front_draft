import {styled} from '@mui/material';

export const useAddLocationFormStyle = () => {

	const FormUI = styled('form')(() => ({
		display: 'flex',
		marginBottom: '33px',

	}));

	const FormWrapper = styled('div')(() => ({
		width: '100%',
		height: '100%',

		display: 'grid',
		gridTemplateColumns: '105px 501px',
		gridTemplateRows: 'auto auto auto auto auto',
		gridColumnGap: '21px',
		gridRowGap: '10px',
	}));

	const FormRowTitle = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
	}));

	const FormRowTextField = styled('div')(() => ({
		// width: '501px',

		'&:last-child': {
			justifySelf: 'end',
			marginTop: '11px',
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

	const ButtonSubmitUI = {
		width: '135px',
		height: '32px',
	};

	const FormIconUI = styled('span')(() => ({
		cursor: 'pointer'
	}));

	return {
		FormUI,
		FormWrapper,
		FormRowTitle,
		FormRowTextField,
		FormTextFieldUI,
		ButtonSubmitUI,
		FormIconUI
	};
};
