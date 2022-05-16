import {styled} from '@mui/material';

export const useLocationListStyle = () => {

	const ListMUI = styled('div')(({theme}) => ({
		width: '100%',
		maxHeight: 400,
		overflowY: 'auto',
		boxSizing: 'border-box',
		scrollbarWidth: 'thin',
		scrollbarColor: '#274D82 #ccc',
		

		'&::-webkit-scrollbar': {
			height: '4px',
			width: '4px',
		  },

		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#274D82',
			borderRadius: '5px',			
		  },
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
