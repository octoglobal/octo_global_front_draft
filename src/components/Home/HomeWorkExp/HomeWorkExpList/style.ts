import { styled } from '@mui/material';

export const useHomeWorkExpListStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		'& > *:last-child': {
			marginBottom: 0,
		},
		[theme.breakpoints.down(769)]: {
			display: 'flex',
			flexWrap: 'wrap',
			'& > *:nth-of-type(2n)': {
				marginRight: '0px',
			},
		}
	}));

	return {
		ListMUI
	};
};
