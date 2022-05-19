import translateReducer from '@/reducers/translateSlice/translateSlice';
import userReducer from '@/reducers/userSlice/userSlice';
import reviewsReducer from '@/reducers/reviewsSlice/reviewsSlice';
import shopReducer from '@/reducers/shopsSlice/shopsSlice';
import swipeableDrawerSliceReducer from '@/reducers/swipeableDrawerSlice/swipeableDrawerSlice';
import blogReducer from '@/reducers/blogSlice/blogSlice';
import orderWaitReducer from '@/reducers/orderWaitSlice/orderWaitSlice';
import adminReducer from '@/reducers/adminSlice/adminSlice';
import orderStockReducer from '@/reducers/orderStockSlice/orderStockSlice';
import orderSendReducer from '@/reducers/orderSendSlice/orderSendSlice';
import paymentReducer from '@/reducers/paymentSlice/paymentSlice';
import euroSlice from '@/reducers/euroExchangeRate/eutoSlice';

export const allReducers = {
	userReducer,
	shopReducer,
	blogReducer,
	adminReducer,
	reviewsReducer,
	translateReducer,
	orderSendReducer,
	orderWaitReducer,
	orderStockReducer,
	paymentReducer,
	swipeableDrawerSliceReducer,
	euroSlice,
};
