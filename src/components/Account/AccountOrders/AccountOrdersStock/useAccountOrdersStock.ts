import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchOrderStockData} from '@/reducers/orderStockSlice/asynThunk/stockApi';
import {useUserStore} from '@/hooks/useUserStore';
import {useForm} from 'react-hook-form';
import {getSelectArray} from '@/services/services';

export const useAccountOrdersStock = () => {
	const {
		page,
		stockData,
		pageLimit,
		packageFetch,
	} = useAppSelector(state => state.orderStockReducer);

	const {adminSwitchIdToUser} = useAppSelector(state => state.adminReducer);
	const {isAdmin, user: {id}} = useUserStore();
	const methods = useForm();
	const ordersArray = methods.watch();
	const dispatch = useAppDispatch();


	const innerId = useMemo(() => (
		adminSwitchIdToUser ? adminSwitchIdToUser : id
	), [adminSwitchIdToUser]);

	const isDataLength = useMemo(() => (
		Array.isArray(stockData) && stockData.length
	), [stockData]);

	const selectOrdersArray = useMemo(() => {
		if (Object.keys(ordersArray).length) {
			return getSelectArray(ordersArray);
		}
		return [];
	}, [ordersArray]);

	const isVisibleMenu = useMemo(() => (
		selectOrdersArray.length >= 2
	), [selectOrdersArray]);

	const buttonsData = useMemo(() => (
		[
			{name: 'Объединить', onClick: () => console.log(3)},
		]
	), [innerId]);

	const isUserText = useMemo(() => (
		isAdmin ? '' : 'У вас есть возможность объединить все или несколько заказов в одну посылку.'
	), [isAdmin]);


	useEffect(() => {
		dispatch(fetchOrderStockData({
			page,
			page_limit: pageLimit,
			package: packageFetch
		}));
	}, []);

	return {
		methods,
		isAdmin,
		stockData,
		isVisibleMenu,
		buttonsData,
		isUserText,
		isDataLength
	};
};
