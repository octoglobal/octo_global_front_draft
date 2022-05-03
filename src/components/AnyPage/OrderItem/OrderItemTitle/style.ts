import { styled } from '@mui/material';

export const useOrderTitleStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '25px',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '15px',
		}
	}));

	const CheckboxContainerMUI = styled('div')(() => ({
		width: '21px',
		height: '21px',
	}));

	const LeftContentMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const TitleMUI = styled('h4')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		marginLeft: '26px',
		[theme.breakpoints.down(1025)]: {
			marginLeft: '10px',
			fontSize: '16px',
			lineHeight: '18px',
		}
	}));

	return {
		TitleMUI,
		ContainerMUI,
		LeftContentMUI,
		CheckboxContainerMUI,
	};
};
