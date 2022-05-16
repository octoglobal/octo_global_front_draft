import React from 'react';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import {useHeaderStyle} from '@/components/AnyPage/Header/style';
import {useHeaderPayment} from '@/components/AnyPage/Header/HeaderPayment/useHeaderPayment';
import {useUserStore} from '@/hooks/useUserStore';
import PaymentForm from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/PaymentForm';
import { usePaymentFormStyles } from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/style';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import PaymentHistoryList from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/PaymentHistoryList';

const HeaderPayment = () => {
	const {
		isAdmin
	} = useUserStore();

	const {
		isMenuOpen,
		userBalance,
		statusMessage,
		handleToggleMenuOpen,
		handleSendUserEmailReq,
		handleResetStatusMessagePaymentReducer,
	} = useHeaderPayment();


	return (
		<ContainerMUI>
			<BalanceTextButtonMUI
				onClick={handleToggleMenuOpen}
				disableRipple
			>
				<BalanceTextMUI>
					{userBalance} €
				</BalanceTextMUI>
				<ArrowUI/>
			</BalanceTextButtonMUI>
			<MenuListMUI
				open={isMenuOpen}
				id='long-menu'
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				disableScrollLock={true}
				onClose={handleToggleMenuOpen}
			>
				{!isAdmin && (
					<>
						<ButtonSendMUI
							onClick={handleSendUserEmailReq}>
							<PayIconMUI/> Заявка на пополнение кошелька
						</ButtonSendMUI>
					</>
				)}
				{isAdmin && (
					<PaymentForm/>
				)}
				<PaymentHistoryList/>
			</MenuListMUI>
			{!isAdmin && (
				<ModalUI
					dialogProps={{
						open: !!statusMessage,
						onClose: () => handleResetStatusMessagePaymentReducer(''),
					}}
					title={statusMessage}
				/>
			)}
		</ContainerMUI>
	);
};

const {
	PayIconMUI,
	MenuListMUI,
	ContainerMUI,
	ButtonSendMUI,
	BalanceTextMUI,
	BalanceTextButtonMUI,
} = useHeaderPaymentStyles();

const {
	ArrowUI,
} = useHeaderStyle();

export default React.memo(HeaderPayment);
