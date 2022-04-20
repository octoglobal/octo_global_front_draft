import translateReducer from '@/reducers/translateSlice/translateSlice';
import userReducer from '@/reducers/userSlice/userSlice';
import ordersReducer from '@/reducers/ordersSlice/ordersSlice';
import reviewsReducer from '@/reducers/reviewsSlice/reviewsSlice';
import shopReducer from '@/reducers/shopsSlice/shopsSlice';
import swipeableDrawerSliceReducer from '@/reducers/swipeableDrawerSlice/swipeableDrawerSlice';
import blogReducer from '@/reducers/blogSlice/blogSlice';

export const allReducers = {
	translateReducer,
	userReducer,
	ordersReducer,
	reviewsReducer,
	shopReducer,
	blogReducer,
	swipeableDrawerSliceReducer,
};
