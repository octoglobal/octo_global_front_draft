import React from 'react';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import {useHeaderStyle} from '@/components/AnyPage/Header/style';
import {useHeaderPayment} from '@/components/AnyPage/Header/HeaderPayment/useHeaderPayment';
import {useUserStore} from '@/hooks/useUserStore';
import PaymentForm from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/PaymentForm';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import PaymentHistoryList from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/PaymentHistoryList';
import PaymentUserBalance from '@/components/AnyPage/Header/HeaderPayment/PaymentUserBalance/PaymentUserBalance';
import CloseModalIcon from '@/UIIcon/CloseModalIcon.svg';


const HeaderPayment = () => {
	const {
		isAdmin
	} = useUserStore();

	const {
		isMobile,
		isOpenModal,
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
				disableScrollLock={!isMobile}
				onClose={handleToggleMenuOpen}
			>
				{isMobile && (
					<ContainerMobileMUI>
						<CloseModalButtonMUI onClick={handleToggleMenuOpen}>
							<CloseModalIcon/>
						</CloseModalButtonMUI>
						<PaymentUserBalance/>
					</ContainerMobileMUI>
				)}
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
				<PaymentHistoryList
					isMobile={isMobile}
				/>
			</MenuListMUI>
			{!isAdmin && isOpenModal && (
				<ModalUI
					dialogProps={{
						open: isOpenModal,
						onClose: () => handleResetStatusMessagePaymentReducer(''),

					}}
					loading={!statusMessage}
					title={statusMessage}
					closeTime={8}
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
	CloseModalButtonMUI,
	ContainerMobileMUI,
	BalanceTextButtonMUI,
} = useHeaderPaymentStyles();

const {
	ArrowUI,
} = useHeaderStyle();

export default React.memo(HeaderPayment);
