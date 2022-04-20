import { styled } from '@mui/material';

export const useBlogTitleStyles = () => {

	const TitleContainerMUI = styled('div')(() => ({
		marginTop: '18px',
	}));

	return {
		TitleContainerMUI
	};
};
