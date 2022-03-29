import {styled, ListItemText} from '@mui/material';

export const useAccountOrdersStyle = () => {
	const AccountOrdersWrapperUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',
		marginTop: '25px',

		display: 'flex',
		flexDirection: 'row',

		[theme.breakpoints.down(500)]: {
			flexDirection: 'column',
		}
	}));

	const OrdersUI = styled('div')(() => ({
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'column',
	}));

	const OrdersNotifUI = styled('div')(({theme}) => ({
		background: '#DFE4EC',
		borderRadius: '5px',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',

		padding: '10px 20px',
		marginBottom: '34px',

		[theme.breakpoints.down(500)]: {
			fontSize: '14px',
			lineHeight: '16px',
		}
	}));

	const OrderCardWrappUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',

		'& span': {
			marginRight: '25px',
			padding: '0px',
		},

		[theme.breakpoints.down(500)]: {
			position: 'relative',

			'& span.MuiCheckbox-root': {
				position: 'absolute',
				top: '25px',
				left: '10px',
				marginRight: '0px',
				padding: '0px',
			},
		}
	}));

	const OrdersItemUI = styled('div')(() => ({
		width: '100%',

		display: 'flex',
		flexDirection: 'column',

		marginBottom: '25px',
	}));

	const ListItemTextUI = styled(ListItemText, {
		shouldForwardProp: (prop) => prop !== 'selected',
	})<{selected?: boolean}>(({selected, theme}) => ({

		'& span': {
			cursor: 'pointer',

			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontSize: '20px',
			lineHeight: '23px',
			fontWeight: selected ? '500' : '300',
		},

		[theme.breakpoints.down(500)]: {
			'& span': {
				fontSize: '16px',
				lineHeight: '19px',
			},
		}
	}));

	const ButtonExecutParcelUI = {
		width: '165px',
		height: '32px',

		alignSelf: 'flex-end'
	};

	return {
		AccountOrdersWrapperUI,
		OrdersUI,
		OrdersNotifUI,
		OrderCardWrappUI,
		OrdersItemUI,
		ListItemTextUI,
		ButtonExecutParcelUI
	};
};
