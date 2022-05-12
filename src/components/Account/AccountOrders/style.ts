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

	const PageLabelMUI = styled('h2')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '22px',
		fontWeight: 400,
		color: '#274D82',
		marginBottom: '15px',
		[theme.breakpoints.up(1025)]: {
			display: 'none',
		},
		[theme.breakpoints.down(769)]: {
			fontSize: '14px',
			lineHeight: '16px',
		}
	}));


	const ListMUI = styled('div')(({theme}) => ({
		marginLeft: '206px',
		minHeight: '400px',
		[theme.breakpoints.down(1200)]: {
			marginLeft: '106px',
		},
		[theme.breakpoints.down(1025)]: {
			marginLeft: '0px',
		}
	}));

	const PlaceholderWrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		margin: '11px 40px 51px 0',
		justifyContent: 'center',
		[theme.breakpoints.down(1100)]: {
			marginRight: '0',
		},
		[theme.breakpoints.down(710)]: {
			marginTop: '14px',
		}
	}));

	const PlaceholderTextMUI = styled('p')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: 'rgba(0, 0, 0, 0.5)',
		[theme.breakpoints.down(710)]: {
			fontSize: '16px',
			lineHeight: '19px'
		},
		[theme.breakpoints.down(350)]: {
			fontSize: '14px',
		}
	}));

	const PlaceholderLinkMUI = styled(Link)(({theme}) => ({
		color: '#274D82',
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		textDecoration: 'none',
		[theme.breakpoints.down(710)]: {
			fontSize: '16px',
			lineHeight: '19px'
		},
		[theme.breakpoints.down(350)]: {
			fontSize: '14px',
		}
	}));

	return {
		ListMUI,
		PageLabelMUI,
		ContainerMUI,
		WrapperOrdersMUI,
		PlaceholderTextMUI,
		PlaceholderLinkMUI,
		PlaceholderWrapperMUI
	};
};
