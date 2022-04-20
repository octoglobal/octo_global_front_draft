import { styled } from '@mui/material';

export const useBlogPreviewFieldsStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		minWidth: '336px',
		marginRight: '10px',
		[theme.breakpoints.down(1200)]: {
			minWidth: '200px',
			width: '100%',
			marginBottom: '20px',
		}
	}));

	return {
		ContainerMUI
	};
};
