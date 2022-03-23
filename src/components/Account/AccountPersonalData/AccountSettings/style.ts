import {styled} from '@mui/material';

export const useAccountSettingsStyle = () => {

	const SettingsWrapperUI = styled('div')(() => ({
		width: '100%',
		height: '100%',
	}));

	const FormsWrapperBoxUI = styled('div')(() => ({
		width: '400px',
	}));

	const FormTableUI = styled('div')(() => ({
		// border: '1px solid green',
	}));

	const FormTableUserUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '26px',
	}));

	const UserAvatarUI = styled('div')(() => ({
		width: '39px',
		height: '39px',
		marginRight: '9px',
	}));

	const UserFIOUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'center',
		color: '#000000',
	}));

	const FormTableTextUI = styled('div')(() => ({
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '18px',
		lineHeight: '21px',
		textAlign: 'start',
		color: '#000000',

		width: '50%',
	}));

	const FormTableRowUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '26px',

		'& p': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '21px',
			textAlign: 'center',
			color: '#000000',
		},
	}));

	const FormTableRowLabelUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		'& p': {
			fontFamily: 'Roboto',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '18px',
			lineHeight: '21px',
			textAlign: 'center',
			color: '#000000',
		},

		'& svg': {
			marginLeft: '9px',
		}
	}));

	const FormTableEndUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginBottom: '26px',
	}));

	const FormButtonUI = {
		width: '135px',
		height: '32px',
	};

	const FormTextFieldUI = {
		width: '50%',
		height: '32px',
		textAlign: 'start',

		border: '1px solid #DFE4EC',
		boxSizing: 'border-box',
		boxShadow:' 0px 4px 4px rgba(0, 0, 0, 0.03)',

		'& label': {
			transform: 'translate(14px, 2px) scale(1)',
		},

		'& .MuiOutlinedInput-root': {
			'& input': {
				padding: '0px 14px',
			},

			'& fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
			'&:hover fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
			'&.Mui-focused fieldset': {
				border: 'none !important',
				boxShadow: 'none !important',
			},
		}
	};

	return {
		UserFIOUI,
		FormTableUI,
		UserAvatarUI,
		FormButtonUI,
		FormTextFieldUI,
		FormTableRowUI,
		FormTableEndUI,
		SettingsWrapperUI,
		FormTableUserUI,
		FormTableTextUI,
		FormsWrapperBoxUI,
		FormTableRowLabelUI,
	};
};
