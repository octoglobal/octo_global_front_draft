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
			margin: '0 27.5px',
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

	const SearchContainerMUI = styled('div')(() => ({
		maxWidth: '686px',
		margin: '0 auto',
		height: '100%',
	}));

	return {
		AccountWrapperUI,
		SearchContainerMUI
	};
};
