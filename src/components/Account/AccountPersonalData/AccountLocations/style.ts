import React from 'react';
import {styled, Typography} from '@mui/material';

export const useAccountLocationStyle = () => {

	const LocationWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',

		display: 'flex',
		justifyContent: 'center',
	}));

	const BorderWrapperUI = styled('div')(({theme}) => ({
		maxWidth: '737px',
		width: 'auto',
		height: 'auto',
		background: '#FFFFFF',
		border: '5px dashed #234A82',
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
		[theme.breakpoints.down(500)]: {
			// width: '95%'
		}
	}));

	const LocationContainerUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '21px 38px',

		'& .TabsUnstyled-root': {
			width: '95%',
		},

		'& .TabsListUnstyled-root': {
			width: '100%',
			minWidth: '280px',
			paddingBottom: '20px',
			marginBottom: '20px',
		},

		'& .TabsListUnstyled-root button': {
			margin: '0 15px',
		},

		// '& form:last-child': {
		// 	marginBottom: '0',
		// },

		[theme.breakpoints.down(500)]: {
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
			},
		}
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

		[theme.breakpoints.down(500)]: {
			'& button': {
				alignSelf: 'flex-end',
			}
		}
	}));

	const LocationButtonsUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',

		[theme.breakpoints.down(500)]: {
			justifyContent: 'space-between',
		}
	}));

	const LocationAddressUI = styled('div')(({theme}) => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',
		width: '351px',

		marginBottom: '25px',

		[theme.breakpoints.down(500)]: {
			width: '100%',
			marginTop: '15px',
			fontSize: '18px',
			lineHeight: '21px',
		}
	}));

	const LocationButtonUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '23px',
		textDecorationLine: 'underline',
		color: '#989292',

		cursor: 'pointer'
	}));

	const TypographyUI = styled(Typography)(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '36px',
		lineHeight: '42px',
		color: '#000000',

		marginBottom: '40px'
	}));

	const ButtonAdd: React.CSSProperties = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',

		width: '150px',
		height: '32px',
		padding: '8px 15px',
		margin: '0',
		// marginLeft: '25px'
		alignSelf: 'flex-end'
	};

	const ButtonShowAll: React.CSSProperties = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '16px',
		lineHeight: '19px',
		textAlign: 'center',
		color: '#274D82',
		background: 'inherit',

		width: '236px',
		height: '32px',
		padding: '0',
		margin: '0'
	};

	return {
		TypographyUI,
		LocationButtonUI,
		BorderWrapperUI,
		LocationWrapperUI,
		LocationAddressUI,
		LocationContentUI,
		LocationContainerUI,
		LocationFormUI,
		LocationButtonsUI,
		ButtonAdd,
		ButtonShowAll
	};
};
