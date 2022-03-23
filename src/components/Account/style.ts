import {styled} from '@mui/material';

export const useAccountPageStyle = () => {
	const AccountWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',

		'& .TabsListUnstyled-root button': {
			margin: '0 50px',
		}
	}));

	return {
		AccountWrapperUI
	};
};
