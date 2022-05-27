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

	const isAddresses = useMemo(() => {
		if (isAdmin && adminSwitchUserModel) {
			return !!(Array.isArray(adminSwitchUserModel.addresses) && adminSwitchUserModel.addresses?.length);
		}
		if (!isAdmin) {
			return !!(Array.isArray(addresses) && addresses?.length);
		}
	}, [addresses, isAdmin, adminSwitchUserModel]);

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

	return {
		addresses: addressesArray,
		isAddresses
	};
};
