import { styled } from '@mui/material';

export const usePackageItemStyles = () => {

	const ContainerMUI = styled('div')(() => ({

	}));

	const TextMUI = styled('h2')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		marginBottom: '25px',
	}));

	const TitleMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'space-between',
	}));

	// const DropDownMUI = styled('div')(({theme}) => ({
	// }));

	return {
		TextMUI,
		TitleMUI,
		ContainerMUI
	};
};
