import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import {styled} from '@mui/material';

export const useAccountPageStyle = () => {

	const AccountWrapper = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',
		// border: '1px solid red',
	}));

	const blue = {
		50: '#F0F7FF',
		100: '#C2E0FF',
		200: '#80BFFF',
		300: '#66B2FF',
		400: '#3399FF',
		500: '#007FFF',
		600: '#0072E5',
		700: '#0059B2',
		800: '#004C99',
		900: '#003A75',
	  };

	const Tab = styled(TabUnstyled)(({theme}) => ({

		// border: '1px solid red',
		border: 'none',

		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',

		color: '#000000',
		backgroundColor: '#fff',
		cursor: 'pointer',

		width: 'auto',
		margin: '0 50px',
		padding: '5px 0px 0px',
		display: 'flex',
		justifyContent: 'center',

		// '&.${tabUnstyledClasses.selected}': {
		// 	fontWeight: '500',
		// 	fontSize: '24px',
		// 	lineHeight: '28px',

		// 	color: '#000000',
		// },
		'&.Mui-selected': {
			fontWeight: '500',
			fontSize: '24px',
			lineHeight: '28px',

			color: '#000000',
		}
	}));

	const TabsList = styled(TabsListUnstyled)(({theme}) => ({
		minWidth: '320px',
		// background-color: ${blue[500]},
		// borderRadius: '8px',
		// marginBottom: '16px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'space-between',
		// border: '1px solid blue',
	}));

	const TabPanel = styled(TabPanelUnstyled)(({theme}) => ({
		width: '100%',
		// border: '1px solid green',
		// font-size: 0.875rem;
	}));

	return {
		AccountWrapper,
		Tab,
		TabPanel,
		TabsList
	};
};
