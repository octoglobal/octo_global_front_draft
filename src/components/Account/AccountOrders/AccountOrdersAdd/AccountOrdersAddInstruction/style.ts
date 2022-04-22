import { styled } from '@mui/material';

export const useAccountOrdersAddInstructionStyles = () => {
	const ItemMUI = styled('div')(({theme}) => ({
		'& > a': {
			display: 'flex',
			alignItems: 'center',
		},
		marginBottom: '25px'
	}));

	const IconMUI = styled('div')(({theme}) => ({
		marginRight: '20px',
		width: '42px',
		height: '42px',
	}));

	const TextMUI = styled('div')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#000000',
	}));

	return {
		TextMUI,
		ItemMUI,
		IconMUI,
	};
};
