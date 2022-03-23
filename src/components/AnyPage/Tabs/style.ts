import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';

import {styled} from '@mui/material';

export const useTabsStyle = () => {

	const TabWrapperUI = styled('div')(() => ({
		width: '100%',
	}));

	const TabUI = styled(TabUnstyled)(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',

		color: '#000000',
		backgroundColor: '#fff',
		cursor: 'pointer',
		border: 'none',

		width: 'auto',
		margin: '0 auto',
		padding: '5px 0px 0px',
		display: 'flex',
		justifyContent: 'center',

		'&.Mui-selected': {
			fontFamily: 'Roboto',
			fontWeight: '500',
			fontSize: '24px',
			lineHeight: '28px',

			color: '#000000',
		}
	}));

	const TabsListUI = styled(TabsListUnstyled)(() => ({
		minWidth: '320px',
		paddingBottom: '5px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'space-between',
		borderBottom: '2px solid #C4C4C4',
	}));

	// const TabPanelUI = styled(TabPanelUnstyled)(() => ({
	// 	width: '100%',
	// }));

	return {
		TabWrapperUI,
		TabUI,
		TabsListUI
	};
};
