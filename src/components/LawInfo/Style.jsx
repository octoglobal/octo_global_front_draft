import { styled } from '@mui/material';


export const useLawInfoStyle = () => {
	const ContainerMUI = styled('div')(() => ({
		maxWidth: '650px',
		margin: '15px auto 0'
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
