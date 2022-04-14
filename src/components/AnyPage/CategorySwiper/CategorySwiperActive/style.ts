import {styled} from '@mui/material';

export const usCategorySwiperActiveStyle = () => {

	const ListMUI = styled('ul')(() => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: '16px',
		paddingLeft: '3px',
	}));

	const EmptyListMUI = styled('ul')(() => ({
		height: '19px',
		width: '100%',
	}));

	return {
		ListMUI,
		EmptyListMUI
	};
};
