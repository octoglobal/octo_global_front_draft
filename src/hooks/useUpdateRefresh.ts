import {useEffect, useState} from 'react';
import {fetchUserRefresh} from '@/reducers/userSlice/asyncActions/userApi';
import {useAppSelector} from '@/hooks/useReduxHooks';
import {useUserStore} from '@/hooks/useUserStore';

export const useUpdateRefresh = () => {
	const {
		isAuth,
		user
	} = useUserStore();
	const [newToken, setNewToken] = useState<boolean>(false);

	console.log(isAuth);

	const updateToken = () => {
		fetchUserRefresh()
			.then(response => {
				if (response.message === 'success') {
					setNewToken(true);
				}
				if (typeof response === 'number') {
					setNewToken(false);
				}
			})
			.catch(e => {
				console.log('updateToken, fetchUserRefresh: ', e);
			});
	};

	useEffect(() => {
		updateToken();
	}, []);

	useEffect(() => {
		if (isAuth && user?.id) {
			const interval = setInterval(() => {
				updateToken();
			}, 1500000);
			if (!isAuth) {
				clearInterval(interval);
			}
		}
	}, [isAuth]);


	return {
		newToken
	};
};
