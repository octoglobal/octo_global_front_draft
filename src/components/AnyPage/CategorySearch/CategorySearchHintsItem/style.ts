import { styled } from '@mui/material';

export const useCategorySearchHintsItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		width: '100%',
		textAlign: 'left',
	}));

	const ButtonMUI = styled('button')(() => ({
		width: '100%',
		padding: '11px 0px 11px 25px',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 0,
		textAlign: 'left',
	}));

	const ItemTextMUI = styled('div')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#000000',
		display: 'flex',
		flexDirection:'row',		
		[theme.breakpoints.down(500)]:{
			fontSize: '14px',
		}
		
	}));
	const TextMarkMUI = styled('p')(() => ({		
		fontWeight: 'bold',
		color: 'red'
	}));
	
	return {
		ItemMUI,
		ButtonMUI,
		ItemTextMUI,
		TextMarkMUI
	};
};
