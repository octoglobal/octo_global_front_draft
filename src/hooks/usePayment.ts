import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import {useMemo} from 'react';
import { paymentSlice } from '@/reducers/paymentSlice/paymentSlice';
import { fetchSendPaymentMessageInEmail } from '@/reducers/paymentSlice/asyncThunk/paymentApi';

export const usePayment = () => {
	const {
		balance,
		currentCourseEuro,
		historyBalance,
		statusMessage,
	} = useAppSelector(state => state.paymentReducer);

	const dispatch = useAppDispatch();

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
		dispatch(fetchSendPaymentMessageInEmail());
	};

	const handleResetStatusMessagePaymentReducer = (status = '') => {
		dispatch(paymentSlice.actions.resetStatusMessage(status));
	};

	return {
		statusMessage,
		euroCourse: normalCourseEuro,
		userBalance: normalBalance,
		userHistoryBalance: historyBalance,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	};
};
