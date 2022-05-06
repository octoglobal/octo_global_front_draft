import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchOrdersSendData} from '@/reducers/orderSendSlice/asyncThunk/orderSendApi';
import {useUserStore} from '@/hooks/useUserStore';

export const useAccountOrdersSend = () => {

	const {
		isAdmin
	} = useUserStore();

	const {
		page,
		sendData,
		pageLimit,
		updateData,
	} = useAppSelector(state => state.orderSendReducer);

	const {
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);

	const dispatch = useAppDispatch();

	const isSendDataArray = useMemo(() => (
		!!(sendData.length && Array.isArray(sendData))
	), [sendData]);

	useEffect(() => {
		if (updateData) {
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

	return {
		sendData,
		isSendDataArray
	};
};
