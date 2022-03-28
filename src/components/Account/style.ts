import {styled} from '@mui/material';

export const useAccountPageStyle = () => {
	const AccountWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',

		marginTop: '60px',

		'& .TabsUnstyled-root': {
			width: '80%',
		},

		'& .TabsListUnstyled-root button': {
			margin: '0 50px',
		},

		[theme.breakpoints.down(500)]: {
			marginTop: '0',

			'& .TabsUnstyled-root': {
				width: '100%',
			},

			'& .TabsListUnstyled-root button': {
				margin: '0 30px',
			},
		}
	}));

	return {
		AccountWrapperUI
	};
};
