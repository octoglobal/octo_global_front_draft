// import {StateType} from 'react';
import {AnyAction, CombinedState, combineReducers} from 'redux';
// import {allReducers} from './allReducers';
import {configureStore} from '@reduxjs/toolkit';

import translateReducer from '@/reducers/translateSlice/translateSlice';
import userReducer from '@/reducers/userSlice/userSlice';
import ordersReducer from '@/reducers//ordersSlice/ordersSlice';
import reviewsReducer from '@/reducers/reviewsSlice/reviewsSlice';

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

const reviewsReducerConfig = {
	key: 'reviews',
	storage: storage,
};

const appReducer = combineReducers({
	translateReducer: translateReducer,
	userReducer: userReducer,
	ordersReducer: ordersReducer,
	reviewsReducer: persistReducer(reviewsReducerConfig, reviewsReducer),
});

// const rootReducer = (state: typeof state.getState, action: AnyAction) => {
// 	return appReducer(state, action);
// }

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['reviews']
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER],
		},
	})
});

export const persistor = persistStore(store);

// export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
