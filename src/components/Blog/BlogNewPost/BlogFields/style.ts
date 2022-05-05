import {Collapse, styled} from '@mui/material';

export const useBlogFieldsStyles = () => {

	const ContainerMUI = styled('section')(({theme}) => ({
		marginBottom: '30px',
		[theme.breakpoints.down(769)]: {
			marginBottom: '20px'
		}
	}));

	const CollapseMUI = styled(Collapse)(() => ({

	}));

	const FormMUI = styled('form')(() => ({

	}));

	const ButtonContainerMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'flex-end',
		'& > button': {
			maxWidth: '135px',
			height: '32px',			
			marginBottom: 0,
		}
	}));

	const WrapperMUI = styled('div')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		margin: '24px auto 27px',
		maxWidth: '1118px',
		'& > *:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.down(769)]: {
			flexDirection: 'column',
			margin: '15px auto 0px',
		}
	}));

	return {
		FormMUI,
		WrapperMUI,
		CollapseMUI,
		ContainerMUI,
		ButtonContainerMUI
	};
};
