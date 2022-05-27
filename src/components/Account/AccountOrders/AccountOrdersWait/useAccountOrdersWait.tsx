import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo, useState} from 'react';
import {fetchDeleteOrders, fetchMiltiChangeStatus, fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
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


	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModaMovelOpen, setIsModalMoveOpen] = useState(false);


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

	const handleDeleteItems = (forDel?:boolean) => {
		
		if (forDel){		
			if (innerId) {
				dispatch(fetchDeleteOrders({
					userId: innerId,
					orderId: getSelectArray(methods.getValues()),
					ordersData: orderWaitData,
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

	const handleMoveItems = (forDel:boolean) => {
		
		if (forDel){		
			if (innerId) {					
				dispatch(fetchMiltiChangeStatus({
					userId: innerId,
					orderId: getSelectArray(methods.getValues()),
					ordersData: orderWaitData,
					successCallback: () =>methods.reset({}),
				}));
				setIsModalMoveOpen(false);
			}			
		} else {		
			if (isModaMovelOpen){
				setIsModalMoveOpen(false);
			} else {
				setIsModalMoveOpen(true);
			}
		}
		
	};
	const buttonsData = useMemo(() => (
		[
			{name: 'Удалить', onClick: handleDeleteItems, isModalOpen:isModalOpen, message: 'Вы точно хотите удалать заказы?' },
			{name: 'На склад', onClick: handleMoveItems, isModalOpen:isModaMovelOpen,message: 'Вы точно хотите переместить заказы?' },
		]
	), [innerId,isModalOpen, isModaMovelOpen]);

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
