import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import {styled} from '@mui/material';
import { keyframes } from '@mui/system';



export const useTabsStyle = () => {
	const AnimationName = keyframes`
	 	
		 0%{background-position:0% 50%}
		 100%{background-position:100% 50%}
	
		 `;


	const BgMUI = styled('div')(({theme}) => ({
		position: 'relative',
		width: 30,
		height: 30,
		borderRadius: 50,
		animation:`${AnimationName} 2s linear infinite`,
		background: 'linear-gradient(210deg, #F35151 0%, #F35151 45%, #FFCD 50%, #F35151 55%, #F35151 100% )',
		backgroundSize: '1000% 100%',
		[theme.breakpoints.down(600)]: {
			width: 20,
			height: 20,
			marginBottom: '5px',
		},
	}));

	const TabWrapperUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	}));

	const TabUI = styled(TabUnstyled, {
		shouldForwardProp: (prop) => prop !== 'active',
	})<{active?: boolean}>(({active, theme}) => ({
		fontStyle: 'normal',
		fontWeight: active ? '400' : '300',
		fontSize: '24px',
		lineHeight: '28px',
		alignItems: 'center',
		color: '#000000',
		// backgroundColor: '#fff',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		border: 'none',

		width: 'auto',
		margin: '0 auto',
		padding: '5px 0px 0px',
		display: 'flex',
		justifyContent: 'center',
		fontFamily: 'Roboto',

		// '&.Mui-selected': {
		// 	// fontWeight: '400',
		//
		// 	[theme.breakpoints.down(781)]: {
		// 		fontFamily: 'Roboto',
		// 		fontSize: '20px',
		// 		lineHeight: '21px',
		// 	},
		// 	[theme.breakpoints.down(404)]: {
		// 		fontFamily: 'Roboto',
		// 		fontSize: '16px',
		// 		lineHeight: '19px',
		// 	},
		// },

		[theme.breakpoints.down(870)]: {
			margin: '0 10px !important',
		},


		[theme.breakpoints.down(781)]: {
			fontSize: '20px',
			lineHeight: '21px',
		},
		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '19px',
			margin: '0 4px !important',
		},
		[theme.breakpoints.down(370)]: {
			fontSize: '14px',
		}
	}));

	const TabsListUI = styled(TabsListUnstyled)(({theme}) => ({
		minWidth: '320px',
		paddingBottom: '5px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'space-between',
		borderBottom: '2px solid #C4C4C4',

		[theme.breakpoints.down(800)]: {
			flexWrap: 'wrap',
			borderBottom: '1px solid #C4C4C4',
			minWidth: '0px',
		},
		// [theme.breakpoints.down(800)]: {
		// 	flexDirection:'column'
		// },
	}));
	const TabsMarginLeft = styled(TabsListUnstyled)(() => ({
		margin: '0px 0px -6px 6px',
		alignItems: 'baseline',

	}));
	const TabLineMUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	}));
	return {
		TabWrapperUI,
		TabUI,
		TabsListUI,
		TabsMarginLeft,
		BgMUI,
		TabLineMUI
	};
};
