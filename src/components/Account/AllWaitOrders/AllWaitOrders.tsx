import React from 'react';
import {useAllWaitOrders} from '@/components/Account/AllWaitOrders/useAllWaitOrders';
import {useAllWitOrdersStyles} from '@/components/Account/AllWaitOrders/AllWitOrders.styles';
import WaitProductItem from '@/components/Account/AllWaitOrders/WaitProductItem/WaitProductItem';

const AllWaitOrders = () => {
	const {control, productList, onSubmitInputValue} = useAllWaitOrders();

	return (
		<ContainerSC>
			<ColumnSC>
				<ColumnRowTopItemSC paddingLeft={12}>User ID</ColumnRowTopItemSC>
				<ColumnRowTopItemSC>Product name</ColumnRowTopItemSC>
				<ColumnRowTopItemSC>E-Mail</ColumnRowTopItemSC>
				<ColumnRowTopItemSC>Order</ColumnRowTopItemSC>
				<ColumnRowTopItemSC>Track number</ColumnRowTopItemSC>
				<ColumnRowTopItemSC>Name</ColumnRowTopItemSC>
				{productList.map((productItem) => (
					<WaitProductItem
						key={productItem.orderId}
						control={control}
						onClick={onSubmitInputValue(productItem.orderId, productItem.orderInvoiceCheck)}
						{...productItem}
					/>
				))}
			</ColumnSC>
		</ContainerSC>
	);
};

const {ContainerSC, ColumnSC, ColumnRowTopItemSC} = useAllWitOrdersStyles();

export default React.memo(AllWaitOrders);
