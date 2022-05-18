import {styled} from '@mui/material';
import { padding } from '@mui/system';



export const useEuroExchangeStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex'
	}));
	const ParagraphMUI = styled('p')(() => ({
		fontSize: 20,
		fontWeight: 300,
		
	}));
	const LabelMUI = styled('label')(() => ({
		fontSize: 20,
		fontWeight: 300,
		
	}));
	const FormMUI = styled('label')(() => ({
		display: 'flex'
		
	}));
	const FormButtonUI = {
		width: '107px',
		height: '32px',
		backgroundColor: 'rgba(39, 77, 130, 0.8)'
	};
	const IcoMUI = styled('div')(() => ({
		display: 'flex'
		
	}));

	return {
		ContainerMUI,
		ParagraphMUI,
		LabelMUI,
		FormMUI,
		FormButtonUI,
		IcoMUI,
	};
};
