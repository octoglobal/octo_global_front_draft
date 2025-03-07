import {Collapse, styled} from '@mui/material';
import ButtonUI from '../../../../../UI/UIComponents/ButtonUI/ButtonUI';

export const usePaymentHistoryItemStyles = () => {

	const CollapseContainerMUI = styled(Collapse)(({theme}) => ({
		[theme.breakpoints.down(501)]: {
		}
	}));

	const ContainerMUI = styled('div')(() => ({
		width: '100%',
		marginBottom: '15px',
	}));

	const WrapperMUI = styled('a')(() => ({
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between',
		cursor: 'pointer',
	}));

	const MoneyTextMUI = styled('div', {
		shouldForwardProp: (propName) => propName !== ''
	})<{color?: string}>(({color, theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: color,
		marginRight: '25px',
		minWidth: '70px',
		[theme.breakpoints.down(969)]: {
			fontSize: '14px',
			lineHeight: '16px',
			fontWeight: 400,
			marginRight: '5px',
		}
	}));

	const CommentTextMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		maxWidth: '263px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		color: '#000000',
		flexGrow: 1,
		transition: '.2s all linear',
		[theme.breakpoints.down(969)]: {
			fontSize: '14px',
			lineHeight: '16px',
			maxWidth: '189px',
		},
		[theme.breakpoints.down(350)]: {
			maxWidth: '169px',
		}
	}));

	const DateTextMUI = styled('div')(({theme}) => ({
		color: '#C4C4C4',
		fontSize: '20px',
		lineHeight: '24px',
		minWidth: '77px',
		textAlign: 'right',
		fontWeight: 300,
		[theme.breakpoints.down(969)]: {
			fontSize: '14px',
			lineHeight: '16px',
			minWidth: '50px',
		}
	}));

	const TimeMUI = styled('time')(() => ({

	}));

	const DeleteTransactionButtonSC = styled(ButtonUI)(({theme}) => ({
		marginTop: '5px',
		marginBottom: '0',
		minWidth: '171px',
		fontWeight: 400,
		height: '32px',
		padding: '8px',
		[theme.breakpoints.down(501)]: {
			display: 'none'
		}
	}
	));

	const DeleteTransactionButtonTabletSC = styled(ButtonUI)<{isVisible: boolean}>(({theme, isVisible}) => ({
		display: 'none',
		[theme.breakpoints.down(501)]: {
			display: isVisible ? 'block' : 'none',
			marginTop: '10px',
			backgroundColor: 'transparent',
			color: '#234A82',
			textDecoration: 'underline',
			padding: 0,
			height: '19px',
			width: '165px',
			'&:hover': {
				backgroundColor: 'inherit',
				textDecoration: 'underline',
			}
		}
	}));

	return {
		TimeMUI,
		WrapperMUI,
		DateTextMUI,
		ContainerMUI,
		MoneyTextMUI,
		CommentTextMUI,
		CollapseContainerMUI,
		DeleteTransactionButtonSC,
		DeleteTransactionButtonTabletSC,
	};
};
