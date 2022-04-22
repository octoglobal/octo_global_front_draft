import { styled } from '@mui/material';

export const useHomeConfidenceListItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '32px',
		fontWeight: 300,
		marginBottom: '15px',
		position: 'relative',
		maxWidth: '770px',
		'&::after': {
			content: '""',
			width: 4,
			height: 4,
			backgroundColor: '#000000',
			borderRadius: '50%',
			position: 'absolute',
			left: -15,
			top: 14,
		},
		// [theme.breakpoints.down(1210)]: {
		// 	fontSize: '20px',
		// 	lineHeight: '22px',
		// 	'&::after': {
		// 		top: 10.5,
		// 	},
		// },
		// [theme.breakpoints.down(1025)]: {
		// 	fontSize: '18px',
		// 	lineHeight: '20px',
		// 	'&::after': {
		// 		top: 9.5,
		// 	},
		// },
		[theme.breakpoints.down(769)]: {
			fontSize: '16px',
			lineHeight: '20px',
			marginBottom: '12px',
			maxWidth: '345px',
			'&::after': {
				top: 8,
			},
		},
		[theme.breakpoints.down(351)]: {
			fontSize: '14px',
			lineHeight: '17px',
			'&::after': {
				top: 7,
			},
		}
	}));

	return {
		ItemMUI
	};
};
