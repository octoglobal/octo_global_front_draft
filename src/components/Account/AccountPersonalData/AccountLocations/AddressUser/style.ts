import {styled, Typography} from '@mui/material';

export const useAddressUserStyle = () => {

	const FormUI = styled('div')(({theme}) => ({
		display: 'flex',

		margin: '33px 0',

		'&:first-child': {
			marginTop: '0px',
		},

		[theme.breakpoints.down(500)]: {
			marginTop: '24px',
			marginBottom: '15px',

			'&:first-child': {
				marginTop: '33px',
			},
		}
	}));

	const FormWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',
		// marginTop: '25px',

		display: 'grid',
		gridTemplateColumns: '105px 501px',
		gridTemplateRows: 'auto auto auto auto auto',
		gridColumnGap: '21px',
		gridRowGap: '10px',

		[theme.breakpoints.down(500)]: {
			marginBottom: '0px',

			gridTemplateColumns: 'auto auto',
			gridColumnGap: '10px',
		}
	}));

	const FormRowTitleUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',

		[theme.breakpoints.down(500)]: {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '16px',
			lineHeight: '19px',
			color: '#000000',
		}
	}));


	const FormRowTextUI = styled(Typography)(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',

		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '19px',
		}
	}));

	const FormIconUI = styled('span')(() => ({
		height: 'fit-content',

		'& svg': {
			cursor: 'pointer'
		}
	}));


	return {
		FormUI,
		FormWrapperUI,
		FormRowTitleUI,
		FormRowTextUI,
		FormIconUI
	};
};
