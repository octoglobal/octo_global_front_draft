import { Collapse, styled } from '@mui/material';

export const useCollapseInfoStyles = () => {

	const ContainerMUI = styled('div')(() => ({
		borderBottom: '1px solid #C4C4C4',
	}));

	const ContainerButtonMUI = styled('button')(({theme}) => ({
		border: 0,
		backgroundColor: 'transparent',
		padding: '25px 0',
		cursor: 'pointer',
		[theme.breakpoints.down(769)]: {
			padding: '15px 0',
		}
	}));


	const CollapseMUI = styled(Collapse)(() => ({
	}));

	const CollapseTitleMUI = styled('h3')(() => ({
		fontSize: '24px',
		transition: '.2s all linear',
		lineHeight: '28px',
		fontWeight: 400,
		color: '#274D82',
		textAlign: 'left',
	}));


	const CollapseDescMUI = styled('p')(({theme}) => ({
		paddingBottom: '25px',
		fontSize: '20px',
		lineHeight: '26px',
		fontWeight: 300,
		color: '#000000',
		whiteSpace: 'pre-line',
		[theme.breakpoints.down(769)]: {
			paddingBottom: '15px',
			fontSize: '16px',
			lineHeight: '20px',
		}
	}));

	return {
		CollapseMUI,
		ContainerMUI,
		CollapseDescMUI,
		CollapseTitleMUI,
		ContainerButtonMUI,
	};
};
