import {styled} from '@mui/material';

export const usCategorySwiperActiveStyle = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: '11px',
		paddingLeft: '3px',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '7px',
		}
	}));

	const EmptyListMUI = styled('ul')(() => ({
		height: '16px',
		width: '100%',
		marginBottom: '5px',
	}));

	return {
		ListMUI,
		EmptyListMUI
	};
};
