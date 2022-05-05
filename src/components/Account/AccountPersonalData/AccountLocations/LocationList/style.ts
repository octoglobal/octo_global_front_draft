import {styled} from '@mui/material';

export const useLocationListStyle = () => {

	const ListMUI = styled('div')(() => ({
		'& > *:last-child': {
			borderBottom: 0
		}
	}));

	return {
		ListMUI
	};
};
