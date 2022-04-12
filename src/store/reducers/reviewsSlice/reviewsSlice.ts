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
			// console.log('setCurrentPage: ', action.payload);
			state.currentPage = action.payload;
		},
		setIntervalShow: (state, action) => {
			const aP = action.payload;
			console.log('aP: ', aP);
			if (aP === 1) {
				state.startShow = 0;
				state.endShow = 6;
			} else {
				// console.log('startShow: ', aP * state.limitShow);
				// console.log('endShow: ', (aP + 1) * state.endIndex);

				// state.startShow = aP * state.limitShow;
				// state.endShow = (aP + 1) * state.endIndex;

				state.startShow = state.endIndex * (aP - 1);
				state.endShow = state.endIndex * aP;
			}
		}
	},
	extraReducers: {
		[fetchReviews.fulfilled.type]: (state, data: PayloadAction<IReviewsGet>) => {
			console.log('reviewsSlice: ', data.payload);
			// if(state.pagesGet) {
			console.log('data.payload.pages_count не пустой');
			console.log('data.payload.reviews.length: ', data.payload.reviews);
			console.log('data.payload.reviews.length: ', data.payload.reviews.length);
			state.pagesCount = data.payload.pages_count;
			if (data.payload.reviews.length === 24) {
				state.pagesGet += 1;
				state.reviews = [...state.reviews, ...data.payload.reviews];
				state.pagesCountFront = Math.ceil(data.payload.reviews.length / state.limitShow);
				console.log(Math.ceil(data.payload.reviews.length / state.limitShow));
			} else {
				state.reviews = data.payload.reviews;
				const reviewsLength = Math.ceil(data.payload.reviews.length / state.limitShow);
				console.log('reviewsLength: ', reviewsLength);
				state.pagesCountFront = reviewsLength;
				// console.log('reviewsLength: ', reviewsLength / state.limitShow);
				// if(reviewsLength / state.limitShow > state.pagesCount) {
				// 	state.pagesCount += 1;
				// }
			}
			// }
		}
	}
});

export const {setCurrentPage, setIntervalShow} = reviewsSlice.actions;

export default reviewsSlice.reducer;
