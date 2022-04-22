import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import {styled} from '@mui/material';

export const useTabsStyle = () => {

	const TabWrapperUI = styled('div')(() => ({
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	}));

	const TabUI = styled(TabUnstyled)(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
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

		'&.Mui-selected': {
			fontWeight: '400',
			fontSize: '24px',
			lineHeight: '28px',

			color: '#000000',

			[theme.breakpoints.down(781)]: {
				fontFamily: 'Roboto',
				fontSize: '20px',
				lineHeight: '21px',
			},
			[theme.breakpoints.down(400)]: {
				fontFamily: 'Roboto',
				fontSize: '16px',
				lineHeight: '19px',
			},
		},

		[theme.breakpoints.down(781)]: {
			fontSize: '20px',
			lineHeight: '21px',
			color: '#000000',
		},
		[theme.breakpoints.down(400)]: {
			fontSize: '16px',
			lineHeight: '19px',
			color: '#000000',
		},
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
		}
	}));
	const TabsMarginLeft = styled(TabsListUnstyled)(() => ({
		margin: '0px 0px -6px 6px',
		alignItems: 'baseline',

	}));

	return {
		TabWrapperUI,
		TabUI,
		TabsListUI,
		TabsMarginLeft
	};
};
