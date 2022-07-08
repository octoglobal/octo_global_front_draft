import {styled} from '@mui/material';


export const useEuroExchangeStyles = () => {

	const ContainerMUI = styled('div',{shouldForwardProp:(prop)=>prop !== 'admin'})
	<{admin: boolean}>(({theme, admin = false}) => ({
		display: 'flex',

		[theme.breakpoints.down(600)]: {
			display: 'flex',

			justifyContent: admin ? 'flex-start': 'center',
			marginBottom: admin ? 20 : 0,
			height: 30,


		},
	}));

	const BlockWrap = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',

	}));




	const ParagraphMUI = styled('p',{shouldForwardProp:(prop)=>prop !== 'admin'})
	<{admin: boolean}>(({theme, admin = false}) => ({
		fontSize: 20,
		fontWeight: 300,
		[theme.breakpoints.down(500)]: {
			fontSize: admin? '16px': '12px',
		},

	}));


	const LabelMUI = styled('label',{shouldForwardProp:(prop)=>prop !== 'admin'})
	<{admin: boolean}>(({theme, admin = false}) => ({
		fontSize: 20,
		fontWeight: 300,
		marginRight: 5,
		[theme.breakpoints.down(500)]: {
			fontSize: admin? '16px': '12px',
		},

	}));


	const FormMUI = styled('form',{shouldForwardProp:(prop)=>prop !== 'admin'})
	<{admin: boolean}>(({theme, admin = false}) => ({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down(500)]: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			width: admin? '100%': null,
		},

	}));
	const FormButtonUI = (isMobile:boolean)=>{
		return {
			width: '107px',
			height: '32px',
			backgroundColor: 'rgba(39, 77, 130, 0.8)',
			margin: isMobile? '0 0':'12px 0 0 0',

		};
	};
	const IcoMUI = styled('div')(() => ({
		display: 'flex',

	}));


	const IconMUI = styled('div')(({theme}) => ({
		marginLeft: 10,
		display: 'flex',
		'&>svg':{
			width: 34,
			height: 34,
		},
		[theme.breakpoints.down(500)]: {
			'&>svg':{
				width: 16,
				height: 16,
			}
		}
	}));

	const TextFieldEuroMUI = styled('div')(({theme}) => ({
		display: 'flex',
		width: 74,
		height: 27,
		alignItems:'cneter',
		justifyContent: 'center',


		[theme.breakpoints.down(500)]: {
			width: 50,
			'& > div': {
				'& > div': {
					height: 27,
					'& > div': {
						// height: 27,

						'& > input[type=number]': {
							'-moz-appearance': 'textfield',
						},
						'& > input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
							'-webkit-appearance': 'none',
							// margin: 0,
						},
						'& > input': {
							height: 27,
							// height: '10px !important',
							// margin: '0px 0px',
							padding: '0px 3px',
							fontWeight: 300,
							fontSize: '16px',


						},
						'& > fieldset': {
							border: 'none',
							borderBottom: '1px solid #000000',
							borderRadius: 0,
						}

					}
				}
			}
		},
		'& > div': {
			'& > div': {
				height: 27,
				'& > div': {
					// height: 27,
					'& > input[type=number]': {
						'-moz-appearance': 'textfield',
					},
					'& > input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
						'-webkit-appearance': 'none',
						// margin: 0,
					},
					'& > input': {
						height: 27,
						// height: '10px !important',
						// margin: '0px 0px',
						padding: '0px 3px',
						fontWeight: 300

					}
				}
			}
		}

	}));
	const InfoBlockMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		'&>p':{
			paddingTop: 5
		},
		'&>label':{
			paddingTop: 5
		},
	}));



	return {
		ContainerMUI,
		ParagraphMUI,
		LabelMUI,
		FormMUI,
		FormButtonUI,
		IcoMUI,
		IconMUI,
		TextFieldEuroMUI,
		BlockWrap,
		InfoBlockMUI
	};
};
