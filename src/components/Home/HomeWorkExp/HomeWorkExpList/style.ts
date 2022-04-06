import { styled } from '@mui/material';

export const useHomeWorkExpListStyles = () => {

	const ListMUI = styled('ul')(() => ({
		'& > *:last-child': {
			marginBottom: 0,
		}
	}));

	return {
		ListMUI
	};
};
