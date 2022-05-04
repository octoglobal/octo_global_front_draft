import { Collapse, styled } from '@mui/material';

export const useAddressCollapseStyles = () => {

	const CollapseMUI = styled(Collapse)(() => ({

	}));

	const buttonSx = {
		marginTop: '5px',
		maxWidth: '112px',
		height: '32px',
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 400,
		color: '#FFFFFF',
		backgroundColor: 'rgba(39,77,130,0.8)'
	};

	return {
		buttonSx,
		CollapseMUI
	};
};
