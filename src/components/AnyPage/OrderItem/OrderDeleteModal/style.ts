import {Backdrop, Dialog, styled} from '@mui/material';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';

export const useOrderDeleteModalStyles = () => {
	const tablet = 769;

	const DialogMUI = styled(Dialog)(({theme}) => ({
		'& .MuiDialog-container': {
			position: 'relative',
			'& .MuiPaper-root': {
				backgroundColor: '#F1F4F9',
				boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
				borderRadius: '15px',
				maxWidth: '573px',
				maxHeight: '232px',
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}
		},
		[theme.breakpoints.down(tablet)]: {
			'& .MuiDialog-container': {
				'& .MuiPaper-root': {
					maxHeight: '140px',
					minWidth: '290px',
					padding: '20px 5px',
				}
			},
		}
	}));

	const DialogTitleMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		textAlign: 'center',
		[theme.breakpoints.down(tablet)]: {
			fontSize: '16px',
			lineHeight: '18px',
		},
		[theme.breakpoints.down(350)]: {
			fontSize: '14px',
			lineHeight: '16px',
		}
	}));

	const DialogButtonContainerMUI = styled('div')(({theme}) => ({
		marginTop: '39px',
		display: 'flex',
		justifyContent: 'space-between',
		width: '210px',
		[theme.breakpoints.down(tablet)]: {
			marginTop: '27px',
		}
	}));

	const DialogButtonYesMUI = styled(ButtonUI)(({theme}) => ({
		marginBottom: 0,
		maxWidth: '65px',
		fontSize: '14px',
		lineHeight: '16px',
		height: '32px',
		fontWeight: 400,
		[theme.breakpoints.down(tablet)]: {
			maxWidth: '93px',
		}
	}));

	const DialogButtonNoMUI = styled(ButtonUI)(() => ({
		marginBottom: 0,
		maxWidth: '65px',
		backgroundColor: 'transparent',
		color: '#274D82',
		fontSize: '14px',
		height: '32px',
		lineHeight: '16px',
		fontWeight: 400,
		textDecoration: 'underline',
		'&:hover': {
			backgroundColor: 'transparent',
			textDecoration: 'underline',
		}
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
		DialogTitleMUI,
		BackDropBlurMUI,
		DialogButtonNoMUI,
		DialogButtonYesMUI,
		DialogButtonContainerMUI
	};
};
