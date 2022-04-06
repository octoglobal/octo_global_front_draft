import { styled } from '@mui/material';

export const useHomeConfidenceImgStyles = () => {

	const ImageContainerMUI = styled('div')(({theme}) => ({
		maxWidth: '415px',
		height: '100%',
		marginRight: '40px',
		minWidth: '415px',
		display: 'flex',
		justifyContent: 'flex-start',
		[theme.breakpoints.down(1113)]: {
			marginRight: '0px',
		},
		[theme.breakpoints.down(1025)]: {
			minWidth: 'auto',
		},
		[theme.breakpoints.down(769)]: {
			width: '113px',
			height: '105px',
		},
	}));

	const ImageMUI = styled('img')(({theme}) => ({
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		[theme.breakpoints.down(1113)]: {
			height: 'auto',
		}
	}));

	return {
		ImageMUI,
		ImageContainerMUI
	};
};
