import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchDeleteOrders, fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {getSelectArray} from '@/services/services';


export const useAccountOrdersWait = () => {
	const {
		isAdmin,
		user: {
			id
		}
	} = useUserStore();

	const {
		router
	} = useCustomRouter();

	const {
		adminSwitchIdToUser,
	} = useAppSelector(state => state.adminReducer);

	const {
		page,
		pageLimit,
		orderWaitData,
	} = useAppSelector(state => state.orderWaitReducer);

	const innerId = useMemo(() => (
	 adminSwitchIdToUser ? adminSwitchIdToUser : id
	), [adminSwitchIdToUser]);


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
		if (innerId) {
			dispatch(fetchDeleteOrders({
				userId: innerId,
				orderId: getSelectArray(methods.getValues()),
				ordersData: orderWaitData,
				successCallback: () =>methods.reset({}),
			}));
		}
	};

	const buttonsData = useMemo(() => (
		[
			{name: 'Удалить', onClick: handleDeleteItems},
		]
	), [innerId]);

	const getAdminUserData = (id: number) => {
		dispatch(fetchOrderWaitData(
			{
				page,
				pageLimit,
				userId: id,
			}
		));
	};

	useEffect(() => {
		if (page === 1) {
			if (!isAdmin) {
				dispatch(fetchOrderWaitData({page, pageLimit}));
			}
			if (isAdmin) {
				if (adminSwitchIdToUser) {
					getAdminUserData(adminSwitchIdToUser);
				}
			}
		}
	}, [adminSwitchIdToUser, page, router]);

	useEffect(() => {
		methods.reset({});
	}, [router]);

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
