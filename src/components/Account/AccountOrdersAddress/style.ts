import { styled } from '@mui/material';
import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';

export const useAccountOrdersAddressStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		// display: 'flex',
		// flexDirection: 'column',
		// alignItems: 'center',
	}));

	const AddressMUI = styled('div')(() => ({
	}));

	const FormMUI = styled('form')(() => ({
	}));

	const TitleMUI = styled('h3')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: '#274D82',
		marginBottom: '25px',
	}));

	const ButtonMUI = styled(ButtonUI)(() => ({
		marginTop: '5px',
		maxWidth: '112px',
		height: '32px',
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 400,
		color: '#FFFFFF',
		backgroundColor: 'rgba(39,77,130,0.8)'
	}));

	return {
		FormMUI,
		TitleMUI,
		ButtonMUI,
		AddressMUI,
		ContainerMUI
	};
};
