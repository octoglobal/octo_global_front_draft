import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useUserStore } from '@/hooks/useUserStore';
import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import {getLocationWindow} from '@/services/services';
import {fetchUserAdmin} from '@/reducers/adminSlice/asyncThunk/adminApi';

export const useAccount = () => {
	const {router} = useCustomRouter();

	const {
		getUser,
		isAdmin,
	} = useUserStore();

	const {
		adminSwitchIdToUser,
		adminSwitchUserModel,
	} = useAppSelector(state => state.adminReducer);

	const dispatch = useAppDispatch();

	// // TODO: исправить - пока что захардкожено
	// useEffect(() => {
	// 	if(router.asPath.includes('info') && !router.asPath.includes('location')) {
	// 		pushTo(router.asPath, {location: 'ger'});
	// 	}
	// }, [router.asPath]);

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
			}
		}
	}, [router, isAdmin]);

	useEffect(() => {
		if (adminSwitchIdToUser) {
			dispatch(fetchUserAdmin({userId: adminSwitchIdToUser}));
		}
	}, [adminSwitchIdToUser]);

	useEffect(() => {
		getUser();
	}, []);


	return {
		isAdmin,
		adminSwitchIdToUser,
		adminSwitchUserModel
	};
};
