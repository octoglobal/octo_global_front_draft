import {styled} from '@mui/material';

export const useAccountHelpStyle = () => {

	const HelpWrapperMUI = styled('div')(({theme}) => ({
		// border: '1px solid blue',
		gap: 10,
		[theme.breakpoints.down(1024)]: {
			marginTop:'20px'
		},
		[theme.breakpoints.down(600)]: {
			flexDirection: 'column',
			
		},
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: '15px',
		
		// '& > *': {
		// 	margin: '0 36px',
		// },
		// '& > :last-child': {
		// 	marginRight: '0',
		// },
	}));

	const HelpItemMUI = styled('div')(({theme}) => ({
		// border: '1px solid black',
		// cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		
		[theme.breakpoints.down(600)]: {
			flexDirection: 'row',
			gap: 20,
		},
	}));

	const HelpImageMUI = styled('picture')(({theme}) => ({
		width: '43px',
		height: '43px',
		[theme.breakpoints.down(600)]: {
			display:'flex',
			justifyContent:'center',
			alignItems: 'center',				
		},
		
	}));

	const HelperTextMUI = styled('div')(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		textDecorationLine: 'underline',
		color: '#274D82',
		textAlign: 'center',
		marginTop: '8px',
		width: '220px',	
		'&>a':{
			color: '#274D82',
		},
		'&>a:visited':{
			color: '#274D82',
		},
		'&>a:link':{
			color: '#274D82',
		},
		[theme.breakpoints.down(1024)]: {
			fontSize: '16px',
			width: '100%',
		},	
		[theme.breakpoints.down(600)]: {
			alignSelf:' center',
			textAlign: 'left',
			fontSize: '16px',
			marginTop: '0px',
		},
	}));

	return {
		HelpWrapperMUI,
		HelpItemMUI,
		HelpImageMUI,
		HelperTextMUI
	};
};
