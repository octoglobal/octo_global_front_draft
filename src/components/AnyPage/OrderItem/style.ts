import { styled } from '@mui/material';

export const useOrderItemStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		width: '100%',
		marginBottom: '30px',
		[theme.breakpoints.down(769)]: {
			marginBottom: '15px',
			borderBottom: '1px solid #C4C4C4',
			paddingBottom: '15px',
		}
	}));

	return {
		ContainerMUI
	};
};
