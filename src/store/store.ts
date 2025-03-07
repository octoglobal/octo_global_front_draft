import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import {allReducers} from '@/store/allReducers';

const appReducer = combineReducers({
	...allReducers,
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [
		'blogReducer',
		'shopReducer',
		'reviewsReducer',
		'adminReducer',
		'orderWaitReducer',
		'paymentReducer',
		'orderSendReducer',
		'orderStockReducer',
		'swipeableDrawerSliceReducer',
	],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, PERSIST, REHYDRATE, PAUSE, PURGE, REGISTER],
		},
	})
});

export const persistor = persistStore(store);

// export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
