import {useCustom800, useCustomSize} from '@/hooks/useMedia';
import {useMemo} from 'react';
import {useUserStore} from '@/hooks/useUserStore';
import {useAppSelector} from '@/hooks/useReduxHooks';

export const useUser = (isChangeToAdmin: boolean) => {

	const {isCustomSize} = useCustomSize(680);
	const {isCustom800} = useCustom800();

	const ellipsisScale = useMemo(() => isCustomSize || isCustom800 ? true : false,
		[isCustomSize, isCustom800]
	);

	const {
		user: {
			name, surname
		},
		isAdmin
	} = useUserStore();

	const {
		adminSwitchUserModel
	} = useAppSelector(state => state.adminReducer);

	const getUserInfo = (key: 'name' | 'surname', value: string) => {
		if (isChangeToAdmin) {
			if (isAdmin && adminSwitchUserModel) {
				return adminSwitchUserModel[key];
			}
			return value;
		} else {
			return value;
		}
	};


	const userName = useMemo(() => (
		getUserInfo('name', name)
	), [isChangeToAdmin, adminSwitchUserModel]);

	const userSurname = useMemo(() => (
		getUserInfo('surname', surname)
	), [isChangeToAdmin, adminSwitchUserModel]);

	return {
		userName,
		userSurname,
		ellipsisScale
	};
};
