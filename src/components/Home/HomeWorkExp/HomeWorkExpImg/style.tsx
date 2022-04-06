import { styled } from '@mui/material';

export const useHomeWorkExpImgStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginRight: '23px',
		[theme.breakpoints.down(769)]: {
			marginRight: '0',
		},
		[theme.breakpoints.down(501)]: {
			display: 'none',
		}
	}));

	const ImageContainerMUI = styled('div')(() => ({
		maxWidth: '671px',
		maxHeight: '569px',
		paddingLeft: '16px',
		[theme.breakpoints.down(769)]: {
			margin: '0 auto',
		},
	}));

	const ImageMUI = styled('img')(() => ({
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}));

	return {
		ImageMUI,
		ContainerMUI,
		ImageContainerMUI
	};
};
