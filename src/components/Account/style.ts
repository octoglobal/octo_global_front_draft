import {styled} from '@mui/material';

export const useAccountPageStyle = () => {
	const AccountWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',

		marginTop: '60px',

		'& .TabsUnstyled-root': {
			width: '80%',
		},

		'& .TabsListUnstyled-root button': {
			margin: '0 50px',
		}
	}));

	return {
		AccountWrapperUI
	};
};
