import { styled } from '@mui/material';

export const useOrderItemStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		width: '100%',
		marginBottom: '30px',
	}));

	return {
		ContainerMUI
	};
};
