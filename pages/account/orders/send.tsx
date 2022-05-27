import React, {useEffect} from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersSend from '@/components/Account/AccountOrders/AccountOrdersSend/AccountOrdersSend';
import {orderSendSlice} from '@/reducers/orderSendSlice/orderSendSlice';
import {useAppDispatch} from '@/hooks/useReduxHooks';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Send: NextPage = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(orderSendSlice.actions.resetSlice());
		};
	}, []);

	return (
		<HeaderLayout>

			<AccountPage>
				<AccountOrders>
					<AccountOrdersSend/>
				</AccountOrders>
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(WithAuth(Send));
