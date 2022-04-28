import React, {FC} from 'react';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import {useOrderStatusModalStyles} from '@/components/AnyPage/OrderItem/OrderStatusModal/style';
import { FormProvider } from 'react-hook-form';
import {useOrderStatusModal} from '@/components/AnyPage/OrderItem/OrderStatusModal/useOrderStatusModal';

interface IOrderStatusModal {
	open: boolean,
	onClose: () => void;
}

const OrderStatusModal: FC<IOrderStatusModal> = ({open, onClose}) => {

	const {
		methods,
		trackNumberProps
	} = useOrderStatusModal();

	return (
		<ModalUI
			dialogProps={{
				open,
				onClose
			}}
			defaultStylesButton={false}
			title={'Для продолжения добавьте трек номер\n' +
				'и перенесите статус заказа'}
		>
			<FormProvider {...methods}>
				<FormMUI>
					<TextFieldContainerMUI>
						<TextFieldMUI
							{...trackNumberProps}
						/>
					</TextFieldContainerMUI>
				</FormMUI>
			</FormProvider>
		</ModalUI>
	);
};

const {
	FormMUI,
	TextFieldMUI,
	TextFieldContainerMUI
} = useOrderStatusModalStyles();

export default React.memo(OrderStatusModal);
