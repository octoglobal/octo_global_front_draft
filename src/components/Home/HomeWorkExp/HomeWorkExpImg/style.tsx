import { styled } from '@mui/material';

export const useHomeWorkExpImgStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginRight: '23px',
	}));

	const ImageContainerMUI = styled('div')(() => ({
		maxWidth: '671px',
		maxHeight: '569px',
		paddingLeft: '16px',
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
