import {useEffect, useMemo, useState} from 'react';
import {IReviewsModel} from '@/models/IReviewsModel';
import {octoAxios} from '@/lib/http';
import {IReviewsGet} from '@/reducers/reviewsSlice/reviewsSlice';

export const useHomeReviews = () => {
	const [reviewsData, setReviewsData] = useState<IReviewsModel[]>();

	const isReviewsDataArray = useMemo(() => (
		!!(reviewsData?.length && Array.isArray(reviewsData))
	), [reviewsData]);


	useEffect(() => {
		try {
			octoAxios.get<IReviewsGet>('/reviews?page=1&page_limit=4')
				.then(response => {
					const reviewsRes = response.data.reviews;
					if (reviewsRes.length) {
						setReviewsData(reviewsRes);
					}
				});
		} catch (e) {
			throw new Error('Error fetch reviews data');
		}
	}, []);

	return {
		reviewsData,
		isReviewsDataArray
	};
};
