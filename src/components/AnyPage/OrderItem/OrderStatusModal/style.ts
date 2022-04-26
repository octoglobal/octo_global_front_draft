import { styled } from '@mui/material';

export const useOrderStatusModalStyles = () => {
	const FormMUI = styled('form')(() => ({
		marginTop: '25px',
		width: '100%',
		maxWidth: '552px',
		margin: '25px auto',
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
		// '& > div': {
		// 	'& > div': {
		// 		padding: 0,
		// 		// backgroundColor: 'red',
		// 	}
		// }
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
		TextFieldContainerMUI,
		DropDownContainerMUI,
	};
};
