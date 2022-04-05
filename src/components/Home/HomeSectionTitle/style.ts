import { styled } from '@mui/material';

export const useHomeSectionTitleStyles = () => {

	const TitleMUI = styled('h1')(({theme}) => ({
		fontSize: '48px',
		fontWeight: 600,
		lineHeight: '56px',
		margin: '0 0 30px 0',
		maxWidth: '730px'
	}));

	return {
		TitleMUI
	};
};
