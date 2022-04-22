import {styled} from '@mui/material';

export const useAccountPageStyle = () => {
	const AccountWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',

		margin: '120px 0px 0px',

		'& .TabsUnstyled-root': {
			width: '100%',
		},

		'& .TabsListUnstyled-root button': {
			margin: '0 50px',
			flexWrap: 'wrap',
		},

		[theme.breakpoints.down(750)]: {
			marginTop: '80px',

			'& .TabsUnstyled-root': {
				width: '100%',
			},

			'& .TabsListUnstyled-root': {
				justifyContent: 'space-evenly',
				minWidth: '0',
			},

			'& .TabsListUnstyled-root button': {
				margin: '0 10px 0 0',
			},
		}
	}));

	return {
		AccountWrapperUI
	};
};
