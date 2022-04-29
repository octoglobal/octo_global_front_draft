import { styled } from '@mui/material';


export const useLawInfoStyle = () => {
	const ContainerMUI = styled('div')(() => ({
		maxWidth: '1200px',
		marginTop: '15px'
	}));
	const H1MUI = styled('h1')(() => ({
		fontSize: '24px',	
		color: '#274D82',
	}));
	return {	
		ContainerMUI,
		H1MUI
	};
};
