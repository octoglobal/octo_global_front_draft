
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { fetchUsersInAdmin } from '@/reducers/adminSlice/asyncThunk/adminApi';
import {ISearchData} from '@/components/Shops/useShopPage';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {getLocationWindow} from '@/services/services';

export const useAccountSearch = () => {	
	const {
		hints,
	} = useAppSelector(state => state.adminReducer);
	const {
		router
	} = useCustomRouter();
	const dispatch = useAppDispatch();
	const methods = useForm({
		defaultValues: {
			search: getLocationWindow('userEmail=')
		}
	});


	const onSubmit = async (data: {suggestionIndex: number} | ISearchData) => {
		if (Array.isArray(hints)) {
			const innerData = data as {suggestionIndex: number};
			const item = hints[innerData.suggestionIndex - 1];
			if (item?.id) {
				await dispatch(orderWaitSlice.actions.defaultData());
				dispatch(adminSlice.actions.changeAdminId(item.id));
				router.push(router.pathname, {query: {userId: item.id, userEmail: item.email}});
			}
		}
	};

	const handleChangeInputValue = (text: string) => {
		dispatch(fetchUsersInAdmin({text}));
	};
	const handleClearInputValue = () => {
		dispatch(adminSlice.actions.clearAdminHints());
	};
	return {
		hints,
		methods,
		onSubmit,
		handleChangeInputValue,
		handleClearInputValue
	};
};
