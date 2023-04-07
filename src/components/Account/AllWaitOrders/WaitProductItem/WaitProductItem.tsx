import React, {useMemo} from 'react';
import {useWaitProductItemStyles} from '@/components/Account/AllWaitOrders/WaitProductItem/WaitProductItem.styles';
import { WaitProductItemProps } from '@/components/Account/AllWaitOrders/types';
import CheckboxUIV3 from '../../../../UI/UIComponents/CheckboxUIV3/CheckboxUIV3';
import {useMediaQuery} from '@mui/material';

const WaitProductItem = (props: WaitProductItemProps) => {
	const {
		userId,
		orderId,
		orderTitle,
		orderInvoiceCheck,
		userEmail,
		orderLongId,
		orderTrackNumber,
		userName,
		control,
		onClick,
	} = props;

	const isTablet = useMediaQuery('(max-width: 768px)');

	const Container = useMemo(() => {
		if (isTablet) {
			return ContainerSC;
		}
		return React.Fragment;
	}, [isTablet]);

	return (
		<Container>
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
						{isTablet && 'id '}{userId}
					</span>
				</CheckboxContainerSC>
			</ItemSC>
			<ItemSC whiteSpace="pre-wrap">
				<span>{isTablet && 'Product name: '}</span>
				{orderTitle || ''}
			</ItemSC>
			<ItemSC>
				<span>{isTablet && 'E-Mail: '}</span>
				{userEmail}
			</ItemSC>
			<ItemSC>
				<span>{isTablet && 'Order: '}</span>
				{orderLongId}
			</ItemSC>
			<ItemSC>
				<span>{isTablet && 'Track number: '}</span>
				{orderTrackNumber}
			</ItemSC>
			<ItemSC>
				<span>{isTablet && 'Name: '}</span>
				{userName}
			</ItemSC>
		</Container>
	);
};

const {ContainerSC, ItemSC, CheckboxContainerSC} = useWaitProductItemStyles();

export default React.memo(WaitProductItem);
