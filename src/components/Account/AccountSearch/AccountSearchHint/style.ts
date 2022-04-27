import { styled } from '@mui/material';

export const useAccountSearchHintStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'space-between',
	}));

	const HintItemMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '24px',
		fontWeight: 300,
	}));

	return {
		HintItemMUI,
		ContainerMUI
	};
};
