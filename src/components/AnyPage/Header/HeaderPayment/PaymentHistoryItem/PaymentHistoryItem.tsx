import React, {FC} from 'react';
import {usePaymentHistoryItemStyles} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryItem/style';
import {IPaymentModel} from '@/models/IPaymentModel';
import {ToDefaultDate, ToDefaultTime} from '@/services/services';
import {
	usePaymentHistoryItem
} from '@/components/AnyPage/Header/HeaderPayment/PaymentHistoryItem/usePaymentHistoryItem';

const PaymentHistoryItem: FC<IPaymentModel> = ({amount, comment, createdTime, id}) => {

	const {
		isAdmin,
		amountData,
		isCollapseOpen,
		commentOpenStyle,
		payTextMarginStyle,
		handleToggleCollapse,
		handleDeleteTransaction,
	} = usePaymentHistoryItem(amount);

	return (
		<ContainerMUI>
			<WrapperMUI onClick={handleToggleCollapse}>
				<MoneyTextMUI color={amountData.color} sx={payTextMarginStyle}>
					{amountData.operation} {amountData.sum} €
				</MoneyTextMUI>
				<CommentTextMUI sx={commentOpenStyle}>
					{comment}
					{isAdmin && (
						<DeleteTransactionButtonTabletSC onClick={handleDeleteTransaction(id, amount)} isVisible={isCollapseOpen}>
							Удалить транзакцию
						</DeleteTransactionButtonTabletSC>
					)}
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
						{isAdmin && (
							<DeleteTransactionButtonSC onClick={handleDeleteTransaction(id, amount)}>
								Удалить транзакцию
							</DeleteTransactionButtonSC>
						)}
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
	DeleteTransactionButtonSC,
	DeleteTransactionButtonTabletSC,
} = usePaymentHistoryItemStyles();

export default React.memo(PaymentHistoryItem);
