import React from 'react';
import {useWaitProductItemStyles} from '@/components/Account/AllWaitOrders/WaitProductItem/WaitProductItem.styles';
import { WaitProductItemProps } from '@/components/Account/AllWaitOrders/types';
import CheckboxUIV3 from '../../../../UI/UIComponents/CheckboxUIV3/CheckboxUIV3';

const WaitProductItem = (props: WaitProductItemProps) => {
	const {
		userId,
		orderId,
		orderInvoiceCheck,
		userEmail,
		orderLongId,
		orderTrackNumber,
		userName,
		control,
		onClick,
	} = props;

	return (
		<ContainerSC>
			<ItemSC>
				<CheckboxContainerSC>
					<CheckboxUIV3
						checkboxProps={{
							onClick,
						}}
						controller={{
							control,
							name: orderId + '',
							defaultValue: false,
						}}
						myValue={orderInvoiceCheck}
					/>
				</CheckboxContainerSC>
				{userId}
			</ItemSC>
			<ItemSC>product name</ItemSC>
			<ItemSC>{userEmail}</ItemSC>
			<ItemSC>{orderLongId}</ItemSC>
			<ItemSC>{orderTrackNumber}</ItemSC>
			<ItemSC>{userName}</ItemSC>
		</ContainerSC>
	);
};

const {ContainerSC, ItemSC, CheckboxContainerSC} = useWaitProductItemStyles();

export default React.memo(WaitProductItem);
