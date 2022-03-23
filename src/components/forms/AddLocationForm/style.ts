import {styled} from '@mui/material';

export const useAddLocationFormStyle = () => {

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

	const ButtonSubmitUI = {
		width: '135px',
		height: '32px',
	};

	return {
		FormWrapper,
		FormRowTitle,
		FormRowTextField,
		ButtonSubmitUI
	};
};
