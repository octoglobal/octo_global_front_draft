import {Button, CircularProgress, styled} from '@mui/material';
import BottomArrow from '@/UIIcon/BottomArrow.svg';

export const usePaymentHistoryListStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '0px 15px',
	}));

	const ListMUI = styled(ContainerMUI, {
		shouldForwardProp: (prop) => !!prop
	})<{hiddenList?: boolean}>(({theme, hiddenList}) => ({
		marginTop: '25px',
		width: '100%',
		padding: 0,
		maxHeight: '45vh',
		'& > *:last-child': {
		},
		[theme.breakpoints.down(969)]: {
			maxHeight: 'none',
			'& > *:nth-child(3)': {
				marginBottom: hiddenList ? '0px' : '15px',
			},
			'& > *:nth-child(1n + 4)': {
				display: hiddenList ? 'none' : 'visible',
			},
		}
	}));

	const CircularProgressMUI = styled(CircularProgress)(() => ({
		color: '#274D82',
		marginBottom: '18px',
		marginTop: '25px',
	}));

	const MoreItemButtonMUI = styled(Button)(() => ({
		textTransform: 'none',
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '16px',
		color: '#C4C4C4',
		padding: '2px',
		marginTop: '25px',
	}));

	const BottomArrowMUI = styled(BottomArrow)(() => ({
		marginLeft: '10px',
	}));

	return {
		ListMUI,
		ContainerMUI,
		BottomArrowMUI,
		MoreItemButtonMUI,
		CircularProgressMUI,
	};
};
