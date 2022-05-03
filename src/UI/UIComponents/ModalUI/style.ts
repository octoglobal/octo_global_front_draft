import { Backdrop, Dialog, styled } from '@mui/material';
import ButtonUI from '../ButtonUI/ButtonUI';

export const useModalUIStyles = () => {

	const DialogMUI = styled(Dialog)(({theme}) => ({
		'& .MuiDialog-container': {
			position: 'relative',
			'& .MuiPaper-root': {
				backgroundColor: '#F1F4F9',
				boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
				padding: '115px 10px',
				borderRadius: 0,
				minWidth: '704px',
				minHeight: '353px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				[theme.breakpoints.down(1025)]: {
					minWidth: '319px',
					minHeight: '140px',
					padding: '20px 30px',
				}
			}
		},
	}));

	const DialogTitleMUI = styled('h5')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 400,
		whiteSpace: 'pre-line',
		textAlign: 'center',
		color: '#000000',
		[theme.breakpoints.down(1025)]: {
			fontSize: '16px',
			lineHeight: '18px',
		}
	}));

	const DialogBodyMUI = styled('div')(() => ({
		width: '100%',
	}));

	const ButtonContainerMUI = styled('div')(({theme}) => ({
		maxWidth: '135px',
		margin: '68px auto 0',
		[theme.breakpoints.down(1025)]: {
			marginTop: '27px',
		}
	}));

	const ButtonMUI = styled(ButtonUI)(() => ({
		opacity: 0.8,
		fontWeight: 400,
		minWidth: '135px',
		maxWidth: '135px',
		height: '32px',
		marginBottom: 0,
	}));

	const BackDropBlurMUI = styled(Backdrop, {
		name: 'MuiModal',
		slot: 'Backdrop',
		overridesResolver: (props, styles) => {
			return styles.backdrop;
		},
	})({
		background: 'rgba(255, 255, 255, 0.5)',
		backdropFilter: 'blur(1px)',
		filter: 'blur(10px)',

		position: 'fixed',
		display: 'flex',
		// -moz-box-align: center,
		alignItems: 'center',
		// -moz-box-pack: 'center',
		justifyContent: 'center',
		inset: '0px',
		zIndex: '-1',
	});

	return {
		DialogMUI,
		ButtonMUI,
		DialogBodyMUI,
		DialogTitleMUI,
		BackDropBlurMUI,
		ButtonContainerMUI
	};
};
