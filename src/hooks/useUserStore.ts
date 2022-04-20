import {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';

import { fetchUserAutoLogin } from '@/store/reducers/userSlice/asyncActions/userApi';

export const useUserStore = () => {
	const {user} = useAppSelector(state => state.userReducer);
	const dispatch = useAppDispatch();
	const isAuth = useMemo(() => !!user.id, [user]);
	const isAdmin = useMemo(() => user.statusId === 9, [user]);

	// const fetchUser = () : void => {
	// 	console.log('fetchUser: ', isAuth, user.id);
	// 	if (!isAuth && !user.id) {
	// 		dispatch(fetchUserAutoLogin());
	// 	}
	// };

	const fetchUser = () : void => {
		console.log('fetchUser');
		dispatch(fetchUserAutoLogin());
		//
		// setTimeout(() => {
		// dispatch(fetchUserAutoLogin());
		// }, 2000);
		// }
	};

	// useEffect(() => {
	// 	// if (!isAuth && !user.id) {
	// 	setTimeout(() => {
	// 		dispatch(fetchUserAutoLogin());
	// 	}, 10000);
	// 	// }
	// }, [isAuth, user.id]);

	return {
		user,
		isAuth,
		isAdmin,
		getUser: fetchUser,
	};
};
