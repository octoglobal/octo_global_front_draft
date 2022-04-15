import { styled } from '@mui/material';

export const useShopListStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		maxWidth: '1073px',
		width: '100%',
		margin: '25px auto 26px',
		display: 'flex',
		flexWrap: 'wrap',
		'& > *:nth-of-type(3n)': {
			borderRight: 0,
		},
		[theme.breakpoints.down(1167)]: {
			'& > *:nth-of-type(1n)': {
				borderRight: '1px solid #C4C4C4',
			},
			'& > *:nth-of-type(2n)': {
				borderRight: 0,
			},
		},
		[theme.breakpoints.down(768)]: {
			marginTop: '4px',
			'& > *:nth-of-type(1n)': {
				borderRight: 0,
			}
		}
	}));

	return {
		ListMUI
	};
};
