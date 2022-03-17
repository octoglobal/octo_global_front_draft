import {combineReducers} from 'redux';
import {allReducers} from './allReducers';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers(allReducers);

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
