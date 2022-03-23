import {styled} from '@mui/material';

export const useHeaderStyle = () => {

	const HeaderWrapperUI = styled('header')(() => ({
		height: '61px',
		width: '100%',

		background: '#FFFFFF',
		// opacity: '0.1',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.35)',

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	}));

	const OctoIconsUI = styled('span')(() => ({
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		// color: '#234A82',
		// fill: '#234A82',
	}));

	const UserWrapperUI = styled('div')(() => ({
		height: '28px',
		width: '28px',

		'& span, .MuiAvatar-root': {
			height: '28px',
			width: '28px',
		}
	}));

	return {
		HeaderWrapperUI,
		OctoIconsUI,
		UserWrapperUI
	};
};
