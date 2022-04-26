import { styled } from '@mui/material';

export const useOrderStatusModalStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginTop: '25px',
		width: '100%',
		maxWidth: '552px',
		margin: '25px auto',
	}));

	const FormMUI = styled('form')(() => ({
	}));

	const TextFieldContainerMUI = styled('div')(() => ({
		marginBottom: '16px',
		width: '100%',
		margin: '0 auto 16px',
		'& > div': {
			'& > div.MuiFormControl-root': {
				backgroundColor: '#F1F4F9',
			}
		}
	}));

	const DialogSx = {
		'& > div': {
			'& > div': {
				padding: '0 !important',
				minHeight: '410px !important',
			}
		}
	};

	const DropDownContainerMUI = styled('div')(() => ({
		paddingLeft: '20px',
	}));

	return {
		FormMUI,
		DialogSx,
		ContainerMUI,
		TextFieldContainerMUI,
		DropDownContainerMUI,
	};
};
