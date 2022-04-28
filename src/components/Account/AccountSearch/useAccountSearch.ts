import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { fetchUsersInAdmin } from '@/reducers/adminSlice/asyncThunk/adminApi';
import {ISearchData} from '@/components/Shops/useShopPage';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';

export const useAccountSearch = () => {
	const {
		hints,
	} = useAppSelector(state => state.adminReducer);
	const dispatch = useAppDispatch();
	const methods = useForm();


	const onSubmit = async (data: {suggestionIndex: number} | ISearchData) => {
		if (Array.isArray(hints)) {
			const innerData = data as {suggestionIndex: number};
			const item = hints[innerData.suggestionIndex - 1];
			if (item.id) {
				await dispatch(orderWaitSlice.actions.defaultData());
				dispatch(adminSlice.actions.changeAdminId(item.id));
			}
		}
	};

	const handleChangeInputValue = (text: string) => {
		dispatch(fetchUsersInAdmin({text}));
	};

	return {
		hints,
		methods,
		onSubmit,
		handleChangeInputValue
	};
};
