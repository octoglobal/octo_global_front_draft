import {styled} from '@mui/material';

export const useContainerStyles = () => {

	const ContainerMUI = styled('section')(() => ({
		maxWidth: '1440px',
		padding: '0 80px',
		margin: '0 auto',
	}));

	return {
		ContainerMUI
	};
};
