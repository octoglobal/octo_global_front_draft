import translateReducer from '@/reducers/translateSlice/translateSlice';
import userReducer from '@/reducers/userSlice/userSlice';
import ordersReducer from '@/reducers/ordersSlice/ordersSlice';
import reviewsReducer from '@/reducers/reviewsSlice/reviewsSlice';
import shopReducer from '@/reducers/shopsSlice/shopsSlice';
import swipeableDrawerSliceReducer from '@/reducers/swipeableDrawerSlice/swipeableDrawerSlice';

export const allReducers = {
	translateReducer,
	userReducer,
	ordersReducer,
	reviewsReducer: reviewsReducer,
	shopReducer,
	swipeableDrawerSliceReducer,
};
