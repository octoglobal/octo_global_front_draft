import { styled } from '@mui/material';

export const useHomeShopsListStyles = () => {

	const ListMUI = styled('ul')(() => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
	}));

	return {
		ListMUI
	};
};
