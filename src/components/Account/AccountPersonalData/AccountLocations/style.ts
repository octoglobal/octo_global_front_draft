import {styled, Typography} from '@mui/material';

export const useAccountLocationStyle = () => {

	const LocationWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
	}));

	const BorderWrapperUI = styled('div')(() => ({
		width: '737px',
		height: 'auto',
		background: '#FFFFFF',
		border: '5px dashed #234A82',
		boxSizing: 'border-box',
	}));

	const LocationContainerUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '21px 38px',

		'& .TabsUnstyled-root': {
			width: '95%',
		},

		'& .TabsListUnstyled-root': {
			paddingBottom: '20px',
		},

		'& .TabsListUnstyled-root button': {
			margin: '0 25px',
		}
	}));

	const LocationContentUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
		margin: '38px 0px 25px 0px',
	}));


	const LocationAddressUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
		width: '351px',

		marginBottom: '25px'
	}));

	const LocationButtonUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		textDecorationLine: 'underline',
		color: '#989292',

		cursor: 'pointer'
	}));

	const TypographyUI = styled(Typography)(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '36px',
		lineHeight: '42px',
		color: '#000000',

		marginBottom: '40px'
	}));

	const ButtonAdd = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '22px',
		color: 'rgb(0, 0, 0)',
		background: '#fff',

		width: '220px',
		height: '28px',
	};

	return {
		TypographyUI,
		LocationButtonUI,
		BorderWrapperUI,
		LocationWrapperUI,
		LocationAddressUI,
		LocationContentUI,
		LocationContainerUI,
		ButtonAdd
	};
};
