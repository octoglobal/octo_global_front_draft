import { styled } from '@mui/material';

export const useAccountOrdersAddInstructionStyles = () => {
	const ItemMUI = styled('div')(() => ({
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
		[theme.breakpoints.down(1025)]: {
			width: '32px',
			height: '32px',
			marginRight: '15px',
		}
	}));

	const TextMUI = styled('div')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
		color: '#000000',
		[theme.breakpoints.down(1025)]: {
			fontSize: '16px',
			lineHeight: '18px',
			fontWeight: 300,
			color: '#000000',
		}
	}));

	return {
		TextMUI,
		ItemMUI,
		IconMUI,
	};
};
