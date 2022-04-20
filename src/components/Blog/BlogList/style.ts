import { styled } from '@mui/material';

export const useBlogListStyles = () => {

	const ListMUI = styled('ul')(() => ({
		maxWidth: '1180px',
		margin: '0 auto',
	}));

	return {
		ListMUI
	};
};
