import { styled } from '@mui/material';

export const useBlogTextFieldStyles = () => {

	const TextFieldContainerMUI = styled('div')(() => ({
		marginBottom: '27px',
	}));

	return {
		TextFieldContainerMUI
	};
};
