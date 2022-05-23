import {IReviewsModel} from '@/models/IReviewsModel';
import {createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {fetchAddReviewsMobile, fetchMoreReviews, fetchReviews,fetchDeleteReview} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';

export interface IReviewsSlice {
	reviews: IReviewsModel[] | [],
	pagesCount: number,
	pagesGet: number,
	pagesCountFront: number,
	limitShow: number,
	currentPage: number,
	updateReviews: boolean,
	reviewsEnd: boolean,
	isNewReviewsMobile: boolean,
}

export interface IReviewsGet {
	reviews: IReviewsModel[] | [],
	pages_count: number,
}

interface IReviewsGetMore {
	reviews: IReviewsModel[] | [],
	reviewsEnd: boolean
}

const initialState: IReviewsSlice = {
	reviews: [],
	pagesGet: 1,
	pagesCount: 1,
	pagesCountFront: 1,
	limitShow: 6,
	currentPage: 1,
	updateReviews: false,
	reviewsEnd: false,
	isNewReviewsMobile: false
};

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		reviewsReset: (state) => {
			state.reviews = [];
			state.pagesGet = 1;
			state.pagesCount = 1;
			state.pagesCountFront = 1;

			state.limitShow = 6;
			state.currentPage = 1;
		},
		updateReviews: (state) => {
			state.updateReviews = true;
		},
		changeNewReviewsMobile: (state) => {
			state.isNewReviewsMobile = false;
		},
		deleteReview: (state, action)=>{
			state.reviews = state.reviews.filter((item) => {
				return item.id !== action.payload;
			  });
		},
	},
	extraReducers: {
		[fetchReviews.fulfilled.type]: (state, data: PayloadAction<IReviewsGet>) => {
			if (state.pagesGet) {
				if (data.payload.pages_count) {
					state.pagesCount = data.payload.pages_count;
					state.pagesCountFront = data.payload.pages_count;

					if (data.payload.reviews.length === 6) state.pagesGet += 1;
				}
			}
			state.reviews = [...data.payload.reviews];
		},
		[fetchMoreReviews.fulfilled.type]: (state, data: PayloadAction<IReviewsGetMore>) => {
			state.currentPage += 1;
			state.reviews = [ ...state.reviews, ...data.payload.reviews];
			state.updateReviews = false;
			state.reviewsEnd = data.payload.reviewsEnd;
			state.isNewReviewsMobile = false;
		},
		[fetchAddReviewsMobile.fulfilled.type]: (state, data: PayloadAction<IReviewsModel>) => {
			state.updateReviews = false;
			state.isNewReviewsMobile = true;
			state.reviews = [ data.payload, ...state.reviews];
		},
	}
});

export const {reviewsReset, setCurrentPage, deleteReview} = reviewsSlice.actions;

export default reviewsSlice.reducer;
