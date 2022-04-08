import {styled} from '@mui/material';

export const useReviewPaginationStyle = () => {

	const PaginationContainerMUI = styled('div')(() => ({
		// border: '1px solid red',
	}));

	const TextNextPaginationMUI = styled('span')(() => ({
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#000000',

		cursor: 'pointer',
	}));

	const NavigationItemMUI = styled('div')(() => ({
		display: 'flex',
		alignItems: 'center',

		// marginRight: '5px',
	}));

	// const BaseCellPagination = styled('div')(() => ({
	// 	border: '1px solid red',
	// }));

	const BaseCellPagination = {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',
		color:' #000000',

		border: 'none',
	};

	// const SelectedCellPagination = styled('div')(() => ({
	// 	border: '1px solid red',
	// }));

	const SelectedCellPagination = {
		width: '45px',
		height: '45px',
		backgroundColor: '#274D82 !important',

		// border: '1px solid blue',

		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '28px',
		color: '#FFFFFF',
	};

	return {
		PaginationContainerMUI,
		BaseCellPagination,
		SelectedCellPagination,
		TextNextPaginationMUI,
		NavigationItemMUI
	};
};
