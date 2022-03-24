import {styled, Typography} from '@mui/material';

export const useAddressUserStyle = () => {

	const FormWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
		marginBottom: '25px',

		display: 'grid',
		gridTemplateColumns: '105px 501px',
		gridTemplateRows: 'auto auto auto auto auto',
		gridColumnGap: '21px',
		gridRowGap: '10px',
	}));

	const FormRowTitleUI = styled('div')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
	}));


	const FormRowTextUI = styled(Typography)(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
	}));


	return {
		FormWrapperUI,
		FormRowTitleUI,
		FormRowTextUI,
	};
};
