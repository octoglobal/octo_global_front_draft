import { styled } from '@mui/material';

export const useHomeConfidenceListStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		listStyle: 'none',
		paddingLeft: '25px',
		marginRight: '92px',
		marginTop: '45px',
		'& >*:last-child': {
			marginBottom: 0,
		},
		[theme.breakpoints.down(1321)]: {
			marginTop: '10px',
			marginRight: '45px',
		},
		[theme.breakpoints.down(1025)]: {
			maxWidth: '600px',
			marginRight: '0px',
		},
		[theme.breakpoints.down(769)]: {
			marginTop: '30px',
			maxWidth: 'none',
		},
		[theme.breakpoints.down(351)]: {
			marginTop: '10px',
		}
	}));

	return {
		ListMUI
	};
};
