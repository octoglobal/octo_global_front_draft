import { styled } from '@mui/material';

export const useAccountOrdersTabStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		[theme.breakpoints.down(1025)]: {
			display: 'none',
		}
	}));

	return {
		ListMUI
	};
};
