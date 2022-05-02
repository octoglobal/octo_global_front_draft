import { useUserStore } from '@/hooks/useUserStore';
import { useMemo } from 'react';

export const useAddressList = () => {

	const {
		user: {
			addresses
		}
	} = useUserStore();

	const isAddresses = useMemo(() => (
		!!(Array.isArray(addresses) && addresses?.length)
	), [addresses]);

	return {
		addresses,
		isAddresses
	};
};
