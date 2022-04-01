import {styled} from '@mui/material';

export const useIndexLayoutStyle = () => {

	const IndexLayoutUI = styled('div')(({theme}) => ({
		minHeight: '942px',

		padding: '0 80px',

		[theme.breakpoints.down(500)]: {
			padding: '0 15px',
			minHeight: '331px',
		}
	}));

	const IndexShortLayoutUI = styled('div')(({theme}) => ({
		background: '#DFE4EC',
		minHeight: '466px',

		padding: '70px 80px 120px',

		[theme.breakpoints.down(500)]: {
			padding: '40px 15px',
			minHeight: '0',
		}
	}));

	return {
		IndexLayoutUI,
		IndexShortLayoutUI
	};
};
