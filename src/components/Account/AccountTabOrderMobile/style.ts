import { styled } from '@mui/material';

export const useAccountTabOrderMobileStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	}));

	const TextMUI = styled('button')(() => ({
		fontSize: '20px',
		border: 0,
		lineHeight: '24px',
		color: '#000000',
		fontWeight: 300,
		backgroundColor: 'transparent',
		margin: '0 !important',
	}));

	const DropDownWrapperMUI = styled('div')(() => ({
		'& > div': {
			'& > button': {
				padding: 0,
				margin: '0 0 0 5px !important',
			}
		}
	}));

	return {
		TextMUI,
		ContainerMUI,
		DropDownWrapperMUI,
	};
};
