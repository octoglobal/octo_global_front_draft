import { styled } from '@mui/material';

export const useAccountTabOrderMobileStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	}));

	const TextMUI = styled('button', {
		shouldForwardProp: (prop) => prop !== 'active',
	})<{active?: boolean}>(({active, theme}) => ({
		fontSize: '24px',
		border: 0,
		lineHeight: '28px',
		color: '#000000',
		fontWeight: active ? 400 : 300,
		backgroundColor: 'transparent',
		margin: '0 !important',

		[theme.breakpoints.down(500)]: {
			fontSize: '16px',
			lineHeight: '19px',
		}
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
