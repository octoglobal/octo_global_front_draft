import {Button, Collapse, Dialog, styled} from '@mui/material';

export const useTagsListStyles = () => {

	const ContainerMUI = styled('section')(({theme}) => ({
		marginTop: '14px',
		[theme.breakpoints.down(1025)]: {
			marginTop: '10px'
		}
	}));

	const ArrowContainerMUI = styled(Button)(() => ({
		width: '100%',
		maxWidth: '24px',
		minWidth: 'auto',
		height: '33px',
		margin: '0 auto',
		padding: 0,
		display: 'block',
	}));

	const ListMUI = styled('ul')(() => ({
		display: 'flex',
		flexWrap: 'wrap',
		paddingLeft: 0,
		minHeight: '150px',
		justifyContent: 'center',
	}));

	const CollapseMUI = styled(Collapse)(() => ({
		margin: '0 auto',
		maxWidth: '1122px',
		maxHeight: '216px',
		minHeight: '100px',
		backgroundColor: '#FFFFFF',
		borderRadius: '10px',
		boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.25)',
		// padding: '0px 0 3px 25px',
		padding: '0px 5px 3px',
		overflowY: 'scroll',
		position: 'absolute',
		zIndex: 10,
		// top: '-51px',
		top: 0,
		left: 0,
		'& > div': {
			paddingTop: '13px'
		}
	}));

	const ModalMUI = styled(Dialog)(() => ({
		zIndex: 5,
		'& > div': {
			backgroundColor: 'rgba(0, 0, 0, 0)',
		}
	}));

	return {
		ListMUI,
		ModalMUI,
		CollapseMUI,
		ContainerMUI,
		ArrowContainerMUI,
	};
};
