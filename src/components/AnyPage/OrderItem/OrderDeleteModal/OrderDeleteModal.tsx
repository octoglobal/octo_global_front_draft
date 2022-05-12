import React, {FC} from 'react';
import {useOrderDeleteModalStyles} from '@/components/AnyPage/OrderItem/OrderDeleteModal/style';
import {DialogProps} from '@mui/material';

interface IOrderDeleteModalProps {
	dialogProps: DialogProps;
	title?: string;
	buttonYesText?: string;
	buttonNoText?: string;
	onClickYes: () => void;
	onClickNo: () => void;
}

const OrderDeleteModal: FC<IOrderDeleteModalProps> = (
	{
		dialogProps,
		title,
		onClickNo,
		onClickYes,
		buttonYesText = 'Да',
		buttonNoText = 'Нет',
	}
) => {
	return (
		<DialogMUI
			{...dialogProps}
			disableScrollLock={false}
			BackdropComponent={BackDropBlurMUI}
		>
			<DialogTitleMUI>
				{title}
			</DialogTitleMUI>
			<DialogButtonContainerMUI>
				<DialogButtonYesMUI
					onClick={onClickYes}
				>
					{buttonYesText}
				</DialogButtonYesMUI>
				<DialogButtonNoMUI
					onClick={onClickNo}
				>
					{buttonNoText}
				</DialogButtonNoMUI>
			</DialogButtonContainerMUI>
		</DialogMUI>
	);
};

const {
	DialogMUI,
	DialogTitleMUI,
	DialogButtonNoMUI,
	BackDropBlurMUI,
	DialogButtonYesMUI,
	DialogButtonContainerMUI,
} = useOrderDeleteModalStyles();

export default React.memo(OrderDeleteModal);
