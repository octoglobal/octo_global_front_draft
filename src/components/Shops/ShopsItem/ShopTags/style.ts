import { styled } from '@mui/material';

export const useShopTagsStyles = () => {

	const ListMUI = styled('ul')(() => ({
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		// display: 'grid',
		// gridTemplateColumns: 'repeat(3, 1fr)'
	}));

	return {
		ListMUI
	};
};
