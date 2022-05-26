import {useEffect, useMemo,useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {
	fetchDeleteStockOrders,
	fetchMergeOrders,
	fetchOrderStockData,
	fetchPackageStockData, fetchUnMergePackage,
} from '@/reducers/orderStockSlice/asynThunk/stockApi';



import {useUserStore} from '@/hooks/useUserStore';
import {useForm} from 'react-hook-form';
import {getSelectArray, onScroll} from '@/services/services';
import { orderStockSlice } from '@/reducers/orderStockSlice/orderStockSlice';
import {useOrdersAccount} from '@/hooks/useOrdersAccount';

export const useAccountOrdersStock = () => {
	const {
		page,
		stockData,
		packageData,
		pageLimit,
		ordersEnd,
		packageEnd,
		updatePosts,
	} = useAppSelector(state => state.orderStockReducer);

	const {adminSwitchIdToUser} = useAppSelector(state => state.adminReducer);
	const {isAdmin, user: {id}} = useUserStore();
	const methods = useForm();
	const ordersArray = methods.watch();
	const dispatch = useAppDispatch();
	const {
		handlePushOrdersAddress
	} = useOrdersAccount();

	const [isModalOpen, setIsModalOpen] = useState(false);

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

	const isVisiblePlaceholder = useMemo(() => (
		packageEnd && ordersEnd && !stockData?.length && !packageData?.length
	), [packageEnd, ordersEnd, stockData, packageData]);


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
			const response = dispatch(fetchUnMergePackage({
				packageId: id,
				url: url,
				userId: innerId,
			}));

			return response;
		}
	};

	const handleAddAddressPackage = (id: number | undefined) => {
		if (id) {
			handlePushOrdersAddress(id);
		}
	};

	const handleDeleteItems = (forDel?:boolean) => {
		
		if (forDel){		
			if (innerId) {
				
				dispatch(fetchDeleteStockOrders({
					userId: innerId,
					orderId: getSelectArray(methods.getValues()),
					ordersData: stockData,
					successCallback: () =>methods.reset({}),
				}));
				setIsModalOpen(false);
			}
		} else {		
			if (isModalOpen){
				setIsModalOpen(false);
			} else {
				setIsModalOpen(true);
			}
		}
		
	};


	
	const buttonsData = useMemo(() => (
		[
			{name: 'Удалить', onClick: handleDeleteItems,isModalOpen:isModalOpen ,  message: 'Вы точно хотите удалать заказы?'},
			{name: 'Объединить', onClick: handleMergeOrders},
		]
	), [innerId,isModalOpen]);

	const packageDopDownData = useMemo(() => {
		if (!isAdmin) {
			return [
				{title: 'Разъединить', onClick: handleUnMargePackage},
				{title: 'Оформить', onClick: handleAddAddressPackage},
			];
		} else {
			return [
				{title: 'Разъединить', onClick: handleUnMargePackage},
				{title: 'Оформить', onClick: handleAddAddressPackage},
			];
		}
	}, [innerId, isAdmin]);

	const isUserText = useMemo(() => (
		isAdmin ? '' : 'У вас есть возможность объединить все или несколько заказов в одну посылку.'
	), [isAdmin]);

	const getStockData = () => {
		const url = isAdmin ? 'admin/user/orders/are_waiting' : '/user/orders/are_waiting';
		const userId = adminSwitchIdToUser;
		if (ordersEnd && !packageEnd) {
			dispatch(fetchPackageStockData({
				page: page,
				page_limit: pageLimit,
				package: true,
				userId,
				url
			}));
		}
		if (!ordersEnd) {
			dispatch(fetchOrderStockData({
				page: page,
				page_limit: pageLimit,
				package: false,
				userId,
				url,
			}));
		}
	};

	useEffect(() => {
		if (ordersEnd) {
			dispatch(orderStockSlice.actions.ordersEmptyInDatabase());
		}
	}, [ordersEnd]);

	useEffect(() => {
		if (updatePosts) {
			if (isAdmin && adminSwitchIdToUser) {
				getStockData();
			}
			if (!isAdmin) {
				getStockData();
			}
		}
	}, [adminSwitchIdToUser, updatePosts, ordersEnd, packageEnd]);


	useEffect(() => {
		window.addEventListener('scroll', (e) => onScroll(e,
			() => dispatch(orderStockSlice.actions.updatePost())));
		return () => {
			window.removeEventListener('scroll', (e) => onScroll(e,
				() => dispatch(orderStockSlice.actions.updatePost())));
		};
	}, []);

	return {
		methods,
		isAdmin,
		stockData,
		isVisibleMenu,
		buttonsData,
		isUserText,
		packageData,
		isDataLength,
		packageDopDownData,
		isVisiblePlaceholder,
	};
};
