import {useEffect} from 'react';
import { usePayment } from '@/hooks/usePayment';

export const useHeaderPayment = () => {

	const {
		isOpenPaymentForm,
		statusMessage,
		handleSendUserEmailReq,
		handleTogglePaymentForm,
		handleResetStatusMessagePaymentReducer,
		isAdmin
	} = usePayment();


	const handleToggleMenuOpen = () => {
		handleTogglePaymentForm();
	};

	useEffect(() => {
		if (statusMessage && isAdmin) {
			setTimeout(() => {
				handleResetStatusMessagePaymentReducer();
			}, 3000);
			return () => {
				handleResetStatusMessagePaymentReducer();
			};
		}
	}, [statusMessage]);

	return {
		isMenuOpen: isOpenPaymentForm,
		statusMessage,
		handleToggleMenuOpen,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	};
};
