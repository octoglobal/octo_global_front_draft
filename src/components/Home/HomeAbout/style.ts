import { styled } from '@mui/material';

export const useHomeAboutStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '59px',
		height: 'calc(100vh - 61px)'
	}));

	return {
		WrapperMUI
	};
};
