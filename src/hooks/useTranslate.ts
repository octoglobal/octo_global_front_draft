import {useAppDispatch, useAppSelector} from './useReduxHooks';
import {TranslateTypes, translateSlice} from '../store/reducers/translateSlice/translateSlice';

export const useTranslate = () => {

	const {language} = useAppSelector(state => state.translateReducer);
	const dispatch = useAppDispatch();

	const handleChangeLanguage = (language: TranslateTypes) => {
		return () => {
			dispatch(translateSlice.actions.changeWebsiteLanguage(language));
		};
	};

	return {
		language,
		handleChangeLanguage
	};
};
