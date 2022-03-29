import { styled, Card } from '@mui/material';

import { IOrderCardStyles } from '../../../../types/types';

export const useOrderCardStyle = () => {
	const OrderCardUI = styled(Card, {
		shouldForwardProp: (prop) => prop !== 'highlight' && prop !== 'disabled',
	})<IOrderCardStyles>(({ highlight, disabled }) => ({
		width: '100%',
		height: '171px',
		margin: '15px 0',
		padding: '10px 8px',

		boxShadow: 'none',

		background: highlight ? '#DFE4EC' : 'inherit',
		borderRadius: highlight ? '5px' : '0',
		opacity: disabled ? '0.5' : '1',
	}));

	const OrderContentUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
	}));

	const OrderTitlesUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		marginBottom: '20px',

		'& span:first-child': {
			marginRight: '40px',
		},
	}));

	const OrderTitleUI = styled('span')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'left',
		color: '#000000',
	}));

	const OrderBoldTitleUI = styled('span')(() => ({
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'left',
		color: '#000000',
	}));

	const OrderInfoUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
	}));

	const OrderInfoBlockUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
	}));

	const ImageUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		marginRight: '45px',
	}));

	const InfoUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	}));

	return {
		OrderCardUI,
		OrderContentUI,
		OrderTitlesUI,
		OrderTitleUI,
		OrderBoldTitleUI,
		OrderInfoUI,
		OrderInfoBlockUI,
		ImageUI,
		InfoUI,
	};
};
