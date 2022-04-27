import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { fetchUsersInAdmin } from '@/reducers/adminSlice/asyncThunk/adminApi';

export const useAccountSearch = () => {
	const {
		hints
	} = useAppSelector(state => state.adminReducer);
	const dispatch = useAppDispatch();
	const methods = useForm();

	const handleChangeInputValue = (text: string) => {
		dispatch(fetchUsersInAdmin({text}));
	};

	return {
		hints,
		methods,
		handleChangeInputValue
	};
};
