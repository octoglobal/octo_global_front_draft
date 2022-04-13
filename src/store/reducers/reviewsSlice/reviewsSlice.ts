import {IReviewsModel} from '@/models/IReviewsModel';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchReviews} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';

export interface IReviewsSlice {
	reviews: IReviewsModel[] | [],
	pagesCount: number,
	pagesGet: number,
	pagesCountFront: number,

	limitShow: number,
	currentPage: number,
}

export interface IReviewsGet {
	reviews: IReviewsModel[] | [],
	pages_count: number,
}

const initialState: IReviewsSlice = {
	reviews: [],
	pagesGet: 1,
	pagesCount: 1,
	pagesCountFront: 1,

	limitShow: 6,
	currentPage: 1,
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
		}
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
		}
	}
});

export const {reviewsReset, setCurrentPage} = reviewsSlice.actions;

export default reviewsSlice.reducer;
