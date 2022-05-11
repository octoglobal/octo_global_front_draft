import React from 'react';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import {useAccountOrdersSend} from '@/components/Account/AccountOrders/AccountOrdersSend/useAccountOrdersSend';
import PackageItem from '@/components/AnyPage/PackageItem/PackageItem';
import { FormProvider, useForm } from 'react-hook-form';
import AccountOrdersPlaceholder
	from '@/components/Account/AccountOrders/AccountOrdersPlaceholder/AccountOrdersPlaceholder';

const AccountOrdersSend = () => {
	const {
		isAdmin,
		sendData,
		sendDataEnd,
		isSendDataArray,
	} = useAccountOrdersSend();
	const methods = useForm();

	return (
		<WrapperOrdersMUI>
			<PageLabelMUI>
				Отправленые
			</PageLabelMUI>
			<FormProvider {...methods}>
				{isSendDataArray && (
					<ListMUI>
						{sendData.map(packageItem => (
							<PackageItem
								key={packageItem.id}
								packageData={packageItem}
								component='send'
								dropItems={[]}
								isVisibleTrackNumber={true}
							/>
						))}
					</ListMUI>
				)}
				{!isSendDataArray && sendDataEnd && (
					<PlaceholderWrapperMUI>
						<AccountOrdersPlaceholder
							text={isAdmin ? 'У пользователя нет заказов' : 'У вас еще нет заказов'}
						/>
					</PlaceholderWrapperMUI>
				)}
			</FormProvider>
		</WrapperOrdersMUI>
	);
};

const {
	ListMUI,
	PageLabelMUI,
	WrapperOrdersMUI,
	PlaceholderWrapperMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersSend);
