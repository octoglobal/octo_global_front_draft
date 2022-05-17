import React, {FC} from 'react';
import {usePaymentHistoryItemStyles} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryItem/style';
import {IPaymentModel} from '@/models/IPaymentModel';
import {ToDefaultDate, ToDefaultTime} from '@/services/services';
import {
	usePaymentHistoryItem
} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryItem/usePaymentHistoryItem';

const PaymentHistoryItem: FC<IPaymentModel> = ({amount, comment, createdTime}) => {

	const {
		amountData,
		isCollapseOpen,
		commentOpenStyle,
		payTextMarginStyle,
		handleToggleCollapse,
	} = usePaymentHistoryItem(amount);

	return (
		<ContainerMUI>
			<WrapperMUI onClick={handleToggleCollapse}>
				<MoneyTextMUI color={amountData.color} sx={payTextMarginStyle}>
					{amountData.operation} {amountData.sum} €
				</MoneyTextMUI>
				<CommentTextMUI sx={commentOpenStyle}>
					{comment}
				</CommentTextMUI>
				<DateTextMUI>
					<TimeMUI>
						{ToDefaultDate(createdTime)}
					</TimeMUI>
					<CollapseContainerMUI
						in={isCollapseOpen}
					>
						<DateTextMUI>
							<TimeMUI>
								{ToDefaultTime(createdTime)}
							</TimeMUI>
						</DateTextMUI>
					</CollapseContainerMUI>
				</DateTextMUI>
			</WrapperMUI>
		</ContainerMUI>
	);
};

const {
	TimeMUI,
	DateTextMUI,
	ContainerMUI,
	WrapperMUI,
	MoneyTextMUI,
	CommentTextMUI,
	CollapseContainerMUI,
} = usePaymentHistoryItemStyles();

export default React.memo(PaymentHistoryItem);
