import { styled } from '@mui/material';

export const useHomeConfidenceListStyles = () => {

	const ListMUI = styled('ul')(({theme}) => ({
		listStyle: 'none',
		paddingLeft: '25px',
		margin: '60px 0 0 265px',
		minHeight: '374px',
		'& >*:last-child': {
			marginBottom: 0,
		},
		[theme.breakpoints.down(1321)]: {
			// marginTop: '10px',
		},
		[theme.breakpoints.down(1025)]: {
			maxWidth: '600px',
			margin: '30px 0 0 80px',
			// marginRight: '0px',
		},
		[theme.breakpoints.down(769)]: {
			marginTop: '30px',
			marginLeft: '0',
			maxWidth: 'none',
			minHeight: '260px',
		},
		[theme.breakpoints.down(351)]: {
			marginTop: '10px',
		}
	}));

	return {
		ListMUI
	};
};
