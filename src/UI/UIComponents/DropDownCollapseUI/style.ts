import {Button, Collapse, styled} from '@mui/material';

export const useDropDownCollapseUIStyles = () => {

	const ContainerMUI = styled('div')(() => ({

	}));

	const TitleContainerMUI = styled(Button)(() => ({
		display: 'flex',
		alignItems: 'center',
		textTransform: 'none',
		border: 0,
		padding: 0,
	}));

	const CollapseTitleMUI = styled('div')(() => ({
		fontSize: '20px',
		lineHeight: '26px',
		fontWeight: 400,
		color: '#000000',
	}));

	const CollapseIconMUI = styled('div')(() => ({
		width: '30px',
		height: '20px',
		marginLeft: '8px',
		transition: '.2s all linear',
	}));

	const CollapseListMUI = styled(Collapse)(() => ({
		'& div.MuiCollapse-wrapperInner': {
			marginTop: '15px',
			'& > *:last-child': {
				marginBottom: '0px',
			}
		}
	}));

	return {
		ContainerMUI,
		CollapseListMUI,
		CollapseIconMUI,
		CollapseTitleMUI,
		TitleContainerMUI,
	};
};
