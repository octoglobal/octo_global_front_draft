import { padding } from '@mui/system';
import {styled} from '@mui/material';




export const useEuroExchangeStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
				
	}));
	
	const BlockWrap = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',
		marginBottom: 12,		
	}));
	const ParagraphMUI = styled('p')(() => ({
		fontSize: 20,
		fontWeight: 300,
		
	}));
	const LabelMUI = styled('label')(() => ({
		fontSize: 20,
		fontWeight: 300,
		marginRight: 5,
		
	}));
	const FormMUI = styled('form')(() => ({
		display: 'flex',
		flexDirection: 'column',		
		alignItems: 'center'
		
	}));
	const FormButtonUI = {
		width: '107px',
		height: '32px',
		backgroundColor: 'rgba(39, 77, 130, 0.8)'
	};
	const IcoMUI = styled('div')(() => ({
		display: 'flex'
		
	}));
	const TextFieldEuroMUI = styled('div')(() => ({
		display: 'flex',
		width: 74,
		height: 27,		
		alignItems:'cneter',
		justifyContent: 'center',		
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
		
	}));
	return {
		ContainerMUI,
		ParagraphMUI,
		LabelMUI,
		FormMUI,
		FormButtonUI,
		IcoMUI,
		TextFieldEuroMUI,
		BlockWrap,
		InfoBlockMUI
	};
};
