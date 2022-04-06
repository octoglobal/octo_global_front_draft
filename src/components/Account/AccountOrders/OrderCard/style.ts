import {styled, Card} from '@mui/material';

import { IOrderCardStyles } from '../../../../types/types';

export const useOrderCardStyle = () => {
	const OrderCardUI = styled(Card, {
		shouldForwardProp: (prop) => prop !== 'highlight' && prop !== 'disabled',
	})<IOrderCardStyles>(({ highlight, disabled, theme }) => ({
		width: '100%',
		height: '155px',
		margin: '15px 0',
		padding: '10px 8px',

		boxShadow: 'none',

		background: highlight ? '#DFE4EC' : 'inherit',
		borderRadius: highlight ? '5px' : '0',
		opacity: disabled ? '0.5' : '1',

		[theme.breakpoints.down(500)]: {
			height: 'auto',
			padding: '0px',
		},
		// [theme.breakpoints.down(400)]: {
		// 	height: '210px',
		// },
		// [theme.breakpoints.down(365)]: {
		// 	height: '230px',
		// }
	}));

	const OrderContentUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
	}));

	const OrderLinkMUI = styled('a')(({theme}) => ({
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'center',
		color: '#274D82',
		cursor: 'pointer',
		textDecoration: 'none',

		display: 'flex',
		alignItems: 'center',
		'& svg': {
			marginLeft: '5px'
		},

		[theme.breakpoints.down(500)]: {
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '16px',
			textAlign: 'center',
			color: '#274D82',
		}
	}));

	const OrderTitlesUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',

		marginBottom: '20px',

		'& span:first-child': {
			marginRight: '40px',
		},

		[theme.breakpoints.down(500)]: {
			marginTop: '10px',
			marginLeft: '30px',
			marginBottom: '15px',
		}
	}));

	const TitleUI = styled('span')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'left',
		color: '#000000',
	}));

	const BoldTitleUI = styled('span')(() => ({
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'left',
		color: '#000000',
	}));

	const OrderTitleUI = styled('span')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'left',
		color: '#000000',

		[theme.breakpoints.down(500)]: {
			fontSize: '14px',
			lineHeight: '16px',
			marginBottom: '10px',
		}
	}));

	const OrderBoldTitleUI = styled('span')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'left',
		color: '#000000',

		[theme.breakpoints.down(500)]: {
			display: 'block',
			fontSize: '14px',
			lineHeight: '16px',

			marginTop: '5px',
		}
	}));

	const OrderInfoUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
	}));

	const OrderInfoBlockUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
	}));

	const ImageUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',

		width: '95px',
		height: '72px',

		marginRight: '45px',

		[theme.breakpoints.down(500)]: {
			width: '37px',
			height: '28px',
			marginLeft: '1px',

			marginRight: '10px',
		}
	}));

	const InfoUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
	}));

	return {
		OrderCardUI,
		OrderContentUI,
		OrderTitlesUI,
		OrderTitleUI,
		OrderLinkMUI,
		OrderBoldTitleUI,
		OrderInfoUI,
		OrderInfoBlockUI,
		ImageUI,
		InfoUI,
		TitleUI,
		BoldTitleUI
	};
};
