import React from 'react';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import {useHomeReviewsStyles} from '@/components/Home/HomeReviews/style';
import Container from '@/components/Container/Container';
import LinkButtonUI from '../../../UI/UIComponents/LinkButtonUI/LinkButton';
import {useHomeReviews} from '@/components/Home/HomeReviews/useHomeReviews';
import ReviewItem from '@/components/Review/ReviewItem/ReviewItem';

const HomeReviews = () => {

	const {
		reviewsData,
		isReviewsDataArray
	} = useHomeReviews();

	return (
		<Container>
			<HomeSectionTitle
				title='Отзывы'
			/>
			<WrapperMUI>
				{isReviewsDataArray && (
					<ListMUI>
						{reviewsData?.map((review, index) => (
							<ItemMUI
								key={`${review.text}${review.userName}${index}`}
							>
								<ReviewItem
									{...review}
								/>
							</ItemMUI>
						))}
					</ListMUI>
				)}
				<LinkButtonUI href='/reviews'>
					Все отзывы
				</LinkButtonUI>
			</WrapperMUI>
		</Container>
	);
};

const {
	ListMUI,
	ItemMUI,
	WrapperMUI
} = useHomeReviewsStyles();

export default React.memo(HomeReviews);
