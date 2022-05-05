import {styled, Typography} from '@mui/material';

export const useAddressUserStyle = () => {

	const FormUI = styled('div')(({theme}) => ({
		display: 'flex',

		// margin: '0px 0 20px',
		// marginBottom: '5px',
		borderBottom: '2px solid rgba(39, 77, 130, 0.5)',
		marginTop: '20px',

		'&:first-child': {
			marginTop: '0px',
		},

		[theme.breakpoints.down(500)]: {
			// marginTop: '24px',
			marginBottom: '15px',
			width: '100%',

			// '&:first-child': {
			// 	// marginTop: '33px',
			// },
		}
	}));

	const FormWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',
		// marginTop: '25px',

		display: 'grid',
		gridTemplateColumns: '87px 451px',
		gridTemplateRows: 'auto auto auto auto auto',
		gridColumnGap: '21px',
		gridRowGap: '10px',

		[theme.breakpoints.down(500)]: {
			marginBottom: '0px',

			gridTemplateColumns: '70px  auto',
			gridColumnGap: '10px',
		}
	}));

	const FormRowTitleUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '20px',
		lineHeight: '24px',
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

		wordWrap: 'break-word',

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
