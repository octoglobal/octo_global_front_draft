import { styled } from '@mui/material';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

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
			paddingTop: 20,
			margin: '0 auto',
		},
		[theme.breakpoints.down(376)]:{
			width: 350,
		},
		[theme.breakpoints.down(369)]:{
			width: 300,
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
	const DaysGridMUI = styled('div')(({theme}) => ({
		display: 'grid',
		gridTemplateAreas: 'day time',
		gridTemplateColumns: '178px 113px',
		gap: 15,
		[theme.breakpoints.down(600)]:{
			gridTemplateColumns: '168px 113px',
		}
	}));

	const ErrorMUI = styled('div')(() => ({
		fontSize: 12,
		color: 'crimson',
		
	}));
	const OkMUI = styled('div')(() => ({
		fontSize: 12,
		color: 'green',
		
	}));

	
	const EpmtyBoxMUI = styled('div')(() => ({
		height: '15px',
		alignSelf: 'end',
	}));
	

	const TextAreaContainerMUI = styled('div')(({theme}) => ({
		width: '100%',
		marginBottom: '10px',
		
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
					height: '183px !important',
					'& > .MuiOutlinedInput-root': {
						height: '183px !important ',
						padding: '13px 16px',
						'& > textArea': {
							height: '100% !important ',
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

	const ButtonMUI = styled(ButtonUI)(({theme})=>({
		backgroundColor: 'rgba(39, 77, 130, 0.8)',
		alignSelf: 'end',
		width: 135,
		[theme.breakpoints.down(391)]:{
			alignSelf: 'center',
		}
	}));

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
		ButtonMUI,
		IcoBoxMUI,
		LinkMUI,
		TextBoxMUI,
		DaysGridMUI,
		ErrorMUI,
		EpmtyBoxMUI,
		OkMUI,
	};
};
