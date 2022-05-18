import React, {FC} from 'react';
import {usePaymentHistoryList} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/usePaymentHistoryList';
import {usePaymentHistoryListStyles} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/style';
import PaymentHistoryItem from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryItem/PaymentHistoryItem';

interface IPaymentHistoryListProps {
	isMobile: boolean;
}

const PaymentHistoryList: FC<IPaymentHistoryListProps> = ({isMobile = false}) => {

	const {
		isListHidden,
		handleIsOpenList,
		userHistoryBalance,
		isHistoryBalanceArray,
	} = usePaymentHistoryList();


	return (
		<ContainerMUI>
			{!isHistoryBalanceArray && (
				<CircularProgressMUI color="inherit" />
			)}
			{!!isHistoryBalanceArray && (
				!!userHistoryBalance.length && (
					<ListMUI hiddenList={isListHidden}>
						{userHistoryBalance.map(balanceItem => (
							<PaymentHistoryItem
								key={balanceItem.id}
								{...balanceItem}
							/>
						))}
					</ListMUI>
				)
			)}
			{isListHidden && isMobile && (
				<MoreItemButtonMUI onClick={handleIsOpenList}>
					Загрузить ещё <BottomArrowMUI/>
				</MoreItemButtonMUI>
			)}
		</ContainerMUI>
	);
};

const {
	ListMUI,
	ContainerMUI,
	BottomArrowMUI,
	MoreItemButtonMUI,
	CircularProgressMUI,
} = usePaymentHistoryListStyles();

export default React.memo(PaymentHistoryList);
