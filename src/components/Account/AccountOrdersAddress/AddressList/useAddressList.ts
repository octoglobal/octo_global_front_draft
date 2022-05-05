import { useUserStore } from '@/hooks/useUserStore';
import { useMemo } from 'react';
import {useAppSelector} from '@/hooks/useReduxHooks';

export const useAddressList = () => {

	const {
		user: {
			addresses
		},
		isAdmin
	} = useUserStore();

	const {
		adminSwitchUserModel,
		adminSwitchIdToUser,
	} = useAppSelector(state => state.adminReducer);

	const isAddresses = useMemo(() => (
		!!(Array.isArray(addresses) && addresses?.length)
	), [addresses]);

	const addressesArray = useMemo(() => {
		if (isAdmin) {
			if (adminSwitchUserModel) {
				return adminSwitchUserModel.addresses;
			}
			return  [];
		} else {
			return  addresses;
		}
	}, [isAdmin, adminSwitchUserModel, adminSwitchIdToUser]);

	console.log(adminSwitchIdToUser, adminSwitchUserModel);


	return {
		addresses: addressesArray,
		isAddresses
	};
};
