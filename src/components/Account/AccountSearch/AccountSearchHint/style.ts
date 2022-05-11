import { styled } from '@mui/material';

export const useAccountSearchHintStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'space-between',
		paddingRight: '69px',

		'& > div':{
			fontSize: '20px',
			lineHeight: '24px',
			fontWeight: 300,
		
		}
	}));

	const HintItemMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
			
	}));
	const HintItemuserAreaIdMUI = styled('div')(({theme}) => ({
		width: '10%',
		[theme.breakpoints.down(769)]: {
			width: '100%',
			gridArea: 'a'
		}
		
	}));
	const HintItemEmailMUI = styled('div')(({theme}) => ({
		width: '28%',	
		[theme.breakpoints.down(769)]: {
			width: '100%',
		
			gridArea: 'd',		
		
		}
	}));
	const HintItemOrderMUI = styled('div')(({theme}) => ({
		width: '8%',
		
		[theme.breakpoints.down(769)]: {
			width: '100%',
			gridArea: 'c',
			display: 'flex',
			justifyContent: 'end',
			alignItems: 'end'
						
		}
	}));
	const HintItemTrackMUI = styled('div')(({theme}) => ({
		width: '18%',
		
		[theme.breakpoints.down(769)]: {
			width: '100%',
			gridArea: 'b',
		}
	}));
	const HintItemNameMUI = styled('div')(({theme}) => ({
		width: '28%',
		
		[theme.breakpoints.down(769)]: {
			width: '100%',
			gridArea: 'e',
		}
	}));

	return {
		HintItemMUI,
		ContainerMUI,
		HintItemuserAreaIdMUI,
		HintItemEmailMUI,
		HintItemOrderMUI,
		HintItemTrackMUI,
		HintItemNameMUI,
	};
};
