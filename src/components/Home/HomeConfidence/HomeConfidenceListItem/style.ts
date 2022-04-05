import { styled } from '@mui/material';

export const useHomeConfidenceListItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 300,
		marginBottom: '15px',
		position: 'relative',
		maxWidth: '759px',
		'&::after': {
			content: '""',
			width: 4,
			height: 4,
			backgroundColor: '#000000',
			borderRadius: '50%',
			position: 'absolute',
			left: -15,
			top: 13.5,
		}
	}));

	return {
		ItemMUI
	};
};
