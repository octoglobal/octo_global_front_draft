import React, {FC, useMemo} from 'react';

import {Pagination, PaginationItem, PaginationItemProps} from '@mui/material';
import Arrow_Black_Right from '../../../UI/UIIcon/Arrow_Black_Right.svg';

import {useReviewPaginationStyle} from './style';

const NextPaginationButton: FC<PaginationItemProps> = (props) => {

	const {
		BaseCellPagination,
		SelectedCellPagination,
		TextNextPaginationMUI,
		NavigationItemMUI
	} = useReviewPaginationStyle();

	const {selected, page, onClick} = props;

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
					next: Arrow_Black_Right
				}}
			/>
			{/*TODO: поправить баг с двумя "дальше"*/}
			{page === 10 && (
				<TextNextPaginationMUI onClick={onClick}>Дальше</TextNextPaginationMUI>
			)}
		</NavigationItemMUI>
	);
};

const CustomPagination: FC = () => {

	const {
		PaginationContainerMUI
	} = useReviewPaginationStyle();

	return (
		<PaginationContainerMUI>
			<Pagination
				count={10}
				hidePrevButton
				variant="outlined"
				shape="rounded"
				// boundaryCount={3}
				renderItem={(item) => (
					<NextPaginationButton {...item} />
				)}
			/>
		</PaginationContainerMUI>
	);
};

export default React.memo(CustomPagination);
