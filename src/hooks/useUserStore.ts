import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchUserAutoLogin} from '@/reducers/userSlice/asyncActions/userApi';

export const useUserStore = () => {
	const {user} = useAppSelector(state => state.userReducer);
	const dispatch = useAppDispatch();
	const isAuth = useMemo(() => !!user.id, [user]);

	console.log(user);
	useEffect(() => {
		if (!isAuth) {
			dispatch(fetchUserAutoLogin());
		}
	}, []);

	return {
		user,
		isAuth
	};
};
