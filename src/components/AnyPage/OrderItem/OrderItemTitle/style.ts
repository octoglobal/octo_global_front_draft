import { styled } from '@mui/material';

export const useOrderTitleStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '25px',
	}));

	const LeftContentMUI = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const TitleMUI = styled('h4')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		marginLeft: '26px',
	}));

	return {
		TitleMUI,
		ContainerMUI,
		LeftContentMUI,
	};
};
