import React, { useEffect } from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersStock from '@/components/Account/AccountOrders/AccountOrdersStock/AccountOrdersStock';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { orderStockSlice } from '@/reducers/orderStockSlice/orderStockSlice';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Stock: NextPage = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(orderStockSlice.actions.resetSlice());
		};
	}, []);

	return (
		<HeaderLayout>

			<AccountPage>
				<AccountOrders>
					<AccountOrdersStock/>
				</AccountOrders>
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(WithAuth(Stock));
