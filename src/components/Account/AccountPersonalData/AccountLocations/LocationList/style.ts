import {styled} from '@mui/material';

export const useLocationListStyle = () => {

	const ListMUI = styled('div')(({theme}) => ({
		width: '100%',

		'& > *:last-child': {
			borderBottom: 0,
			paddingBottom: 0,
		},

		[theme.breakpoints.down(650)]: {
			width: '100%',
		}
	}));

	return {
		ListMUI
	};
};
