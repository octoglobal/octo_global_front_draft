import {Button, styled} from '@mui/material';

export const useBtnSectionStyles = () => {


	const ButtonIconMUI = styled(Button)(({theme}) => ({
		display: 'block',
		width: '24px',
		height: '33px',
		padding: '0',
		border: 0,
		backgroundColor: 'transparent',
		minWidth: 'auto',
		margin: '0 auto 6px',
		textAlign: 'center',
		[theme.breakpoints.down(769)]: {
			width: '14px',
			height: '22px',
		}
	}));


	const BtnSectionMUI = styled('div')(({theme}) => ({
		[theme.breakpoints.down(1025)]: {
			position: 'absolute',
			right: 0,
			top:0,
			display: 'flex',
			width: '50px',
		}
	}));
	

	return {
		ButtonIconMUI,
		BtnSectionMUI,		
	};
};
