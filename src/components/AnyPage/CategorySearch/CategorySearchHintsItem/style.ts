import { styled } from '@mui/material';

export const useCategorySearchHintsItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		listStyle: 'none',
		width: '100%',
		textAlign: 'left',
				
	}));

	const ButtonMUI = styled('button')(({theme}) => ({
		width: '100%',
		padding: '11px 0px 11px 25px',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		border: 0,
		textAlign: 'left',
		
		[theme.breakpoints.down(769)]: {		
			paddingBottom: 0,		
			padding: '10px 10px 10px 10px',		
			position:'relative',
			'&:before':{
				content:'""',
				position: 'absolute',				
				width: '96%',
				height: '1px',
				backgroundColor: '#C4C4C4',
				left: '50%',
				transform: 'translateX(-50%)',
				bottom: 0,
			}			
		},
		
		'&>div':{
			[theme.breakpoints.down(769)]: {
				display: 'grid',
				gridTemplateAreas: `
				"a a b b c c"
				"d d d e e e"	`,
				gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',				
				gap: 10,			
				padding: '0px 5px 5px 0px',
				marginBottom: 0,
				fontWeight: 300,				
			},
		}
		
	}));

	const ItemTextMUI = styled('p')(({theme}) => ({
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 400,
		color: '#000000',
		display: 'flex',	
		
		[theme.breakpoints.down(500)]:{
			fontSize: '14px',
		},
		
	}));
	const TextMarkMUI = styled('span')(() => ({		
		fontWeight: 'bold',		
	}));
	
	return {
		ItemMUI,
		ButtonMUI,
		ItemTextMUI,
		TextMarkMUI,
		
	};
};
