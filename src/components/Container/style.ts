import {styled} from '@mui/material';

export const useContainerStyles = () => {

	const ContainerMUI = styled('section')(({theme}) => ({
		maxWidth: '1440px',
		padding: '0 80px',
		margin: '0 auto',
		[theme.breakpoints.down(1025)]: {
			padding: '0 15px',
		}
	}));

	return {
		ContainerMUI
	};
};
