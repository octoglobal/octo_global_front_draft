import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchDeleteOrders, fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';


const getSelectArray = (obj: object) => {
	const trueArray = [];
	for (const [key, value] of Object.entries(obj)) {
		if (value) trueArray.push(+key);
	}
	return trueArray;
};


export const useAccountOrdersWait = () => {
	const {
		isAdmin,
	} = useUserStore();
	const {
		adminSwitchIdToUser,
	} = useAppSelector(state => state.adminReducer);
	const {
		page,
		pageLimit,
		orderWaitData,
	} = useAppSelector(state => state.orderWaitReducer);

	const dispatch = useAppDispatch();
	const methods = useForm();
	const ordersArray = methods.watch();

	const isDataLength = useMemo(() => (
		!!(orderWaitData.length && Array.isArray(orderWaitData))
	), [orderWaitData]);

	const selectOrdersArray = useMemo(() => {
		if (Object.keys(ordersArray).length) {
			return getSelectArray(ordersArray);
		}
		return [];
	}, [ordersArray]);

	const isAdminMenu = useMemo(() => (
		selectOrdersArray.length >= 2
	), [selectOrdersArray]);

	const handleDeleteItems = () => {
		if (adminSwitchIdToUser) {
			dispatch(fetchDeleteOrders({
				userId: adminSwitchIdToUser,
				orderId: getSelectArray(methods.getValues()),
				ordersData: orderWaitData,
				successCallback: () => console.log(123),
			}));
		}
	};

	const buttonsData = useMemo(() => (
		[
			{name: 'Удалить', onClick: handleDeleteItems},
		]
	), []);

	useEffect(() => {
		if (page === 1) {
			if (!isAdmin) {
				dispatch(fetchOrderWaitData({page, pageLimit}));
				return;
			}
			if (adminSwitchIdToUser) {
				dispatch(fetchOrderWaitData(
					{
						page,
						pageLimit,
						userId: adminSwitchIdToUser
					}
				));
			}

		}
	}, []);

	return {
		isAdmin,
		methods,
		buttonsData,
		isAdminMenu,
		isDataLength,
		selectOrdersArray,
		orderWaitData,
	};
};
