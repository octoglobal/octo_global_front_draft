import {IReviewsModel} from '@/models/IReviewsModel';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchReviews} from '@/reducers/reviewsSlice/asyncActions/reviewsApi';

export interface IReviewsSlice {
	reviews: IReviewsModel[] | [],
	pagesCount: number,
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

const initialState : IReviewsSlice = {
	reviews: [],
	pagesGet: 1,
	pagesIndex: 3,
	pagesCount: 1,

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
			// console.log('setCurrentPage: ', action.payload);
			state.currentPage = action.payload;
		},
		setIntervalShow: (state, action) => {
			const aP = action.payload;
			// console.log('aP: ', aP);
			state.startShow = aP * state.limitShow;
			state.endShow = (aP + 1) * state.endIndex;
		}
	},
	extraReducers: {
		[fetchReviews.fulfilled.type]: (state, data : PayloadAction<IReviewsGet>) => {
			console.log('reviewsSlice: ', data.payload);
			state.reviews = [...state.reviews, ...data.payload.reviews];
			if(data.payload.pages_count) {
				console.log('data.payload.pages_count не пустой');
				state.pagesCount = data.payload.pages_count;
				if(data.payload.reviews.length === 23) {
					state.pagesGet += 1;
				}
			}
		}
	}
});

export const {setCurrentPage, setIntervalShow} = reviewsSlice.actions;

export default reviewsSlice.reducer;
