import React from 'react';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import {useHeaderStyle} from '@/components/AnyPage/Header/style';
import {useHeaderPayment} from '@/components/AnyPage/Header/HeaderPayment/useHeaderPayment';
import {useUserStore} from '@/hooks/useUserStore';
import PaymentForm from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/PaymentForm';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import PaymentHistoryList from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/PaymentHistoryList';
import PaymentUserBalance from '@/components/AnyPage/Header/HeaderPayment/PaymentUserBalance/PaymentUserBalance';

const HeaderPayment = () => {
	const {
		isAdmin
	} = useUserStore();

	const {
		isMenuOpen,
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
				<PaymentUserBalance/>
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
			{!isAdmin && !!statusMessage && (
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
	BalanceTextButtonMUI,
} = useHeaderPaymentStyles();

const {
	ArrowUI,
} = useHeaderStyle();

export default React.memo(HeaderPayment);
