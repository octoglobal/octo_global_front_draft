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
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		}
	}));

	const HintItemMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
	}));
	const HintItemuserAreaIdMUI = styled('div')(() => ({
		width: '10%',
	}));
	const HintItemEmailMUI = styled('div')(() => ({
		width: '28%',
	}));
	const HintItemOrderMUI = styled('div')(() => ({
		width: '8%',
	}));
	const HintItemTrackMUI = styled('div')(() => ({
		width: '18%',
	}));
	const HintItemNameMUI = styled('div')(() => ({
		width: '28%',
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
