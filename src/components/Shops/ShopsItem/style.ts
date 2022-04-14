import {Link, styled} from '@mui/material';

export const useShopsItemStyles = () => {

	const LinkMUI = styled(Link)(() => ({
		textDecoration: 'none',
	}));

	const ItemMUI = styled('div')(() => ({
		borderRight: '1px solid #C4C4C4',
		borderBottom: '1px solid #C4C4C4',
		padding: '25px 16px 0 16px',
		width: '33.3333%',
	}));

	const PhotoMUI = styled('img')(() => ({
		maxWidth: '336px',
		maxHeight: '208px',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		marginBottom: '20px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
		transition: '.2s all linear',
	}));

	const TextWrapperMUI = styled('div')(() => ({
		marginBottom: '15px',
	}));

	const TitleMUI = styled('h3')(() => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 600,
		color: '#000000',
		textAlign: 'center',
		marginBottom: '10px',
	}));

	return {
		LinkMUI,
		ItemMUI,
		PhotoMUI,
		TitleMUI,
		TextWrapperMUI,
	};
};
