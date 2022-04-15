import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TranslateTypes = 'RUS' | 'KAZ' | 'BLR'

interface ITranslateSlice {
    language: TranslateTypes
}

const initialState: ITranslateSlice = {
	language: 'RUS'
};

export const translateSlice = createSlice({
	name: 'language/slice',
	initialState,
	reducers: {
		changeWebsiteLanguage(state, action: PayloadAction<TranslateTypes>) {
			state.language = action.payload;
		}
	}
});

export default translateSlice.reducer;
