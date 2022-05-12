import {Link, styled} from '@mui/material';

export const useShopsItemStyles = () => {

	const LinkMUI = styled(Link)(({theme}) => ({
		textDecoration: 'none',
		display: 'block',
		
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

	const PhotoMUI = styled('img')(({theme}) => ({
		position: 'relative',
		maxWidth: '336px',
		maxHeight: '208px',
		minWidth: '336px',
		minHeight: '208px',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		marginBottom: '20px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
		transition: '.2s all linear',	
		[theme.breakpoints.down(768)]: {
			objectFit: 'contain',
		},
		[theme.breakpoints.down(501)]: {
			minWidth: '306px',
			height: '189px',
			objectFit: 'fill',
			marginBottom: '8px',
		},
		[theme.breakpoints.down(361)]: {
			minWidth: 'auto',
		}
	}));

	const ImagePlaceholderMUI = styled('div')(({theme}) => ({
		position: 'absolute',
		top: 25,
		left:10,
		zIndex: 1,
		maxWidth: '336px',
		maxHeight: '208px',
		minWidth: '336px',
		minHeight: '208px',
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',		
		// borderRadius: '8px',
		overflow: 'hidden',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
		[theme.breakpoints.down(768)]: {
			top: 20,
			left:6,
		},	
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
		ImagePlaceholderMUI
	};
};
