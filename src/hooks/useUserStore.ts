import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';

export const useUserStore = () => {
	const {user} = useAppSelector(state => state.userReducer);
	const dispatch = useAppDispatch();
	const isAuth = useMemo(() => !!user.id, [user]);

	useEffect(() => {
		if (!isAuth && !user.id) {
			dispatch(fetchUserAutoLogin());
		}
	}, [user.id]);

	return {
		user,
		isAuth
	};
};
