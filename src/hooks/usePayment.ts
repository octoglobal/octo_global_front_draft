import {useAppSelector} from '@/hooks/useReduxHooks';
import {useMemo} from 'react';

export const usePayment = () => {
	const {
		balance,
		currentCourseEuro,
		historyBalance,
	} = useAppSelector(state => state.paymentReducer);

	const normalCourseEuro = useMemo(() => {
		if (currentCourseEuro) {
			return currentCourseEuro / 100;
		}
	}, [currentCourseEuro]);

	const normalBalance = useMemo(() => {
		if (balance) {
			const balanceInt = balance / 100;
			return balanceInt + ' ' + balance.toString().replace(balanceInt.toString(), '');
		}
	}, [balance]);

	const handleSendUserEmailReq = () => {
		console.log(123);
	};

	return {
		euroCourse: normalCourseEuro,
		userBalance: normalBalance,
		userHistoryBalance: historyBalance,
		handleSendUserEmailReq,
	};
};
