import {useEffect, useState} from 'react';
import { usePayment } from '@/hooks/usePayment';
import {useMediaQuery} from '@mui/material';
import {useUserStore} from '@/hooks/useUserStore';

export const useHeaderPayment = () => {

	const {
		isOpenModal,
		isOpenPaymentForm,
		statusMessage,
		adminSwitchIdToUser,
		handleSendUserEmailReq,
		handleTogglePaymentForm,
		handleResetHistoryBalance,
		handleResetStatusMessagePaymentReducer,
		isAdmin
	} = usePayment();

	const isMobile = useMediaQuery('(max-width: 768px)');

	const {
		isAdmin
	} = useUserStore();


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
			if (domNext && domDrawer) {
				domNext.style.filter = isOpenPaymentForm ? 'blur(18px)' : '';
				domDrawer.style.filter = isOpenPaymentForm ? 'blur(18px)' : '';
				domDrawer.style.backgroundColor = `${isOpenPaymentForm ? '#FFFFFF' : ''}`;
			}
		}
	}, [isOpenPaymentForm]);

	return {
		isMobile,
		isOpenModal,
		isMenuOpen: isOpenPaymentForm,
		statusMessage,
		handleToggleMenuOpen,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	};
};
