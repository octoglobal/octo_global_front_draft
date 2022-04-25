import { styled } from '@mui/material';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

export const useOrderStatusModalStyles = () => {

	const FormMUI = styled('form')(() => ({
		marginTop: '25px',
		width: '100%',
	}));

	const TextFieldContainerMUI = styled('div')(() => ({
		marginBottom: '16px',
		width: '100%',
		maxWidth: '552px',
		margin: '0 auto 16px',
	}));

	const TextFieldMUI = styled(TextFieldUI)(() => ({
		marginBottom: '16px',
		width: '100%',
	}));

	return {
		FormMUI,
		TextFieldMUI,
		TextFieldContainerMUI,
	};
};
