import { styled } from '@mui/material';

export const useHomeAddressImgStyles = () => {

	const ImageContainerMUI = styled('div')(({theme}) => ({
		width: '554px',
		height: '295px',
		marginRight: '37px',
		backgroundColor: '#C4C4C4',
	}));

	const ImageMUI = styled('img')(({theme}) => ({
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	}));

	return {
		ImageMUI,
		ImageContainerMUI
	};
};
