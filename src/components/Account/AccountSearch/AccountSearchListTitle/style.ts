import { styled } from '@mui/material';

export const useAccountSearchListTitleStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		padding: '15px 25px 0',
		marginBottom: '13px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		textAlign: 'left',
		paddingRight: '69px',

		'& > div':{
			fontWeight: 400,
			fontSize: '20px',
			lineHeight: '24px',
			color: '#C4C4C4',
		}
	}));

	const ItemMUI = styled('div')(() => ({
		// width: '10%',
	}));
	const ItemIdMUI = styled('div')(() => ({
		width: '10%',
		
	}));
	const ItemEmailMUI = styled('div')(() => ({
		width: '28%',
	}));
	const ItemOrderMUI = styled('div')(() => ({
		width: '8%',	
	}));
	const ItemTrackMUI = styled('div')(() => ({
		width: '18%',
	}));
	const ItemNameMUI = styled('div')(() => ({
		width: '28%',	
	}));

	return {
		ItemMUI,
		ContainerMUI,
		ItemIdMUI,
		ItemEmailMUI,
		ItemOrderMUI,
		ItemTrackMUI,
		ItemNameMUI
	};
};
