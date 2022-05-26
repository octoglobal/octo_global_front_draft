import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo, useState} from 'react';
import {fetchChangeStatus, fetchDeleteOrders, fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {useCustomRouter} from '@/hooks/useCustomRouter';
import {getSelectArray, onScroll} from '@/services/services';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import { octoAxios } from '@/lib/http';


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

		console.log('перемещение',orderWaitData);
		console.log('innerId',innerId);
		console.log('getSelectArray(methods.getValues())',getSelectArray(methods.getValues()));
		
		if (forDel){		
			if (innerId) {		
				
				const all =  orderWaitData;			
				const whatDelete = getSelectArray(methods.getValues());;	

				const result = [];
				for (let i = 0; i < all.length; i++) {
					if (whatDelete.indexOf(all[i].id) !== -1) {
				  		result.push(all[i]);
					}
				
				}
				

				console.log('result',result);

				for (let i = 0; i < result.length; i++) {
					
					try {
						octoAxios.post('/admin/orders', {
							userId: result[i].userId,
							track_number: +result[i].trackNumber,
							title: result[i].title,
							comment: result[i].comment,
							statusId: result[i].statusId+1,
						});
					} catch (error) {
						console.log('rrr');
					}
				}

				
					
					
				
				
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
