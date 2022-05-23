import React, {FC} from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import {useReviewListStyle} from '@/components/Review/ReviewsList/style';
import {useReviewsStore} from '@/hooks/useReviewsStore';
import {useReviewsList} from '@/components/Review/ReviewsList/useReviewsList';

interface IReviewsListProps {
	isMobile: boolean
}

const ReviewsList: FC<IReviewsListProps> = ({isMobile}) => {
	const {
		reviews
	} = useReviewsStore();

	const {
		listRef,
		onScroll,
		containerRef
	} = useReviewsList();

	return (
		<ReviewsWrappMUI
			ref={containerRef}
			onScroll={onScroll}>
			{!isMobile ? (
				<ReviewsContentMUI>
					<ReviewBlockMUI>
					
						{reviews.slice(0, 3).map((item, index) => (
							<ReviewItem
								key={`${item.createdTime}${index}${item.userName}`}
								text={item.text}
								userName={item.userName}
								createdTime={item.createdTime}
								id={item.id}
							/>
						))}
					</ReviewBlockMUI>
					<ReviewBlockMUI>
						{reviews.slice(3, 6).map((item, index) => (
							<ReviewItem
								key={`${item.createdTime}${index}${item.userName}`}
								text={item.text}
								userName={item.userName}
								createdTime={item.createdTime}
								id={item.id}
							/>
						))}
					</ReviewBlockMUI>
				</ReviewsContentMUI>
			) : (
				<ReviewBlockMUI ref={listRef}>
					
					{reviews.map((item, index) => (
						<ReviewItem
							key={`${item.createdTime}${index}${item.userName}`}
							text={item.text}
							userName={item.userName}
							createdTime={item.createdTime}
							id={item.id}
						/>
					))}
				</ReviewBlockMUI>
			)}
		</ReviewsWrappMUI>
	);
};

export default React.memo(ReviewsList);

const {
	ReviewsWrappMUI,
	ReviewsContentMUI,
	ReviewBlockMUI
} = useReviewListStyle();



//TODO: умная сортировка - большие сначала, мелкие снизу и делим на 2 массива, чтобы было одинаково
// const copyReviews : IReviewItem[] = [...reviews];
//
// const sortedArray = useMemo(
// 	() => copyReviews.sort((a : { text: string }, b : { text: string }) => String(a.text) - String(b.text)),
// 	[copyReviews]
// );
//
// const sortedArrays = useMemo(
// 	() => {
// 		const arrA = [];
// 		const arrB = [];
// 		sortedArray.map((it, i) => {
// 			if (Number.isInteger(i / 2)) {
// 				arrA.push(it);
// 			} else {
// 				arrB.push(it);
// 			}
// 		});
// 		return [[...arrA], [...arrB]];
// 	}
// );
