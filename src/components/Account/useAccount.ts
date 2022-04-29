import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useUserStore } from '@/hooks/useUserStore';
import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import {getLocationWindow} from '@/services/services';

export const useAccount = () => {
	const {router, pushTo} = useCustomRouter();

	const {
		getUser,
		isAdmin,
		user: {
			id
		}
	} = useUserStore();

	const {
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);

	const dispatch = useAppDispatch();

	// TODO: исправить - пока что захардкожено
	useEffect(() => {
		if(router.asPath.includes('info') && !router.asPath.includes('location')) {
			pushTo(router.asPath, {location: 'ger'});
		}
	}, [router.asPath]);

	useEffect(() => {
		if (isAdmin) {
			const data = {
				userId: router.query.userId ? router.query.userId : getLocationWindow('userId='),
				email: router.query.email,
			};
			if (data?.userId !== undefined) {
				if (+data.userId === adminSwitchIdToUser) return;
				dispatch(adminSlice.actions.changeAdminId(+data.userId));
				dispatch(orderWaitSlice.actions.defaultData());
			} else {
				dispatch(adminSlice.actions.changeAdminId(id));
			}
		}
	}, [router, isAdmin]);


	useEffect(() => {
		getUser();
	}, []);


	return {
		isAdmin,
	};
};
