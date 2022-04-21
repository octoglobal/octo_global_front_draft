import { styled } from '@mui/material';

export const useHomeShopStyles = () => {

	const WrapperMUI = styled('div')(() => ({
		marginBottom: '90px',
	}));

	const TitleMUI = styled('div')(({theme}) => ({
		'& > h1': {
			maxWidth: 'none',
			marginBottom: '50px',
		},
		[theme.breakpoints.down(1025)]: {
			'& > h1': {
				marginBottom: '20px'
			}
		}
	}));

	const containerStyle = {
		padding: '0 10px',
		maxWidth: '1300px',
		width: '100%'
	};

	const containerAdaptiveStyle = {
		padding: '0 0 0 3px !important',
	};

	return {
		TitleMUI,
		WrapperMUI,
		containerStyle,
		containerAdaptiveStyle,
	};
};
