import {styled} from '@mui/material';

export const usCategorySwiperActiveStyle = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: '16px',
		paddingLeft: '3px',
	}));

	return {
		ListMUI,
	};
};
