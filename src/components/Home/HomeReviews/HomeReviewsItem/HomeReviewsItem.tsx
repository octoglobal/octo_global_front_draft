import React, {FC, useEffect, useRef} from 'react';
import ReviewItem from '@/components/Review/ReviewItem/ReviewItem';
import {useHomeReviewsStyles} from '@/components/Home/HomeReviews/style';
import {IReviewsModel} from '@/models/IReviewsModel';
import gsap from 'gsap';

interface IHomeReviewsItemProps {
	review: IReviewsModel
}

const HomeReviewsItem: FC<IHomeReviewsItemProps> = ({review}) => {

	const revReviewsItem = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const element = revReviewsItem.current;
			gsap.fromTo(element, {
				opacity: 0,
				transform: 'translateY(100px)'
			}, {
				opacity: 1,
				transform: 'translateY(0px)',
				scrollTrigger: {
					trigger: element,
					start: '-100% 65%',
					markers: false,
				}
			});
		}
	}, []);

	return (
		<ItemMUI ref={revReviewsItem}>
			<ReviewItem
				{...review}
			/>
		</ItemMUI>
	);
};

const {
	ItemMUI,
} = useHomeReviewsStyles();

export default React.memo(HomeReviewsItem);
