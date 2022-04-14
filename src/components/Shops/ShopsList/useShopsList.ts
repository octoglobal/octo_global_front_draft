import {useAppSelector} from '@/hooks/useReduxHooks';
import {useMemo} from 'react';

export const useShopsList = () => {
	const { shops } = useAppSelector(state => state.shopReducer);

	const isShopsArray = useMemo(() => (
		Array.isArray(shops) && shops.length
	), [shops]);

	return {
		shops,
		isShopsArray
	};
};
