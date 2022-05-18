import React, { FC, useMemo } from 'react';
import {useHeaderPaymentStyles} from '@/components/AnyPage/Header/HeaderPayment/style';
import {usePayment} from '@/hooks/usePayment';


const PaymentUserBalance: FC = () => {

	const {
		userBalance
	} = usePayment();

	const currentBalance = useMemo(() => (
		userBalance ? userBalance : 0
	), [userBalance]);

	return (
		<BalanceTextMUI>
			{currentBalance} €
		</BalanceTextMUI>
	);
};

const {
	BalanceTextMUI
} = useHeaderPaymentStyles();

export default React.memo(PaymentUserBalance);
