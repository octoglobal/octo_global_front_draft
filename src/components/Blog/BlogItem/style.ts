import {Button, Collapse, styled} from '@mui/material';

export const useBlogItemStyles = () => {

	const ItemMUI = styled('li')(() => ({
		marginBottom: '5px',
		listStyle: 'none',
		borderBottom: '1px solid #C4C4C4',
	}));

	const WrapperMUI = styled('div')(() => ({
		maxWidth: '1114px',
		margin: '0 auto',
	}));

	const ItemTitleMUI = styled('h4')(({theme}) => ({
		wordWrap: 'break-word',
		fontSize: '24px',
		fontWeight: 400,
		lineHeight: '28px',
		margin: '30px 0 40px',
		color: '#000000',
		[theme.breakpoints.down(769)]: {
			margin: '15px 0',
		}
	}));

	const ButtonIconMUI = styled(Button)(() => ({
		display: 'block',
		width: '24px',
		height: '33px',
		padding: '0',
		border: 0,
		backgroundColor: 'transparent',
		minWidth: 'auto',
		margin: '0 auto 6px',
		textAlign: 'center',
	}));

	const ProductListMUI = styled('ul')(({theme}) => ({
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '15px',
		minHeight: '330px',
		'& > *:last-child': {
			marginRight: 0,
		},
		[theme.breakpoints.down(769)]: {
			minHeight: 'auto',
		}
	}));

	const CollapseDescMUI = styled(Collapse)(() => ({
	}));

	return {
		ItemMUI,
		WrapperMUI,
		ItemTitleMUI,
		ButtonIconMUI,
		ProductListMUI,
		CollapseDescMUI,
	};
};
