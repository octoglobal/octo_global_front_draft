import {Button, Dialog, styled} from '@mui/material';

export const useDropDownStyles = () => {

	const IconButtonMUI = styled(Button)(() => ({
		border: 0,
		padding: '3px 5px',
		minWidth: 'auto',
	}));

	const OverlayModalMUI = styled(Dialog)(() => ({
		opacity: 0,
		zIndex: 1,
	}));

	const ButtonContainerMUI = styled('div')(({theme}) => ({
		position: 'absolute',
		right: 0,
		top: '40px',
		zIndex: 2,
		padding: '5px 0',
		width: '176px',
		backgroundColor: '#FFFFFF',
		borderRadius: '8px',
		boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.15)',
		[theme.breakpoints.down(769)]: {
			width: '135px',
		}
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
