import {Link, styled} from '@mui/material';

export const useAccountOrdersStyles = () => {

	const ContainerMUI = styled('section')(({theme}) => ({
		marginTop: '53px',
		display: 'flex',
		justifyContent: 'flex-start',
		[theme.breakpoints.down(1025)]: {
			marginTop: '15px',
		}
	}));

	const WrapperOrdersMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		minHeight: '500px',
		flexDirection: 'column',
	}));

	const ListMUI = styled('div')(({theme}) => ({
		marginLeft: '206px',
		[theme.breakpoints.down(1025)]: {
			marginLeft: '0px',
		}
	}));

	const PlaceholderWrapperMUI = styled('div')(() => ({
		margin: '11px 0 51px 138px'
	}));

	const PlaceholderTextMUI = styled('p')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: 'rgba(0, 0, 0, 0.5)',
	}));

	const PlaceholderLinkMUI = styled(Link)(() => ({
		color: '#274D82',
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		textDecoration: 'none',
	}));

	return {
		ListMUI,
		ContainerMUI,
		WrapperOrdersMUI,
		PlaceholderTextMUI,
		PlaceholderLinkMUI,
		PlaceholderWrapperMUI
	};
};
