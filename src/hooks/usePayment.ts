import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import { useMemo, useState} from 'react';
import { paymentSlice } from '@/reducers/paymentSlice/paymentSlice';
import {
	fetchHistoryBalanceOperation,
	fetchSendPaymentMessageInEmail
} from '@/reducers/paymentSlice/asyncThunk/paymentApi';
import {useUserStore} from '@/hooks/useUserStore';
import {adminSlice} from '@/reducers/adminSlice/adminSlice';
import {userSlice} from '@/reducers/userSlice/userSlice';
import {useMediaQuery} from '@mui/material';

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

	const [isOpenModal, setIsOpenModal] = useState(false);
	const isTablet = useMediaQuery('(max-width: 768px)');

	const dispatch = useAppDispatch();

	const normalCourseEuro = useMemo(() => {
		if (currentCourseEuro) {
			return currentCourseEuro / 100;
		}
	}, [currentCourseEuro]);

	const normalBalance = useMemo(() => {
		if (user?.balance || adminSwitchUserModel?.balance) {
			if (isAdmin && adminSwitchUserModel) {
				return (adminSwitchUserModel.balance / 100).toFixed(2);
			}
			if (!isAdmin) {
				return (user?.balance / 100).toFixed(2);
			}
			return 0;
		}
	}, [user?.balance, adminSwitchUserModel]);

	const handleUpdateUserBalance = (sum: number) => {
		if (isAdmin && adminSwitchUserModel) {
			dispatch(adminSlice.actions.changeUserBalance(sum));
		}
		dispatch(userSlice.actions.updateBalance(sum));
	};

	const handleResetHistoryBalance = () => {
		dispatch(paymentSlice.actions.resetHistoryBalance());
	};

	const handleOpenPaymentForm = () => {
		dispatch(paymentSlice.actions.openPaymentForm());
	};

	const handleTogglePaymentForm = () => {
		dispatch(paymentSlice.actions.togglePaymentForm());
	};

	const handleSendUserEmailReq = () => {
		dispatch(fetchSendPaymentMessageInEmail({isTablet}));
		setIsOpenModal(true);
	};

	const handleResetStatusMessagePaymentReducer = (status = '') => {
		dispatch(paymentSlice.actions.resetStatusMessage(status));
		if (isOpenModal) {
			setIsOpenModal(false);
		}
	};

	const handleGetHistoryOperation = () => {
		const innerId = adminSwitchIdToUser ? adminSwitchIdToUser : user?.id;
		const url = isAdmin ? `/admin/user/${innerId}/balance_history` : 'user/balance_history';
		dispatch(fetchHistoryBalanceOperation({url: url}));
	};

	return {
		isAdmin,
		isOpenModal,
		isOpenPaymentForm,
		statusMessage,
		adminSwitchIdToUser,
		handleGetHistoryOperation,
		euroCourse: normalCourseEuro,
		userBalance: normalBalance,
		userHistoryBalance: historyBalance,
		loadingHistoryBalance,
		handleSendUserEmailReq,
		handleTogglePaymentForm,
		handleOpenPaymentForm,
		handleUpdateUserBalance,
		handleResetHistoryBalance,
		handleResetStatusMessagePaymentReducer,
	};
};
