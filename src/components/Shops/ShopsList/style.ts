import { styled } from '@mui/material';

export const useShopListStyles = () => {

	const ListMUI = styled('ul')(() => ({
		maxWidth: '1073px',
		width: '100%',
		margin: '96px auto 26px',
		display: 'flex',
		flexWrap: 'wrap',
		'& > *:nth-of-type(3n)': {
			borderRight: 0,
		}
	}));

	return {
		ListMUI
	};
};
