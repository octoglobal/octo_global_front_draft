import { useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {fetchUserAutoLogin} from '@/store/reducers/userSlice/asyncActions/userApi';

export const useUserStore = () => {
	const {user} = useAppSelector(state => state.userReducer);
	const dispatch = useAppDispatch();
	const isAuth = useMemo(() => !!user?.id, [user]);
	const isAdmin = useMemo(() => user?.statusId === 9, [user]);

	
	// const fetchUser = () : void => {
	// 	console.log('fetchUser: ', isAuth, user.id);
	// 	if (!isAuth && !user.id) {
	// 		dispatch(fetchUserAutoLogin());
	// 	}
	// };
	const {
		adminSwitchIdToUser,
		adminSwitchUserModel
	} = useAppSelector(state => state.adminReducer);

	const Iuser = adminSwitchUserModel||user;
	// console.log('Iuser',Iuser);
	// console.log('reload&&&',Iuser);


	const userPhone = useMemo(() => {
		if (isAdmin && adminSwitchUserModel) {
			return adminSwitchUserModel.phone;
		} else {			
			return user.phone;
		}
	}, [adminSwitchIdToUser, adminSwitchUserModel]);


	const userName = useMemo(() => {
		
		if (isAdmin && adminSwitchUserModel) {
			
			return adminSwitchUserModel.name;
		} else {			
			return user.name;
		}
	}, [ adminSwitchIdToUser,adminSwitchUserModel]);

	const userSurname = useMemo(() => {
		if (isAdmin && adminSwitchUserModel) {
			return adminSwitchUserModel.surname;
		} else {	
			return user.surname;
		}
	}, [ adminSwitchIdToUser,adminSwitchUserModel]);



	const fetchUser = () : void => {

		


		dispatch(fetchUserAutoLogin())
			.then(response => {
			
				const message = response.payload?.message?.payload as {message?: {payload: string}};
				if (message) {
					const isLogout = message == '422' || message == '403' || message == '401';
					if (isLogout) {
						const persist = window.localStorage.getItem('persist:root');
						if (persist) {
							window.localStorage.removeItem('persist:root');
						}
					}
				}
			});
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

	// useEffect(() => {
	// 	console.log(adminSwitchIdToUser);
	// 	console.log('dfdf');
	// }, [adminSwitchIdToUser]);
	
	return {
		userPhone,
		userName,
		userSurname,
		adminSwitchIdToUser,
		user,
		Iuser,
		isAuth,
		isAdmin,
		adminSwitchUserModel,		
		getUser: fetchUser,
	};
};
