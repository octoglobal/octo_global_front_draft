import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchOrdersSendData} from '@/reducers/orderSendSlice/asyncThunk/orderSendApi';
import {useUserStore} from '@/hooks/useUserStore';
import {onScroll} from '@/services/services';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import {orderSendSlice} from '@/reducers/orderSendSlice/orderSendSlice';

export const useAccountOrdersSend = () => {

	const {
		isAdmin
	} = useUserStore();

	const {
		page,
		sendData,
		pageLimit,
		updateData,
		sendDataEnd,
	} = useAppSelector(state => state.orderSendReducer);

	const {
		adminSwitchIdToUser,
	} = useAppSelector(state => state.adminReducer);

	const dispatch = useAppDispatch();

	const isSendDataArray = useMemo(() => (
		!!(sendData.length && Array.isArray(sendData))
	), [sendData]);

	useEffect(() => {
		if (updateData && !sendDataEnd) {
			if (isAdmin) {
				if (adminSwitchIdToUser) {
					dispatch(fetchOrdersSendData({
						url: '/admin/user/orders/sent',
						page: page,
						page_limit: pageLimit,
						userId: adminSwitchIdToUser
					}));
				}
			} else {
				dispatch(fetchOrdersSendData({
					url: '/user/orders/sent',
					page: page,
					page_limit: pageLimit,
					userId: 0,
				}));
			}
		}
	}, [isAdmin, adminSwitchIdToUser, updateData]);

	useEffect(() => {
		window.addEventListener('scroll', (e) => onScroll(e,
			() => dispatch(orderSendSlice.actions.updateData())));
		return () => {
			window.removeEventListener('scroll', (e) => onScroll(e,
				() => dispatch(orderWaitSlice.actions.updateData())));
		};
	}, []);

	return {
		isAdmin,
		sendData,
		sendDataEnd,
		isSendDataArray
	};
};
