import React from 'react';
import {usePayment} from '@/hooks/usePayment';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import {useHeaderStyle} from '@/components/AnyPage/Header/style';
import {useHeaderPayment} from '@/components/AnyPage/Header/HeaderPayment/useHeaderPayment';
import {useUserStore} from '@/hooks/useUserStore';
import PaymentForm from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/PaymentForm';

const HeaderPayment = () => {

	const {
		userBalance,
		handleSendUserEmailReq,
	} = usePayment();

	const {
		isAdmin
	} = useUserStore();

	const {
		isMenuOpen,
		handleToggleMenuOpen,
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
					<ButtonSendMUI
						onClick={handleSendUserEmailReq}>
						<PayIconMUI/> Заявка на пополнение кошелька
					</ButtonSendMUI>
				)}
				{isAdmin && (
					<PaymentForm/>
				)}
			</MenuListMUI>
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
