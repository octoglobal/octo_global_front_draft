import React, {FC, useMemo} from 'react';

import {Pagination, PaginationItem, PaginationItemProps, PaginationProps} from '@mui/material';
import Arrow_Black_Right from '../../../UI/UIIcon/Arrow_Black_Right.svg';

import {useReviewPaginationStyle} from './style';

const NextArrow = () => {
	return (
		<>
			Дальше&nbsp;&nbsp;
			<Arrow_Black_Right/>
		</>
	);
};
const NextPaginationButton: FC<PaginationItemProps> = (props) => {

	const {
		BaseCellPagination,
		SelectedCellPagination,
		NavigationItemMUI
	} = useReviewPaginationStyle();

	const {selected} = props;

	const CellPaginationClass = useMemo(
		() => selected ? SelectedCellPagination : BaseCellPagination,
		[selected]
	);



	return (
		<NavigationItemMUI>
			<PaginationItem
				{...props}
				sx={{
					...CellPaginationClass
				}}
				components={{
					next: NextArrow
				}}
			/>
			{/*{page === 10 && page !== 9 ? (*/}
			{/*	<TextNextPaginationMUI onClick={onClick}>Дальше</TextNextPaginationMUI>*/}
			{/*) : null}*/}
		</NavigationItemMUI>
	);
};

const CustomPagination : FC<PaginationProps> = (props) => {

	const {
		PaginationContainerMUI
	} = useReviewPaginationStyle();

	return (
		<PaginationContainerMUI>
			<Pagination
				// count={10}
				hidePrevButton
				// hideNextButton
				variant="outlined"
				shape="rounded"
				renderItem={(item) => (
					<NextPaginationButton {...item} />
				)}
				{...props}
			/>
		</PaginationContainerMUI>
	);
};

export default React.memo(CustomPagination);
