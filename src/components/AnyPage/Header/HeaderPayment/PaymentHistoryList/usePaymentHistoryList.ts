import {usePayment} from '@/hooks/usePayment';
import {useEffect, useMemo} from 'react';

export const usePaymentHistoryList = () => {

	const {
		handleGetHistoryOperation,
		userHistoryBalance,
		loadingHistoryBalance,
	} = usePayment();

	const isHistoryBalanceArray = useMemo(() => (
		(!loadingHistoryBalance && (Array.isArray(userHistoryBalance)))
	), [userHistoryBalance, loadingHistoryBalance]);


	useEffect(() => {
		handleGetHistoryOperation();
	}, []);

	return {
		userHistoryBalance,
		isHistoryBalanceArray
	};
};
