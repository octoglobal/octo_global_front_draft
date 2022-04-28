import { useCustomRouter } from '@/hooks/useCustomRouter';
import { useUserStore } from '@/hooks/useUserStore';
import { useEffect } from 'react';

export const useAccount = () => {
	const {router, pushTo} = useCustomRouter();

	const {
		getUser,
		isAdmin,
	} = useUserStore();

	// TODO: исправить - пока что захардкожено
	useEffect(() => {
		if(router.asPath.includes('info') && !router.asPath.includes('location')) {
			pushTo(router.asPath, {location: 'ger'});
		}
	}, [router.asPath]);

	useEffect(() => {
		getUser();
	}, []);


	return {
		isAdmin,
	};
};
