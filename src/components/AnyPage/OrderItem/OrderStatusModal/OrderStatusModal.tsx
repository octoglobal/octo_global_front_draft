import React, {FC} from 'react';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useOrderStatusModalStyles} from '@/components/AnyPage/OrderItem/OrderStatusModal/style';
import {FormProvider} from 'react-hook-form';
import {useOrderStatusModal} from '@/components/AnyPage/OrderItem/OrderStatusModal/useOrderStatusModal';
import DropDownCollapseUI from '../../../../UI/UIComponents/DropDownCollapseUI/DropDownCollapseUI';

interface IOrderStatusModal {
	open: boolean,
	onClose: () => void;
}

const OrderStatusModal: FC<IOrderStatusModal> = ({open, onClose}) => {

	const {
		methods,
		collapseItems,
		trackNumberProps
	} = useOrderStatusModal(open);

	return (
		<ModalUI
			dialogProps={{
				open,
				onClose,
				sx: DialogSx,
			}}
			defaultStylesButton={false}
			title={'Для продолжения добавьте трек номер\n' +
				'и перенесите статус заказа'}
		>
			<FormProvider {...methods}>
				<FormMUI>
					<TextFieldContainerMUI>
						<TextFieldUI
							{...trackNumberProps}
						/>
					</TextFieldContainerMUI>
					<DropDownContainerMUI>
						<DropDownCollapseUI
							title='Статус заказа'
							collapseItems={collapseItems}
						/>
					</DropDownContainerMUI>
				</FormMUI>
			</FormProvider>
		</ModalUI>
	);
};

const {
	FormMUI,
	DialogSx,
	TextFieldContainerMUI,
	DropDownContainerMUI
} = useOrderStatusModalStyles();

export default React.memo(OrderStatusModal);
