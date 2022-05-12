import {styled} from '@mui/material';

export const useAccountUserLocationStyle = () => {

	const ContentMUI = styled('div')(() => ({
		width: '100%',
		height: 'max-content',

		display: 'flex',
		justifyContent: 'center',
	}));

	return {
		ContentMUI
	};
};
