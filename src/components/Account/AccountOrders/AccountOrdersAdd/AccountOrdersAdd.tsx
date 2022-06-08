import React from 'react';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import { useAccountOrdersAddStyles } from '@/components/Account/AccountOrders/AccountOrdersAdd/style';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import { useAccountOrdersAdd } from '@/components/Account/AccountOrders/AccountOrdersAdd/useAccountOrdersAdd';
import FormSuccessMessage from '@/components/AnyPage/FormSuccessMessage/FormSuccessMessage';
import AccountOrdersAddInstruction
	from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountOrdersAddInstruction/AccountOrdersAddInstruction';
import AccountAddModal from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountAddModal/AccountAddModal';
import AccountAddInfo from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountAddInfo/AccountAddInfo';
import {useAccountOrdersStyles} from '@/components/Account/AccountOrders/style';

const AccountOrdersAdd = () => {

	const {
		onSubmit,
		isMobile,
		isAddOrder,
		formMessage,
		handleSubmit,
		textFieldName,
		textFieldDesc,
		setIsAddOrder,
		textFieldTrackNumber,
	} = useAccountOrdersAdd();

	return (
		<>
			<ContainerMUI>
				<PageLabelMUI>
					Добавить заказ
				</PageLabelMUI>
				<FormMUI onSubmit={handleSubmit(onSubmit)}>
					<TextFieldContainerMUI>
						<TextFieldUI
							controller={textFieldName.controller}
							inputProps={{
								...textFieldName.inputProps,
								sx: isMobile ? inputContainerAdaptiveSX : inputContainerSX,
							}}
						/>
					</TextFieldContainerMUI>
					<TextFieldContainerMUI>
						<TextFieldUI
							controller={{
								...textFieldTrackNumber.controller,
								rules: {
									required: true,
									
									pattern: /^[a-zA-Z0-9]+$/g
								},
							}}
							inputProps={{
								...textFieldTrackNumber.inputProps,
								sx: isMobile ? inputContainerAdaptiveSX :  inputContainerSX,
							}}
						/>
					</TextFieldContainerMUI>
					<TextAreaContainerMUI>
						<TextFieldUI
							controller={{
								...textFieldDesc.controller,
								rules: {required: false},
								defaultValue: ''
							}}
							inputProps={{
								...textFieldDesc.inputProps,
								id: 'outlined-textarea',
								multiline: true,
								maxRows: 4,
							}}
						/>
					</TextAreaContainerMUI>
					<FormSuccessMessage
						message={formMessage}
					/>
					<InfoContainerMUI>
						<AccountAddInfo/>
					</InfoContainerMUI>
					<ButtonContainerMUI>
						<ButtonUI type='submit'>
							Добавить
						</ButtonUI>
					</ButtonContainerMUI>
				</FormMUI>
				<AccountOrdersAddInstruction />
			</ContainerMUI>
			{isAddOrder && (
				<AccountAddModal
					open={isAddOrder}
					onClose={() => setIsAddOrder(false)}
				/>
			)}
		</>
	);
};

const {
	FormMUI,
	ContainerMUI,
	inputContainerSX,
	InfoContainerMUI,
	ButtonContainerMUI,
	TextFieldContainerMUI,
	TextAreaContainerMUI,
	inputContainerAdaptiveSX
} = useAccountOrdersAddStyles();

const {
	PageLabelMUI
} = useAccountOrdersStyles();

export default React.memo(AccountOrdersAdd);
