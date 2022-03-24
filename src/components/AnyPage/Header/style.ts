import {styled} from '@mui/material';

export const useHeaderStyle = () => {

	const HeaderWrapperUI = styled('header')(() => ({
		height: '61px',
		width: '100%',
		padding: '12px 76px 12px 170px',

		background: '#FFFFFF',
		// opacity: '0.1',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}));

	const HeaderNavUI = styled('nav')(() => ({
		width: '70%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
	}));

	const OctoIconsUI = styled('span')(() => ({
		width: '30%',

		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		'& svg': {
			cursor: 'pointer',
		},

		'& svg:first-child': {
			marginRight: '6px',
		}

		// color: '#234A82',
		// fill: '#234A82',
	}));

	const UserWrapperUI = styled('div')(() => ({
		// height: '28px',
		// width: '28px',

		'& span, .MuiAvatar-root': {
			height: '28px',
			width: '28px',
		}
	}));

	const ButtonLoginUI = {
		width: '95px',
		height: '38px',

		padding: '0',
		margin: '0',
	};

	return {
		HeaderWrapperUI,
		HeaderNavUI,
		OctoIconsUI,
		UserWrapperUI,
		ButtonLoginUI
	};
};
