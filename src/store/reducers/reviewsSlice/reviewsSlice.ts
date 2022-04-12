import {IReviewsModel} from '@/models/IReviewsModel';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchReviews} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';

export interface IReviewsSlice {
	reviews: IReviewsModel[] | [],
	pagesCount: number,
	pagesCountFront: number,
	pagesGet: number,
	pagesIndex: number,
	limitShow: number,
	currentPage: number,
	startIndex: number,
	endIndex: number,
	startShow: number,
	endShow: number,
}

export interface IReviewsGet {
	reviews: IReviewsModel[] | [],
	pages_count: number,
}

const initialState: IReviewsSlice = {
	reviews: [],
	pagesGet: 1,
	pagesIndex: 3,
	pagesCount: 1,
	pagesCountFront: 1,

	limitShow: 6,
	currentPage: 1,

	startIndex: 0,
	endIndex: 6,
	startShow: 0,
	endShow: 6,
};

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setIntervalShow: (state, action) => {
			const aP = action.payload;
			if (aP === 1) {
				state.startShow = 0;
				state.endShow = 6;
			} else {
				state.startShow = state.endIndex * (aP - 1);
				state.endShow = state.endIndex * aP;
			}
		},
		reviewsReset: (state) => {
			state.reviews = [];
			state.pagesGet = 1;
			state.pagesIndex = 3;
			state.pagesCount = 1;
			state.pagesCountFront = 1;

			state.limitShow = 6;
			state.currentPage = 1;

			state.startIndex = 0;
			state.endIndex = 6;
			state.startShow = 0;
			state.endShow = 6;
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

export const {reviewsReset, setCurrentPage, setIntervalShow} = reviewsSlice.actions;

export default reviewsSlice.reducer;
