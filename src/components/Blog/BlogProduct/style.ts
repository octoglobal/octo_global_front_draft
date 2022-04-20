import {Link, styled} from '@mui/material';

export const useBlogProductStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		marginRight: '32px',
		listStyle: 'none',
		width: '100%',
		maxWidth: '336px',
		textAlign: 'center',
		[theme.breakpoints.down(769)]: {
			marginRight: '5px',
		}
	}));

	const PhotoMUI = styled('img')(({theme}) => ({
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		maxHeight: '208px',
		marginBottom: '10px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
		[theme.breakpoints.down(601)]: {
			maxHeight: '114px',
		}
	}));

	const TitleMUI = styled('h6')(() => ({
		marginBottom: '10px',
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 400,
		wordWrap: 'break-word',
	}));

	const DescriptionMUI = styled('p')(() => ({
		marginBottom: '20px',
		fontSize: '20px',
		lineHeight: '24px',
		wordWrap: 'break-word',
		fontWeight: 300,
	}));

	const LinkMUI = styled(Link)(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		fontWeight: 400,
		color: '#274D82',
		wordWrap: 'break-word',
		textDecoration: 'none',
		[theme.breakpoints.down(769)]: {
			fontSize: '14px',
			lineHeight: '16px',
		}
	}));

	return {
		ItemMUI,
		LinkMUI,
		PhotoMUI,
		TitleMUI,
		DescriptionMUI,
	};
};
