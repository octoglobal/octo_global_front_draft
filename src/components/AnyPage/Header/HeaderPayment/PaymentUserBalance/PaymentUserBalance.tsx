import React, {FC} from 'react';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import {usePayment} from '@/hooks/usePayment';


const PaymentUserBalance: FC = () => {

	const {
		userBalance
	} = usePayment();

	return (
		<BalanceTextMUI>
			{userBalance ? userBalance : 0} €
		</BalanceTextMUI>
	);
};

const {
	BalanceTextMUI
} = useHeaderPaymentStyles();

export default React.memo(PaymentUserBalance);
