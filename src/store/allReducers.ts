import translateReducer from '@/reducers/translateSlice/translateSlice';
import userReducer from '@/reducers/userSlice/userSlice';
import reviewsReducer from '@/reducers/reviewsSlice/reviewsSlice';
import shopReducer from '@/reducers/shopsSlice/shopsSlice';
import swipeableDrawerSliceReducer from '@/reducers/swipeableDrawerSlice/swipeableDrawerSlice';
import blogReducer from '@/reducers/blogSlice/blogSlice';
import orderWaitReducer from '@/reducers/orderWaitSlice/orderWaitSlice';

export const allReducers = {
	userReducer,
	shopReducer,
	blogReducer,
	reviewsReducer,
	translateReducer,
	orderWaitReducer,
	swipeableDrawerSliceReducer,
};
