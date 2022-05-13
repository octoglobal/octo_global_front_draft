import { styled } from '@mui/material';

export const useAccountSearchHintStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		paddingRight: '69px',

		'& > div':{
			fontSize: '20px',
			lineHeight: '24px',
			fontWeight: 300,
			[theme.breakpoints.down(770)]: {
				fontSize: '16px'
				
			}
		}
	}));

	const HintItemMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
			
	}));
	const HintItemuserAreaIdMUI = styled('div')(({theme}) => ({
		width: '10%',
		[theme.breakpoints.down(770)]: {
			width: '100%',
			gridArea: 'a',
			
		}
		
	}));
	const HintItemEmailMUI = styled('div')(({theme}) => ({
		width: '28%',
		wordWrap: 'break-word', 
		overflowWrap: 'break-word',	
		[theme.breakpoints.down(770)]: {
			width: '100%',		
			gridArea: 'd',	
				
		
		}
	}));
	const HintItemOrderMUI = styled('div')(({theme}) => ({
		width: '8%',
		textTransform: 'uppercase',
		[theme.breakpoints.down(770)]: {
			width: '100%',
			gridArea: 'c',
			display: 'flex',
			justifyContent: 'end',
			alignItems: 'end',
		
						
		}
	}));
	const HintItemTrackMUI = styled('div')(({theme}) => ({
		width: '18%',
		textTransform: 'uppercase',
		[theme.breakpoints.down(770)]: {
			width: '100%',
			gridArea: 'b',			
		},
		
		
	}));
	const HintItemNameMUI = styled('div')(({theme}) => ({
		width: '28%',
		
		[theme.breakpoints.down(770)]: {
			width: '100%',
			gridArea: 'e',
		
		}
	}));
	const PMUI = styled('div')(({theme}) => ({
		[theme.breakpoints.down(400)]: {
			fontSize: '15px',					
		},
		

	}));
	return {
		HintItemMUI,
		ContainerMUI,
		HintItemuserAreaIdMUI,
		HintItemEmailMUI,
		HintItemOrderMUI,
		HintItemTrackMUI,
		HintItemNameMUI,
		PMUI
	};
};
