import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {
	fetchMergeOrders,
	fetchOrderStockData,
	fetchPackageStockData, fetchUnMergePackage
} from '@/reducers/orderStockSlice/asynThunk/stockApi';
import {useUserStore} from '@/hooks/useUserStore';
import {useForm} from 'react-hook-form';
import {getSelectArray} from '@/services/services';
import { useCustomRouter } from '@/hooks/useCustomRouter';
import { orderStockSlice } from '@/reducers/orderStockSlice/orderStockSlice';

export const useAccountOrdersStock = () => {
	const {
		stockData,
		packageData,
		pageLimit,
		ordersEnd,
	} = useAppSelector(state => state.orderStockReducer);

	const {adminSwitchIdToUser} = useAppSelector(state => state.adminReducer);
	const {isAdmin, user: {id}} = useUserStore();
	const { router } = useCustomRouter();
	const methods = useForm();
	const ordersArray = methods.watch();
	const dispatch = useAppDispatch();


	const innerId = useMemo(() => (
		adminSwitchIdToUser ? adminSwitchIdToUser : id
	), [adminSwitchIdToUser]);

	const isDataLength = useMemo(() => (
		(Array.isArray(stockData) && stockData.length) || packageData.length
	), [stockData, packageData]);

	const selectOrdersArray = useMemo(() => {
		if (Object.keys(ordersArray).length) {
			return getSelectArray(ordersArray);
		}
		return [];
	}, [ordersArray]);

	const isVisibleMenu = useMemo(() => (
		selectOrdersArray.length >= 2
	), [selectOrdersArray]);

	const handleMergeOrders = () => {
		const url = isAdmin ? '/admin/packages' : '/user/package';
		dispatch(
			fetchMergeOrders({
				url,
				userId: innerId,
				orders: getSelectArray(methods.getValues())
			})
		).then(() => {
			methods.reset({});
		});
	};

	const handleUnMargePackage = (id: number | undefined) => {
		if (id) {
			const url = isAdmin ? '/admin/packages' : '/user/package';
			dispatch(fetchUnMergePackage({
				packageId: id,
				url: url,
				userId: innerId,
			}));
		}
	};

	const handleAddAddressPackage = (id: number | undefined) => {
		if (id) {
			router.push(`/account/orders/address?packageId=${id}`);
		}
	};

	const buttonsData = useMemo(() => (
		[
			{name: 'Объединить', onClick: handleMergeOrders},
		]
	), [innerId]);

	const packageDopDownData = useMemo(() => {
		if (!isAdmin) {
			return [
				{title: 'Разъединить', onClick: handleUnMargePackage},
				{title: 'Оформить', onClick: handleAddAddressPackage},
			];
		} else {
			return [
				{title: 'Удалить', onClick: () => console.log(123)},
				{title: 'Отказ', onClick: handleUnMargePackage},
			];
		}
	}, [innerId, isAdmin]);

	const isUserText = useMemo(() => (
		isAdmin ? '' : 'У вас есть возможность объединить все или несколько заказов в одну посылку.'
	), [isAdmin]);


	useEffect(() => {
		if (adminSwitchIdToUser) {
			dispatch(orderStockSlice.actions.resetSlice());
		}
	}, [adminSwitchIdToUser]);

	useEffect(() => {
		const url = isAdmin ? 'admin/user/orders/are_waiting' : '/user/orders/are_waiting';
		const userId = isAdmin ? adminSwitchIdToUser : null;
		if (isAdmin) {
			if (adminSwitchIdToUser) {
				if (ordersEnd) {
					dispatch(fetchPackageStockData({
						page: 1,
						page_limit: pageLimit,
						package: true,
						userId,
						url
					}));
				} else {
					dispatch(fetchOrderStockData({
						page: 1,
						page_limit: pageLimit,
						package: false,
						userId,
						url,
					}));
				}
			}
		} else {
			if (ordersEnd) {
				dispatch(fetchPackageStockData({
					page: 1,
					page_limit: pageLimit,
					package: true,
					userId,
					url
				}));
			} else {
				dispatch(fetchOrderStockData({
					page: 1,
					page_limit: pageLimit,
					package: false,
					userId,
					url,
				}));
			}
		}
	}, [ordersEnd, isAdmin, adminSwitchIdToUser]);

	return {
		methods,
		isAdmin,
		stockData,
		isVisibleMenu,
		buttonsData,
		isUserText,
		packageData,
		isDataLength,
		packageDopDownData
	};
};
