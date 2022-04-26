import React, {FC} from 'react';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useOrderStatusModalStyles} from '@/components/AnyPage/OrderItem/OrderStatusModal/style';
import {FormProvider} from 'react-hook-form';
import {useOrderStatusModal} from '@/components/AnyPage/OrderItem/OrderStatusModal/useOrderStatusModal';
import DropDownCollapseUI from '../../../../UI/UIComponents/DropDownCollapseUI/DropDownCollapseUI';
import {IOrderModel} from '@/models/IOrderModel';

interface IOrderStatusModal {
	open: boolean,
	onClose: () => void;
	orderItem: IOrderModel;
	successCallback: () => void;
}

const OrderStatusModal: FC<IOrderStatusModal> = ({open, onClose, orderItem}) => {

	const {
		methods,
		onSubmit,
		collapseItems,
		trackNumberProps
	} = useOrderStatusModal(open, orderItem);

	return (
		<FormProvider {...methods}>
			<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
				<ModalUI
					title={'Для продолжения добавьте трек номер\n' +
						'и перенесите статус заказа'}
					defaultStylesButton={false}
					dialogProps={{
						open,
						onClose,
						sx: DialogSx,
					}}
					buttonProps={{
						type: 'submit',
						onClick: methods.handleSubmit(onSubmit),
					}}
				>
					<ContainerMUI>
						<TextFieldContainerMUI>
							<TextFieldUI
								{...trackNumberProps}
							/>
						</TextFieldContainerMUI>
						<DropDownContainerMUI>
							<DropDownCollapseUI
								title='Статус заказа'
								required={true}
								collapseItems={collapseItems}
							/>
						</DropDownContainerMUI>
					</ContainerMUI>
				</ModalUI>
			</FormMUI>
		</FormProvider>
	);
};

const {
	FormMUI,
	DialogSx,
	ContainerMUI,
	TextFieldContainerMUI,
	DropDownContainerMUI
} = useOrderStatusModalStyles();

export default React.memo(OrderStatusModal);
