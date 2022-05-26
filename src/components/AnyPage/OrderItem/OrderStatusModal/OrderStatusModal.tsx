import React, {FC} from 'react';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import {useOrderStatusModalStyles} from '@/components/AnyPage/OrderItem/OrderStatusModal/style';
import {FormProvider} from 'react-hook-form';
import {useOrderStatusModal} from '@/components/AnyPage/OrderItem/OrderStatusModal/useOrderStatusModal';
import DropDownCollapseUI from '../../../../UI/UIComponents/DropDownCollapseUI/DropDownCollapseUI';
import {IOrderModel} from '@/models/IOrderModel';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';

interface IOrderStatusModal {
	open: boolean,
	title: string;
	submitStatus?: number;
	onClose: () => void;
	orderItem: IOrderModel;
	successCallback: () => void;
	component: ComponentType | 'stock2';
	packageChange?: boolean;
	visibleDropDown?: boolean;
	buttonText?: string;
}

const OrderStatusModal: FC<IOrderStatusModal> = (
	{
		open,
		onClose,
		title = '',
		orderItem,
		successCallback,
		component,
		packageChange = false,
		visibleDropDown = true,
		buttonText = 'Отлично',
		submitStatus = 0,
	}
) => {

	const {
		methods,
		onSubmit,
		collapseItems,
		trackNumberProps
	} = useOrderStatusModal(
		open,
		orderItem,
		successCallback,
		component,
		packageChange,
		submitStatus
	);

	return (
		<FormProvider {...methods}>
			<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
				<ModalUI
					title={title}
					defaultStylesButton={false}
					
					dialogProps={{
						open,
						onClose,
						sx: DialogSx,
					}}
					buttonProps={{
						type: 'submit',
						onClick: methods.handleSubmit(onSubmit),
						sx: {
							minWidth: '163px',
							opacity: 1,
						}
					}}
					buttonText={buttonText}
				>
					<ContainerMUI>
						<TextFieldContainerMUI>
							<TextFieldUI
								{...trackNumberProps}
							/>
						</TextFieldContainerMUI>
						{visibleDropDown && (
							<DropDownContainerMUI>
								<DropDownCollapseUI
									title='Статус заказа'
									required={true}
									collapseItems={collapseItems}
								/>
							</DropDownContainerMUI>
						)}
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
