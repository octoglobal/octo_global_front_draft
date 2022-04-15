import { styled } from '@mui/material';

export const useShopTagsStyles = () => {

	const ListMUI = styled('ul')(() => ({
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	}));

	return {
		ListMUI
	};
};
