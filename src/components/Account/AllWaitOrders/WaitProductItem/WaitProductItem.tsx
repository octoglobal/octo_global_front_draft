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
		<>
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
					<span>
						{userId}
					</span>
				</CheckboxContainerSC>
			</ItemSC>
			<ItemSC whiteSpace="pre-wrap">product name product name product name product name product name product</ItemSC>
			<ItemSC>{userEmail}</ItemSC>
			<ItemSC>{orderLongId}</ItemSC>
			<ItemSC>{orderTrackNumber}</ItemSC>
			<ItemSC>{userName}</ItemSC>
		</>
	);
};

const {ItemSC, CheckboxContainerSC} = useWaitProductItemStyles();

export default React.memo(WaitProductItem);
