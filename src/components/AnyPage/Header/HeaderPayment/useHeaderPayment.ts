import { useEffect, useState } from 'react';
import { usePayment } from '@/hooks/usePayment';

export const useHeaderPayment = () => {

	const {
		userBalance,
		statusMessage,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	} = usePayment();

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleToggleMenuOpen = () => {
		setIsMenuOpen(prevState => !prevState);
	};

	useEffect(() => {
		if (statusMessage) {
			setTimeout(() => {
				handleResetStatusMessagePaymentReducer();
			}, 3000);
			return () => {
				handleResetStatusMessagePaymentReducer();
			};
		}
	}, [statusMessage]);

	return {
		isMenuOpen,
		userBalance,
		statusMessage,
		handleToggleMenuOpen,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	};
};
