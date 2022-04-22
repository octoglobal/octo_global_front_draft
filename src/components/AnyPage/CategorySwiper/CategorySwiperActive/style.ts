import { Button, styled } from '@mui/material';

export const usCategorySwiperActiveStyle = () => {

	const ContainerMUI = styled('div')(() => ({
		display: 'flex',
		justifyContent: 'space-between',
	}));

	const ClearTagButtonMUI = styled(Button)(() => ({
		border: 0,
		textTransform: 'none',
		padding: 0,
		height: '16px',
		minWidth: '98px',
		justifyContent: 'flex-end',
		'& > p': {
			marginRight: 0,
		}
	}));

	const ListMUI = styled('ul')(({theme}) => ({
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: '11px',
		paddingLeft: '3px',
		[theme.breakpoints.down(1025)]: {
			marginBottom: '7px',
		}
	}));

	const EmptyListMUI = styled('ul')(() => ({
		height: '16px',
		width: '100%',
		marginBottom: '5px',
	}));

	return {
		ListMUI,
		EmptyListMUI,
		ContainerMUI,
		ClearTagButtonMUI
	};
};
