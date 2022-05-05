import React from 'react';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import {useAccountOrdersSend} from '@/components/Account/AccountOrders/AccountOrdersSend/useAccountOrdersSend';
import PackageItem from '@/components/AnyPage/PackageItem/PackageItem';
import { FormProvider, useForm } from 'react-hook-form';

const AccountOrdersSend = () => {

	const {
		sendData,
		isSendDataArray,
	} = useAccountOrdersSend();
	const methods = useForm();

	return (
		<WrapperOrdersMUI>
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
			</FormProvider>
		</WrapperOrdersMUI>
	);
};

const {
	ListMUI,
	WrapperOrdersMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersSend);
