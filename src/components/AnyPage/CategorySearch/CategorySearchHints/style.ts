import { styled } from '@mui/material';

export const useCategorySearchHinstStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		borderRadius: '5px 5px 0px 0px',
		backgroundColor: '#FFFFFF',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		zIndex: 100,
		width: '100%',
		left: 0,
		top: 0,
	}));

	const ContainerMUI = styled('div')(({theme}) => ({
		position: 'relative',
	}));

	return {
		ListMUI,
		ContainerMUI
	};
};
