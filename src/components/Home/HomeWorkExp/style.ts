import { styled } from '@mui/material';

export const useHomeWorkExpStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		margin: '61px 0 134px',
	}));

	return {
		WrapperMUI
	};
};
