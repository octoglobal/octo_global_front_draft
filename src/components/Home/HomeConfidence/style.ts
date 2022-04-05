import { styled } from '@mui/material';

export const useHomeConfidenceStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'flex-start',
		marginBottom: '100px'
	}));

	return {
		WrapperMUI
	};
};
