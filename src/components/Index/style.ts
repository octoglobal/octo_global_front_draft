import {styled, Typography} from '@mui/material';

export const useIndexStyle = () => {

	const IndexContentUI = styled('div')(() => ({
		padding: '70px 0 0',

		width: '100%'
	}));

	const TypographyTitleUI = styled(Typography)(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '48px',
		lineHeight: '56px',
		textAlign: 'center',
		color: '#000000',

		marginBottom: '11px',

		[theme.breakpoints.down(500)]: {
			textAlign: 'start',
			fontSize: '24px',
			lineHeight: '28px',
		}
	}));

	const TypographyTextUI = styled(Typography)(({theme}) => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',

		[theme.breakpoints.down(500)]: {
			textAlign: 'start',
			fontSize: '16px',
			lineHeight: '19px',
		}
	}));

	const OctoTextUI = styled(Typography)(({theme}) => ({
		fontFamily: 'Playfair Display',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '48px',
		lineHeight: '64px',
		color: '#274D82',

		[theme.breakpoints.down(500)]: {
			fontSize: '28px',
			lineHeight: '37px',
			marginTop: '0',
		}
	}));

	const MainBlockUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		paddingBottom: '45px',

		[theme.breakpoints.down(500)]: {
			// flexDirection: 'row',
		},
	}));

	const MainInfoUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',

		marginBottom: '160px',

		[theme.breakpoints.down(1024)]: {
			flexDirection: 'column',
			marginBottom: '0',
		},
	}));

	const MainInteractUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',

		'& p:first-child': {
			marginBottom: '21px',
		},

		'& p:nth-child(2)': {
			marginBottom: '60px',
			width: '609px',
		},

		[theme.breakpoints.down(1024)]: {
			order: '2',
		},

		[theme.breakpoints.down(500)]: {
			marginBottom: '73px',

			'& p:first-child': {
				marginBottom: '20px',
			},

			'& p:nth-child(2)': {
				marginBottom: '20px',
				width: 'auto',
			},
		}
	}));

	const MainIconUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		order: '1',

		'& p': {
			marginTop: '15px',
		},

		[theme.breakpoints.down(1024)]: {
			marginBottom: '63px',

			'& svg': {
				transform: 'scale(0.7)',
			},
		},

		[theme.breakpoints.down(500)]: {
			'& svg': {
				transform: 'scale(0.7)',
			},
			marginBottom: '63px',
		},
		[theme.breakpoints.down(300)]: {
			'& svg': {
				transform: 'scale(0.5)',
			},
		}
	}));

	const MainHowWorkUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		'& p': {
			marginBottom: '80px',
		},

		[theme.breakpoints.down(500)]: {
			'& p': {
				display: 'none',
			},
		}
	}));

	const MainHowWorkBlockUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',

		[theme.breakpoints.down(800)]: {
			flexDirection: 'column',
			alignItems: 'center',
		}
	}));

	const MainHowWorkMapUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',

		[theme.breakpoints.down(500)]: {
			display: 'none',
		}
	}));

	const MainHowWorkStepUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',

		'& > div': {
			marginBottom: '25px',
		}
	}));

	const WhyMeBlockUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		// paddingTop: '86px',

		'& p:first-child': {
			marginBottom: '58px',
			alignSelf: 'center',
		},

		'& p:nth-child(2)': {
			marginBottom: '58px',
			width: '609px',
			height: 'auto',
		},

		[theme.breakpoints.down(500)]: {
			'& p:first-child': {
				marginBottom: '20px',
			},

			'& p:nth-child(2)': {
				marginBottom: '0',
				width: 'auto',
				height: 'auto',
			},
		}
	}));

	const RegistrBlockUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		'& p:first-child': {
			marginBottom: '60px',
		},

		[theme.breakpoints.down(500)]: {
			'& p:first-child': {
				marginBottom: '20px',
			},
		}
	}));

	const RegistrInfoBlockUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
	}));

	const RegistrImageUI = styled('div')(({theme}) => ({
		width: '554px',
		height: '295px',

		marginRight: '37px',
		background: '#C4C4C4',

		[theme.breakpoints.down(1300)]: {
			width: '354px',
			height: '205px',
		},

		[theme.breakpoints.down(500)]: {
			display: 'none',
		}
	}));

	const RegistrInfoUI = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		'& p': {
			width: '559px',
			height: 'auto',
			marginBottom: '33px',
		},

		[theme.breakpoints.down(500)]: {
			'& p:first-child': {
				width: 'auto',
				marginBottom: '33px',
			},
		}
	}));

	const ButtonRegistrUI = {
		width: '254px',
		height: '45px',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',

		color: '#FFFFFF',
	};

	const ButtonRegistrMobileUI = {
		width: '135px',
		height: '32px',
		opacity: '0.8',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '16px',
		textAlign: 'center',
		color: '#FFFFFF',
	};

	return {
		IndexContentUI,

		RegistrBlockUI,
		TypographyTitleUI,
		TypographyTextUI,
		OctoTextUI,

		MainBlockUI,
		MainInfoUI,
		MainInteractUI,
		MainIconUI,
		MainHowWorkUI,
		MainHowWorkBlockUI,
		MainHowWorkMapUI,
		MainHowWorkStepUI,

		WhyMeBlockUI,

		RegistrInfoBlockUI,
		RegistrImageUI,
		RegistrInfoUI,

		ButtonRegistrUI,
		ButtonRegistrMobileUI
	};
};
