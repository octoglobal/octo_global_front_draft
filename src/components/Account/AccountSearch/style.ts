import { styled } from '@mui/material';

export const useAccountSearchStyles = () => {

	const SearchContainerMUI = styled('div')(() => ({
		maxWidth: '976px',
		margin: '0 auto 42px',
	}));

	return {
		SearchContainerMUI
	};
};
