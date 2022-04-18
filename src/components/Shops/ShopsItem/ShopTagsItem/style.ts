import { styled } from '@mui/material';

export const useShopTagsItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		listStyle: 'none',
		marginRight: '15px',
		marginBottom: '14px',
		[theme.breakpoints.down(1250)]: {
			marginRight: '10px',
			marginBottom: '9px',
		},
		// [theme.breakpoints.down(769)]: {
		// 	marginRight: '15px',
		// 	marginBottom: '14px',
		// }
	}));

	const ItemTextButtonMUI = styled('button')(({theme}) => ({
		color: '#274D82',
		fontSize: '20px',
		lineHeight: '21px',
		fontWeight: 300,
		border: 0,
		backgroundColor: 'transparent',
		cursor: 'pointer',
		[theme.breakpoints.down(1250)]: {
			fontSize: '16px',
		},
		[theme.breakpoints.down(769)]: {
			// fontSize: '18px',
		},
	}));

	return {
		ItemMUI,
		ItemTextButtonMUI
	};
};
