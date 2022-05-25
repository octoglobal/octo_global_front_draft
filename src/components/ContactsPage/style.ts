import { styled } from '@mui/material';

export const useContactsStyle = () => {
	const ContainerMUI = styled('div')(() => ({
		maxWidth: '650px',
		margin: '15px auto 0',
		paddingBottom:25,
	}));

	const H1MUI = styled('h1')(({theme}) => ({
		fontSize: '36px',
		fontWeight: 400,
		marginBottom: 20,
		[theme.breakpoints.down(600)]:{
			fontSize: '24px',
			marginBottom: 10,
		},
	}));

	const PBOX = styled('div')(({theme}) => ({
		marginBottom: 25,
		[theme.breakpoints.down(600)]:{
			marginBottom: 10,
			
		},

	}));
	const TextBoxMUI = styled('div')(({theme}) => ({
		width: 368,
		[theme.breakpoints.down(600)]:{
			textAlign: 'center',
			marginTop: 20,
		},

	}));
	
	const LinkMUI = styled('a')(() => ({
		// marginBottom: 25
	}));

	const MarkMUI = styled('span')(() => ({
		fontSize: '20px',
		fontWeight: 400,
		color: '#274D82'
		
	}));
	const ParagraphMUI = styled('p')(({theme}) => ({
		fontSize: '20px',
		fontWeight: 300,
		marginBottom: 5,
		[theme.breakpoints.down(600)]:{
			fontSize: '18px',
			
		},

	}));
	const LinksBox = styled('div')(({theme}) => ({		
		marginBottom: 30,
		[theme.breakpoints.down(600)]:{
			marginBottom: 20,
			
		},
	}));
	
	

	const ContactBox = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		marginBottom: 15,		
	}));


	const IcoBoxMUI = styled('div')(() => ({
		
		marginLeft: 25	
	}));

	const H2MUI = styled('h2')(({theme}) => ({
		fontSize: '24px',
		fontWeight: 400,
		marginBottom: 20,
		[theme.breakpoints.down(600)]:{
			fontSize: '20px',
		
		}
		
	}));
	const H2BOX = styled('div')(({theme}) => ({
		width: 548,
		marginBottom: 25,
		[theme.breakpoints.down(600)]:{
			width: 290,			
			margin: '0 auto',
			textAlign:'center',
			marginTop: 30,
		
		}
	}));


	
	const FormMUI = styled('form')(({theme}) => ({
		display: 'flex',
		flexDirection:'column',
		width: 526,
		[theme.breakpoints.down(600)]:{
			width: '100%',
		}
	}));

	const TextFieldContainerMUI = styled('div')(() => ({
		marginBottom: '15px',
		width: '100%',
	}));
	const DaysGridMUI = styled('div')(() => ({
		display: 'grid',
		gridTemplateAreas: 'day time',
		gridTemplateColumns: '178px 113px',
		gap: 15
	}));
	// const DayRowMUI = styled('div')(() => ({
	// 	display: 'grid',
	// 	gridTemplateAreas: 'day time',
	// 	gridTemplateColumns: '178px 113px',
	// 	gap: 10
	// }));
	const TextAreaContainerMUI = styled('div')(({theme}) => ({
		width: '100%',
		marginBottom: '20px',
		
		[theme.breakpoints.up(1025)]: {
			'& > div': {
				'& > .MuiFormControl-root': {
					height: '183px !important',
					'& > .MuiOutlinedInput-root': {
						height: '100% !important',
						padding: '13px 16px',
						'& > textArea': {
							height: '100% !important',
							'&::placeholder': {
								fontWeight: 300,
								color: '#C4C4C4',
							},
						}
					}
				},
			},
		},
		[theme.breakpoints.down(1025)]: {
			'& > div': {
				marginBottom: 0,
				'& > .MuiFormControl-root': {
					height: 'auto',
					'& > .MuiOutlinedInput-root': {
						height: 'auto',
						padding: '15px',
						'& > textArea': {
							fontSize: '16px',
							lineHeight: '18px',
							'&::placeholder': {
								fontSize: '16px',
								fontWeight: 300,
								color: '#C4C4C4',
							},
						}
					}
				},
			},
		}
		
	}));

	const BtnStyle = {
		backgroundColor: 'rgba(39, 77, 130, 0.8)',
		alignSelf: 'end',
		width: 135
	};

	return {
		ContainerMUI,
		ParagraphMUI,
		H1MUI,
		FormMUI,
		H2BOX,
		H2MUI,
		MarkMUI,
		ContactBox,
		PBOX,
		LinksBox,
		TextAreaContainerMUI,
		TextFieldContainerMUI,
		BtnStyle,
		IcoBoxMUI,
		LinkMUI,
		TextBoxMUI,
		DaysGridMUI,
		// DayRowMUI,
	};
};
