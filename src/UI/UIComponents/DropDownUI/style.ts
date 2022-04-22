import {Button, Dialog, styled} from '@mui/material';

export const useDropDownStyles = () => {

	const IconButtonMUI = styled(Button)(() => ({
		border: 0,
		padding: '3px 5px',
		minWidth: 'auto',
	}));

	const OverlayModalMUI = styled(Dialog)(() => ({
		opacity: 0,
		zIndex: 5,
	}));

	const ButtonContainerMUI = styled('div')(() => ({
		position: 'absolute',
		right: 0,
		top: '40px',
		zIndex: 10,
		padding: '5px 0',
		width: '176px',
		backgroundColor: '#FFFFFF',
		borderRadius: '8px',
		boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.15)'
	}));

	const ContainerMUI = styled('div')(() => ({
		position: 'relative',
	}));


	return {
		ContainerMUI,
		IconButtonMUI,
		OverlayModalMUI,
		ButtonContainerMUI
	};
};
