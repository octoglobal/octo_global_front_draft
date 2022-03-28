import {styled, SwipeableDrawer} from '@mui/material';

export const useHeaderMobileStyle = () => {

	const HeaderMobileWrapperUI = styled('header')(() => ({
		padding: '15px'
	}));

	const NavMenuUI = styled('nav')(() => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}));

	const NavItemUI = styled('div')(() => ({
		cursor: 'pointer',
		'& span': {
			width: 'auto',
		},
	}));

	const SwipeableDrawerUI = styled(SwipeableDrawer)(() => ({
		'& .MuiPaper-root': {
			width: '320px',
			height: '93%',
			padding: '1.5em 1em',
			marginTop: '15%',

			background: '#FFFFFF',
			boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
			borderRadius: '0px 8px',
		}
	}));

	return {
		HeaderMobileWrapperUI,
		NavMenuUI,
		NavItemUI,
		SwipeableDrawerUI
	};
};
