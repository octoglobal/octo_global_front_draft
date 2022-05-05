import {styled} from '@mui/material';

export const useAddressItemStyles = () => {

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		alignItems: 'center',

		'& span': {
			marginRight: '8px',
		},

		[theme.breakpoints.down(501)]: {
			marginBottom: '7px',
		}
	}));

	const ContainerMUI = styled('button', {
		shouldForwardProp: (prop) => prop !== 'isActive',
	})<{isActive?: boolean}>(({theme, isActive}) => ({
		display: 'block',
		border: 0,
		cursor: 'pointer',
		backgroundColor: !isActive ? 'transparent' : 'rgba(196, 196, 196, 0.3)',
		borderRadius: !isActive ? 0 : '8px',
		padding: '12.5px 7px',

		textAlign: 'left',
		maxWidth: '975px',
		width: 'auto',

		'& > *:last-child': {
			marginRight: '0',
		},

		[theme.breakpoints.down(501)]: {
			marginTop: '7px',
			padding: '8px',
		}
	}));

	const ItemMUI = styled('span')(({theme}) => ({
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',
		fontWeight: 300,
		marginRight: '15px',

		// wordWrap: 'break-word',
		// width: 'auto',
		// display: 'inline-block',

		[theme.breakpoints.down(501)]: {
			fontSize: '16px',
			lineHeight: '19px',
			marginRight: '10px',
		}
	}));

	return {
		WrapperMUI,
		ItemMUI,
		ContainerMUI
	};
};
