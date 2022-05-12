import { styled } from '@mui/material';

export const useOrderStatusModalStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		marginTop: '25px',
		width: '100%',
		maxWidth: '269px',
		margin: '19px auto 30px',
	}));

	const FormMUI = styled('form')(() => ({
	}));

	const TextFieldContainerMUI = styled('div')(() => ({
		width: '100%',
		'& > div': {
			'& > div.MuiFormControl-root': {
				backgroundColor: '#F1F4F9',
			}
		}
	}));

	const DialogSx = {
		'& > div': {
			'& > div': {
				backgroundColor: '#F1F4F9',
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
