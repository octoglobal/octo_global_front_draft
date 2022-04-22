import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';

export const useAccountOrdersWait = () => {
	const {
		page,
		pageLimit,
		orderWaitData,
	} = useAppSelector(state => state.orderWaitReducer);
	const {
		isAdmin
	} = useUserStore();
	const dispatch = useAppDispatch();


	const methods = useForm();

	const isDataLength = useMemo(() => (
		!!(orderWaitData.length && Array.isArray(orderWaitData))
	), [orderWaitData]);

	const dropDownItems = useMemo(() => {
		if (isAdmin) {
			return [];
		}
		return  [];
	}, [isAdmin]);


	useEffect(() => {
		if (page === 1) {
			dispatch(fetchOrderWaitData({page, pageLimit}));
		}
	}, []);

	return {
		methods,
		isDataLength,
		orderWaitData,
		dropDownItems,
	};
};
