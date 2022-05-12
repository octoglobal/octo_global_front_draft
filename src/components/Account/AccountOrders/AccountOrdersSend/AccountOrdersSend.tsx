import React from 'react';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';
import {useAccountOrdersSend} from '@/components/Account/AccountOrders/AccountOrdersSend/useAccountOrdersSend';
import PackageItem from '@/components/AnyPage/PackageItem/PackageItem';
import { FormProvider, useForm } from 'react-hook-form';
import AccountOrdersPlaceholder
	from '@/components/Account/AccountOrders/AccountOrdersPlaceholder/AccountOrdersPlaceholder';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';

const AccountOrdersSend = () => {
	const {
		isAdmin,
		sendData,
		sendDataEnd,
		isSendDataArray,
		isDeleteTrackNumberSuccess,
		setIsDeleteTrackNumberSuccess,
	} = useAccountOrdersSend();
	const methods = useForm();

	return (
		<WrapperOrdersMUI>
			<PageLabelMUI>
				Отправленные
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
								onDeleteTrackNumber={() => setIsDeleteTrackNumberSuccess(true)}
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
			{isDeleteTrackNumberSuccess && (
				<ModalUI
					dialogProps={{
						open: isDeleteTrackNumberSuccess,
						onClose: () => setIsDeleteTrackNumberSuccess(false),
					}}
					title='Посылка отправлена обратно на склад'
					buttonText='Отлично'
				/>
			)}
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
