import React from 'react';
import {usePaymentHistoryList} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/usePaymentHistoryList';
import {usePaymentHistoryListStyles} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryList/style';
import PaymentHistoryItem from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryItem/PaymentHistoryItem';

const PaymentHistoryList = () => {

	const {
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
					<ListMUI>
						{userHistoryBalance.map(balanceItem => (
							<PaymentHistoryItem
								key={balanceItem.id}
								{...balanceItem}
							/>
						))}
					</ListMUI>
				)
			)}
		</ContainerMUI>
	);
};

const {
	ListMUI,
	ContainerMUI,
	CircularProgressMUI,
} = usePaymentHistoryListStyles();

export default React.memo(PaymentHistoryList);
