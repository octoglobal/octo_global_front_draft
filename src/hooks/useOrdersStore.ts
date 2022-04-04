import {useMemo, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {fetchOrdersAndPackages} from '@/reducers/ordersSlice/asyncActions/orderApi';

export const useOrdersStore = () => {

	const {orders} = useAppSelector(state => state.ordersReducer);
	const dispatch = useAppDispatch();

	const hasOrders = useMemo(() => !orders?.length, [orders]);

	const fetchOrders = () : void => {
		dispatch(fetchOrdersAndPackages());
	};

	// useEffect(() => {
	// 	fetchOrders();
	// }, []);

	return {
		orders,
		hasOrders,
		getOrders: fetchOrders,
	};
};
