import { styled } from '@mui/material';

export const useHomeWorkExpListItemStyles = () => {

	const ItemMUI = styled('li')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',
		marginBottom: '25px',
		[theme.breakpoints.down(1311)]: {
			marginBottom: '15px',
		},
		[theme.breakpoints.down(769)]: {
			width: '49%',
			marginRight: '10px',
		},
		[theme.breakpoints.down(601)]: {
			width: '100%',
			marginRight: '0px',
			marginBottom: '17px',
			alignItems: 'flex-start',
		},
	}));

	const ItemTextMUI = styled('p')(({theme}) => ({
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 300,
		color: '#000000',
		maxWidth: '420px',
		[theme.breakpoints.down(1311)]: {
			fontSize: '18px',
			lineHeight: '22px',
		},
		[theme.breakpoints.down(1025)]: {
			fontSize: '16px',
			lineHeight: '19px',
		},
		[theme.breakpoints.down(400)]: {
			maxWidth: '220px'
		},
		[theme.breakpoints.down(351)]: {
			fontSize: '14px',
			maxWidth: '200px'
		},
	}));

	const ItemIconMUI = styled('div')(({theme}) => ({
		marginRight: '25px',
		height: '101px',
		'& > svg': {
			width: '125px',
			height: '101px',
			minWidth: '125px',
		},
		[theme.breakpoints.down(1311)]: {
			marginRight: '15px',
			height: '100px',
			'& > svg': {
				width: '105px',
				height: '100px',
				minWidth: 'auto',
			}
		},
		[theme.breakpoints.down(1025)]: {
			marginRight: '10px',
			height: '70px',
			'& > svg': {
				width: '85px',
				height: '70px'
			}
		},
		[theme.breakpoints.down(601)]: {
			marginRight: '18px',
		}
	}));

	return {
		ItemMUI,
		ItemTextMUI,
		ItemIconMUI,
	};
};
