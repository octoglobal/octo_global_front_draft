import {Link, styled} from '@mui/material';

export const useHomeShopsListItemStyles = () => {

	const ItemMUI = styled('div')(() => ({
		margin: '0 5px 5px 5px',
		transition: '.2s all linear',
		height: '100%',
		'&:hover': {
			transform: 'scale(1.3)',
			// margin: '15px 15px 15px 15px',
		},
	}));

	const LinkMUI = styled(Link)(() => ({
		// display: 'flex',
		// alignItems: 'center',
		// justifyContent: 'flex-end',
	}));

	const ContainerItemMUI = styled('li')(() => ({
		display: 'flex',
		listStyle: 'none',
		alignItems: 'center',
		justifyContent: 'flex-end',
	}));

	return {
		LinkMUI,
		ItemMUI,
		ContainerItemMUI
	};
};
