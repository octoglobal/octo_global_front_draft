import React from 'react';
import {useAllWaitOrders} from '@/components/Account/AllWaitOrders/useAllWaitOrders';
import {useAllWitOrdersStyles} from '@/components/Account/AllWaitOrders/AllWitOrders.styles';
import WaitProductItem from '@/components/Account/AllWaitOrders/WaitProductItem/WaitProductItem';

const AllWaitOrders = () => {
	const {control, productList, onSubmitInputValue} = useAllWaitOrders();

	return (
		<ContainerSC>
			<ColumnTopSC>
				<ColumnTopRowSC>
					<ColumnRowTopItemSC>User ID</ColumnRowTopItemSC>
					<ColumnRowTopItemSC>Product name</ColumnRowTopItemSC>
					<ColumnRowTopItemSC>E-Mail</ColumnRowTopItemSC>
					<ColumnRowTopItemSC>Order</ColumnRowTopItemSC>
					<ColumnRowTopItemSC>Track number</ColumnRowTopItemSC>
					<ColumnRowTopItemSC>Name</ColumnRowTopItemSC>
				</ColumnTopRowSC>
			</ColumnTopSC>
			{productList.map((productItem) => (
				<WaitProductItem
					key={productItem.orderId}
					control={control}
					onClick={onSubmitInputValue(productItem.orderId, productItem.orderInvoiceCheck)}
					{...productItem}
				/>
			))}
		</ContainerSC>
	);
};

const {ContainerSC, ColumnTopRowSC, ColumnTopSC, ColumnRowTopItemSC} = useAllWitOrdersStyles();

export default React.memo(AllWaitOrders);
