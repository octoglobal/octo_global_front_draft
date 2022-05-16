import React from 'react';
import {styled, Typography} from '@mui/material';

export const useAccountLocationStyle = () => {

	const LocationWrapperUI = styled('div')(() => ({
		width: '100%',
		height: 'max-content',

		display: 'flex',
		justifyContent: 'center',

		marginBottom: '25px',
	}));

	const AddressListMUI = styled('div')(() => ({
		'& > *:last-child': {
			borderBottom: 0
		}
	}));

	const BorderWrapperUI = styled('div')(({theme}) => ({
		maxWidth: '673px',
		width: 'auto',
		height: 'auto',
		background: '#FFFFFF',
		border: '3.5px dashed #234A82',
		borderImage: 'url("/image/AddressBorder.png") 3',
		boxSizing: 'border-box',

		[theme.breakpoints.down(1024)]: {
			width: '100%',
		},
		[theme.breakpoints.down(800)]: {
			// width: '100%'
		},
		[theme.breakpoints.down(800)]: {
			// width: '500px'
		},
		[theme.breakpoints.down(600)]: {
			// width: '95%'
			border: '5px dashed #234A82',

		}
	}));

	const LocationContainerUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		// padding: '15px 30px 30px',

		'& .TabsUnstyled-root': {
			width: '100%',
		},

		'& .TabsListUnstyled-root': {
			width: '100%',
			minWidth: '280px',
			paddingBottom: '6px',
			marginBottom: '20px',
		},

		'& .TabsListUnstyled-root button': {
			marginRight: '0 25px',
			fontSize: '20px',
			lineHeight: '23px',
		},

		[theme.breakpoints.down(600)]: {
			padding: '10px',

			// скрываем адрес на мобилке
			'& p:first-child': {
				display: 'none'
			},

			'& .TabsListUnstyled-root': {
				paddingBottom: '4px',
				marginBottom: '0px',
				// justifyContent: 'flex-start',
				minWidth: '100%',
			},

			'& .TabsListUnstyled-root button': {
				margin: '0 10px 0 0	',

				fontSize: '16px',
				lineHeight: '19px',
			},
		},
	}));

	const LocationContentUI = styled('div')(({theme}) => ({
		width: '100%',
		height: '100%',

		[theme.breakpoints.down(500)]: {
			margin: '0',

			'& button': {
				marginBottom: '0 !important',
			}
		}
	}));

	const LocationFormUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		'& svg': {
			marginBottom: '25px',
		},

		'& .MuiCollapse-root ': {
			width: '100%',
		},

		[theme.breakpoints.down(500)]: {
			'& button': {
				alignSelf: 'flex-end',
			},

			'& .MuiCollapse-root ': {
				width: '100%',
			}
		}
	}));

	const LocationButtonsUI = styled('div', {
		shouldForwardProp: (prop) => prop !== 'justifyAlign' && prop !== 'addMargin',
	})<{ justifyAlign?: boolean, addMargin?: boolean }>(({justifyAlign = false, addMargin = false, theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'flex-end',
		justifyContent: justifyAlign ? 'center' : 'flex-end',
		width: '100%',

		marginBottom: addMargin ? '10px' : '0',
		marginTop: !addMargin ? '10px' : '0',

		

		[theme.breakpoints.down(500)]: {
			justifyContent: justifyAlign ? 'center' : 'flex-end',
			marginBottom: '0',
			marginTop: '5px',
		}
	}));

	const LocationPlusUI = styled('span')(({theme}) => ({
		marginTop: '5px',

		'& svg': {
			cursor: 'pointer',
		},

		[theme.breakpoints.down(500)]: {
			marginTop: '30px',
		}
	}));

	const LocationAddressUI = styled('div')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '22px',
		lineHeight: '28px',
		color: '#000000',
		width: '288px',

		marginBottom: '25px',

		[theme.breakpoints.down(600)]: {
			width: '100%',
			margin: '15px 0px',
			fontSize: '18px',
			lineHeight: '21px',
		},
		[theme.breakpoints.down(400)]: {
			width: '100%',
			margin: '15px 0px 20px 0px',
			fontSize: '16px'
		}
	}));

	const LocationButtonUI = styled('div')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		textDecorationLine: 'underline',
		color: '#989292',
		cursor: 'pointer',

		[theme.breakpoints.down(600)]: {
			fontSize: '18px',
		},
		[theme.breakpoints.down(400)]: {
			fontSize: '16px',
		}
	}));

	const TypographyUI = styled(Typography)(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
		marginBottom: '26px',

		[theme.breakpoints.down(750)]: {
			fontSize: '20px',
		},
	}));

	const ButtonAdd: React.CSSProperties = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',

		width: '150px',
		height: '32px',
		padding: '8px 14px',
		margin: '0 0 0 25px'
		// marginLeft: '25px'
		// alignSelf: 'flex-end'
	};

	const ButtonShowAll: React.CSSProperties = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',
		color: '#274D82',
		background: 'inherit',

		display: 'block',

		width: 'auto',
		height: '32px',
		padding: '0',
		margin: '0'
	};

	const TextFieldMobileSx = {
		height: '37px !important',

		'& .MuiOutlinedInput-root input': {
			height: '37px !important',
		}
	};

	return {
		TypographyUI,
		LocationButtonUI,
		BorderWrapperUI,
		AddressListMUI,
		LocationWrapperUI,
		LocationAddressUI,
		LocationContentUI,
		LocationPlusUI,
		LocationContainerUI,
		LocationFormUI,
		LocationButtonsUI,
		ButtonAdd,
		ButtonShowAll,
		TextFieldMobileSx
	};
};
