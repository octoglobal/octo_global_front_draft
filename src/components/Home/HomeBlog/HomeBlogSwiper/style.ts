import {Button, CircularProgress, styled} from '@mui/material';

export const useHomeBlogSwiperStyles = () => {

	const ButtonArrowMUI = styled(Button)(() => ({
		minWidth: 'auto',
		marginBottom: '80px',
	}));

	const LoadingContainerSC = styled('div')(() => ({
		position: 'absolute',
		width: '100%',
		left: 0,
		top: 0,
		height: '100%',
		color: '#203f69',
		backgroundColor: 'rgba(32,63,105,0.2)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 9999,
	}));

	const SpinnerSC = styled(CircularProgress)(() => ({

	}));

	return {
		SpinnerSC,
		ButtonArrowMUI,
		LoadingContainerSC,
	};
};
