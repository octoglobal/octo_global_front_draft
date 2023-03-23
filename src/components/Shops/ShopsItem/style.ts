import {Link, styled} from '@mui/material';

export const useShopsItemStyles = () => {

	const LinkMUI = styled(Link)(({theme}) => ({
		width: '100%',
		height: '100%',

		display: 'block',
		position: 'relative',

		textDecoration: 'none',
		[theme.breakpoints.down(1250)]: {
			minHeight: '270px',
		},
		[theme.breakpoints.down(501)]: {
			minHeight: 'auto',
		},
	}));

	const ItemMUI = styled('div')(({theme}) => ({
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRight: '1px solid #C4C4C4',
		borderBottom: '1px solid #C4C4C4',
		padding: '25px 16px 0 16px',
		width: '33.3333%',
		minWidth: '330px',
		[theme.breakpoints.down(1250)]: {
			padding: '25px 6px 0 6px',
		},
		[theme.breakpoints.down(1167)]: {
			width: '50%',
			padding: '25px 16px 0 16px',
		},
		[theme.breakpoints.down(768)]: {
			width: '100%',
		},
		[theme.breakpoints.down(501)]: {
			padding: '20px 5px 0',
			minWidth: 'auto',
		}
	}));

	const PhotoContainerMUI = styled('div')(({theme}) => ({
		position: 'relative',

		width: '100%',
		height: '208px',
		maxWidth: '336px',
		minWidth: '280px',

		margin: '0 auto 20px',

		boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
		overflow: 'hidden',

		[theme.breakpoints.down(501)]: {
			height: '189px',
			margin: '0 auto 8px',
		},
	}));

	const PhotoMUI = styled('img')(({theme}) => ({
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		[theme.breakpoints.down(768)]: {
			objectFit: 'contain',
		},
		[theme.breakpoints.down(501)]: {
			objectFit: 'fill',
		},
	}));

	const ImagePlaceholderMUI = styled('div')(() => ({
		position: 'absolute',
		top: 0,
		left:0,
		zIndex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: '#ffffff',
	}));


	const TextWrapperMUI = styled('div')(({theme}) => ({
		marginBottom: '15px',
		[theme.breakpoints.down(768)]: {
			marginBottom: '16px',
		}
	}));

	const TitleMUI = styled('h3')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		color: '#000000',
		textAlign: 'center',
		marginBottom: '10px',
		[theme.breakpoints.down(501)]: {
			fontSize: '16px',
			lineHeight: '19px',
			marginBottom: '10px',
		}
	}));


	return {
		LinkMUI,
		ItemMUI,
		PhotoMUI,
		TitleMUI,
		TextWrapperMUI,
		PhotoContainerMUI,
		ImagePlaceholderMUI
	};
};
