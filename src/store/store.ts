import {combineReducers} from 'redux';
import {allReducers} from './allReducers';
import {configureStore} from '@reduxjs/toolkit';

import translateReducer from '@/reducers/translateSlice/translateSlice';
import userReducer from '@/reducers/userSlice/userSlice';
import ordersReducer from '@/reducers//ordersSlice/ordersSlice';
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

const appReducer = combineReducers({
	translateReducer: translateReducer,
	userReducer: userReducer,
	ordersReducer: ordersReducer
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
}

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE, REGISTER],
		},
	})
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// export type AppStore = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch
