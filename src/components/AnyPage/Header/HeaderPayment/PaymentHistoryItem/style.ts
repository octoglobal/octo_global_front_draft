import {Collapse, styled} from '@mui/material';

export const usePaymentHistoryItemStyles = () => {

	const CollapseContainerMUI = styled(Collapse)(({theme}) => ({

	}));

	const ContainerMUI = styled('div')(() => ({
		width: '100%',
		marginBottom: '15px',
	}));

	const WrapperMUI = styled('a')(() => ({
		display: 'flex',
		justifyContent: 'space-between',
		cursor: 'pointer',
	}));

	const MoneyTextMUI = styled('div', {
		shouldForwardProp: (propName) => propName !== ''
	})<{color?: string}>(({color}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: color,
		marginRight: '25px',
		minWidth: '70px',
	}));

	const CommentTextMUI = styled('p')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		maxWidth: '263px',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		color: '#000000',
		flexGrow: 1,
		transition: '.2s all linear'
	}));

	const DateTextMUI = styled('div')(() => ({
		color: '#C4C4C4',
		fontSize: '20px',
		lineHeight: '24px',
		minWidth: '77px',
		textAlign: 'right',
		fontWeight: 300,
	}));

	const TimeMUI = styled('time')(() => ({

	}));
	return {
		TimeMUI,
		WrapperMUI,
		DateTextMUI,
		ContainerMUI,
		MoneyTextMUI,
		CommentTextMUI,
		CollapseContainerMUI
	};
};