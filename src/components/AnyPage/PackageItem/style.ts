import { styled } from '@mui/material';

export const usePackageItemStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		[theme.breakpoints.down(769)]: {
			paddingBottom: '5px',
			borderBottom: '1px solid #C4C4C4',
			marginBottom: '15px',
		}
	}));

	const TextMUI = styled('h2')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 400,
		color: '#000000',
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '18px',
		}
	}));

	const TitleMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '25px',
		[theme.breakpoints.down(769)]: {
			marginBottom: '15px',
		}
	}));

	const TitleTextMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
	}));

	const StatusTextMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#274D82',
		marginLeft: '16px',
		[theme.breakpoints.down(769)]: {
			fontSize: '12px',
			lineHeight: '14px',
			marginLeft: '10px',
		}
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
