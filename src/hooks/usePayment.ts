import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import {useMemo} from 'react';
import { paymentSlice } from '@/reducers/paymentSlice/paymentSlice';
import {
	fetchHistoryBalanceOperation,
	fetchSendPaymentMessageInEmail
} from '@/reducers/paymentSlice/asyncThunk/paymentApi';
import {useUserStore} from '@/hooks/useUserStore';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
import {userSlice} from '@/reducers/userSlice/userSlice';

export const usePayment = () => {
	const {
		currentCourseEuro,
		historyBalance,
		loadingHistoryBalance,
		statusMessage,
		isOpenPaymentForm,
	} = useAppSelector(state => state.paymentReducer);

	const {
		adminSwitchIdToUser,
		adminSwitchUserModel
	} = useAppSelector(state => state.adminReducer);

	const {
		isAdmin,
		user
	} = useUserStore();

	const dispatch = useAppDispatch();

	const normalCourseEuro = useMemo(() => {
		if (currentCourseEuro) {
			return currentCourseEuro / 100;
		}
	}, [currentCourseEuro]);

	const normalBalance = useMemo(() => {
		if (user?.balance) {
			if (isAdmin && adminSwitchUserModel) {
				return (adminSwitchUserModel.balance / 100).toFixed(2);
			}
			return (user?.balance / 100).toFixed(2);
		}
	}, [user?.balance]);

	const handleUpdateUserBalance = (sum: number) => {
		if (isAdmin && adminSwitchUserModel) {
			dispatch(adminSlice.actions.changeUserBalance(sum));
		}
		dispatch(userSlice.actions.updateBalance(sum));
	};

	const handleTogglePaymentForm = () => {
		dispatch(paymentSlice.actions.togglePaymentForm());
	};

	const handleSendUserEmailReq = () => {
		dispatch(fetchSendPaymentMessageInEmail());
	};

	const handleResetStatusMessagePaymentReducer = (status = '') => {
		dispatch(paymentSlice.actions.resetStatusMessage(status));
	};

	const handleGetHistoryOperation = () => {
		const innerId = adminSwitchIdToUser ? adminSwitchIdToUser : user?.id;
		const url = isAdmin ? `/admin/user/${innerId}/balance_history` : 'user/balance_history';
		dispatch(fetchHistoryBalanceOperation({url: url}));
	};

	return {
		isOpenPaymentForm,
		statusMessage,
		handleGetHistoryOperation,
		euroCourse: normalCourseEuro,
		userBalance: normalBalance,
		userHistoryBalance: historyBalance,
		loadingHistoryBalance,
		handleSendUserEmailReq,
		handleTogglePaymentForm,
		handleUpdateUserBalance,
		handleResetStatusMessagePaymentReducer,
	};
};
