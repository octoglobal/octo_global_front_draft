import {usePayment} from '@/hooks/usePayment';
import {useEffect, useMemo, useState} from 'react';

export const usePaymentHistoryList = () => {

	const {
		handleGetHistoryOperation,
		userHistoryBalance,
		loadingHistoryBalance,
	} = usePayment();

	const [isListHidden, setIsListHidden] = useState<boolean>(true);

	const isHistoryBalanceArray = useMemo(() => (
		(!loadingHistoryBalance && (Array.isArray(userHistoryBalance)))
	), [userHistoryBalance, loadingHistoryBalance]);

	const handleIsOpenList = () => {
		setIsListHidden(false);
	};


	useEffect(() => {
		handleGetHistoryOperation();
	}, []);

	return {
		isListHidden,
		handleIsOpenList,
		userHistoryBalance,
		isHistoryBalanceArray
	};
};
