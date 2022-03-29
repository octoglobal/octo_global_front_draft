import {styled} from '@mui/material';

export const useAccountOrdersStyle = () => {
	const AccountOrdersWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
		marginTop: '25px',

		display: 'flex',
		flexDirection: 'row',
	}));

	const OrdersUI = styled('div')(() => ({
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'column',
	}));

	const OrdersNotifUI = styled('div')(() => ({
		background: '#DFE4EC',
		borderRadius: '5px',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		color: '#000000',

		padding: '10px 20px',
		marginBottom: '34px',
	}));

	const OrderCardWrappUI = styled('div')(() => ({
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline',

		'& span': {
			marginRight: '25px',
			padding: '0px',
		}
	}));

	const OrdersItemUI = styled('div')(() => ({
		width: '100%',

		display: 'flex',
		flexDirection: 'column',
	}));

	return {
		AccountOrdersWrapperUI,
		OrdersUI,
		OrdersNotifUI,
		OrderCardWrappUI,
		OrdersItemUI
	};
};
