import React from 'react';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useAccountOrdersAddStyles} from '@/components/Account/AccountOrders/AccountOrdersAdd/style';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useAccountOrdersAdd} from '@/components/Account/AccountOrders/AccountOrdersAdd/useAccountOrdersAdd';
import FormSuccessMessage from '@/components/AnyPage/FormSuccessMessage/FormSuccessMessage';
import AccountOrdersAddInstruction
	from '@/components/Account/AccountOrders/AccountOrdersAdd/AccountOrdersAddInstruction/AccountOrdersAddInstruction';

const AccountOrdersAdd = () => {

	const {
		onSubmit,
		formMessage,
		handleSubmit,
		textFieldName,
		textFieldDesc,
		textFieldTrackNumber
	} = useAccountOrdersAdd();

	return (
		<ContainerMUI>
			<FormMUI onSubmit={handleSubmit(onSubmit)}>
				<TextFieldContainerMUI>
					<TextFieldUI
						controller={textFieldName.controller}
						inputProps={textFieldName.inputProps}
					/>
				</TextFieldContainerMUI>
				<TextFieldContainerMUI>
					<TextFieldUI
						controller={{
							...textFieldTrackNumber.controller,
							rules: {
								required: true,
							}
						}}
						inputProps={textFieldTrackNumber.inputProps}
					/>
				</TextFieldContainerMUI>
				<TextAreaContainerMUI>
					<TextFieldUI
						controller={textFieldDesc.controller}
						inputProps={{
							...textFieldDesc.inputProps,
							id: 'outlined-textarea',
							multiline: true,
						}}
					/>
				</TextAreaContainerMUI>
				<FormSuccessMessage
					message={formMessage}
				/>
				<ButtonContainerMUI>
					<ButtonUI type='submit'>
						Добавить
					</ButtonUI>
				</ButtonContainerMUI>
			</FormMUI>
			<AccountOrdersAddInstruction/>
		</ContainerMUI>
	);
};

const {
	FormMUI,
	ContainerMUI,
	ButtonContainerMUI,
	TextFieldContainerMUI,
	TextAreaContainerMUI,
} = useAccountOrdersAddStyles();

export default React.memo(AccountOrdersAdd);
