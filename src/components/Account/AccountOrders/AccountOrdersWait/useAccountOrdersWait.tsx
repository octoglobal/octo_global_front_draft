import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchOrderWaitData} from '@/reducers/orderWaitSlice/asyncThunk/orderWaitApi';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';

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

	const isDataLength = useMemo(() => (
		!!(orderWaitData.length && Array.isArray(orderWaitData))
	), [orderWaitData]);

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
		isDataLength,
		orderWaitData,
	};
};
