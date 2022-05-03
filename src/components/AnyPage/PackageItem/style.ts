import { styled } from '@mui/material';

export const usePackageItemStyles = () => {

	const ContainerMUI = styled('div')(() => ({

	}));

	const TextMUI = styled('h2')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
	}));

	const TitleMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '25px',
	}));

	const TitleTextMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const StatusTextMUI = styled('p')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#274D82',
		marginLeft: '16px',
	}));

	// const DropDownMUI = styled('div')(({theme}) => ({
	// }));

	return {
		TextMUI,
		TitleMUI,
		ContainerMUI,
		TitleTextMUI,
		StatusTextMUI,
	};
};
