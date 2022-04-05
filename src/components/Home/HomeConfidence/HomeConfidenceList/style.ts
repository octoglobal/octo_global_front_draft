import { styled } from '@mui/material';

export const useHomeConfidenceListStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		listStyle: 'none',
		paddingLeft: '25px',
		marginRight: '92px'
	}));

	return {
		ListMUI
	};
};
