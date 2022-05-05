import { Collapse, styled } from '@mui/material';

export const useAddressCollapseStyles = () => {

	const CollapseMUI = styled(Collapse)(({theme}) => ({
		marginBottom: '25px',

		'& form': {
			marginTop: '20px',
			marginLeft: '48px',
		},

		[theme.breakpoints.down(800)]: {
			'& form': {
				marginLeft: '0px',
			},
		},

		[theme.breakpoints.down(501)]: {
			'& form': {
				marginLeft: '0px',
			},
		}
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

	const buttonSxMobile = {
		marginTop: '5px',
		maxWidth: '135px',
		height: '32px',
		fontSize: '14px',
		lineHeight: '16px',
		fontWeight: 400,
		color: '#FFFFFF',
		backgroundColor: 'rgba(39,77,130,0.8)',
		borderRadius: '5px',
	};

	return {
		buttonSx,
		buttonSxMobile,
		CollapseMUI
	};
};
