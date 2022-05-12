import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchDeleteOrders, fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {getSelectArray, onScroll} from '@/services/services';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';


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
		updateData,
		scrollEmpty,
		orderWaitData,
	} = useAppSelector(state => state.orderWaitReducer);

	const dispatch = useAppDispatch();
	const methods = useForm();
	const ordersArray = methods.watch();

	const innerId = useMemo(() => (
	 adminSwitchIdToUser ? adminSwitchIdToUser : id
	), [adminSwitchIdToUser]);

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

	const isVisibleCheckbox = useMemo(() => (
		orderWaitData.length > 1 && isAdmin
	), [orderWaitData, isAdmin]);

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
		window.addEventListener('scroll', (e) => onScroll(
			e,
			() => dispatch(orderWaitSlice.actions.updateData())
		));
		return () => {
			window.removeEventListener('scroll', (e) => onScroll(
				e,
				() => dispatch(orderWaitSlice.actions.updateData())
			));
		};
	}, []);

	useEffect(() => {
		if (updateData && !scrollEmpty) {
			if (!isAdmin) {
				dispatch(fetchOrderWaitData({page, pageLimit}));
			}
			if (isAdmin) {
				if (adminSwitchIdToUser) {
					getAdminUserData(adminSwitchIdToUser);
				}
			}
		}
	}, [adminSwitchIdToUser, updateData]);

	useEffect(() => {
		methods.reset({});
	}, [router]);

	return {
		isAdmin,
		methods,
		scrollEmpty,
		buttonsData,
		isAdminMenu,
		isDataLength,
		selectOrdersArray,
		orderWaitData,
		isVisibleCheckbox
	};
};
