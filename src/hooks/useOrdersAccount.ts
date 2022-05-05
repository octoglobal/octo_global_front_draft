import {useCustomRouter} from '@/hooks/useCustomRouter';
import {useAppSelector} from '@/hooks/useReduxHooks';

export const useOrdersAccount = () => {

	const {
		router
	} = useCustomRouter();

	const {
		adminSwitchIdToUser,
		adminSwitchUserModel
	} = useAppSelector(state => state.adminReducer);


	const handlePushOrdersAddress = (packageId: number) => {
		if (adminSwitchIdToUser && adminSwitchUserModel) {
			router.push(`/account/orders/address?packageId=${packageId}&userId=${adminSwitchIdToUser}`);
		} else {
			router.push(`/account/orders/address?packageId=${packageId}`);
		}
	};


	return {
		handlePushOrdersAddress
	};
};
