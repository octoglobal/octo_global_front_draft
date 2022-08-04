import {useEffect} from 'react';
import { usePayment } from '@/hooks/usePayment';
import {useMediaQuery} from '@mui/material';

export const useHeaderPayment = () => {

	const {
		isOpenModal,
		isOpenPaymentForm,
		statusMessage,
		adminSwitchIdToUser,
		userBalance,
		handleSendUserEmailReq,
		handleTogglePaymentForm,
		handleResetHistoryBalance,
		handleResetStatusMessagePaymentReducer,
		isAdmin
	} = usePayment();

	const isMobile = useMediaQuery('(max-width: 959px)');


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

	useEffect(() => {
		if (isAdmin) {
			handleResetHistoryBalance();
		}
	}, [adminSwitchIdToUser, isAdmin]);

	useEffect(() => {
		if (isMobile) {
			const domNext = document.querySelector('#__next') as HTMLDivElement;
			const domDrawer = document.querySelector('#userDrawer') as HTMLDivElement;
			if (domNext) {
				domNext.style.filter = isOpenPaymentForm ? 'blur(8px)' : '';
			}
			if (domDrawer) {
				domDrawer.style.filter = isOpenPaymentForm ? 'blur(8px)' : '';
				domDrawer.style.backgroundColor = `${isOpenPaymentForm ? '#FFFFFF' : ''}`;
			}
		}
		if (!isMobile) {
			document.body.style.overflowY = isOpenPaymentForm ? 'hidden' : 'scroll';
			return () => {
				document.body.style.overflowY = 'scroll';
			};
		}
	}, [isOpenPaymentForm]);

	return {
		isMobile,
		isOpenModal,
		userBalance,
		isMenuOpen: isOpenPaymentForm,
		statusMessage,
		handleToggleMenuOpen,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	};
};
