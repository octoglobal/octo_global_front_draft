import React, { useEffect } from 'react';
import {NextPage} from 'next';
import AccountPage from '@/components/Account/Account';
import AccountOrders from '@/components/Account/AccountOrders/AccountOrders';
import WithAuth from '@/components/HOC/WithAuth/WithAuth';
import AccountOrdersWait from '@/components/Account/AccountOrders/AccountOrdersWait/AccountOrdersWait';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { orderWaitSlice } from '@/reducers/orderWaitSlice/orderWaitSlice';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Wait: NextPage = () => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		return () => {
			dispatch(orderWaitSlice.actions.defaultData());
		};
	}, []);


	return (
		<HeaderLayout>

			<AccountPage>
				<AccountOrders>
					<AccountOrdersWait/>
				</AccountOrders>
			</AccountPage>
		</HeaderLayout>
	);
};

export default React.memo(WithAuth(Wait));
