import React from 'react';
import {usePaymentFormStyles} from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/style';
import {usePaymentForm} from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/usePaymentForm';
import TextFieldUI from '../../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

const PaymentForm = () => {

	const {
		control,
	} = usePaymentForm();

	return (
		<ContainerMUI>
			<FormContainerMUI>
				<TextFieldMUI color='#23D16A'>
					<TextFieldUI
						controller={{
							name: 'plus',
							control,
							defaultValue: '',
							rules: {
								pattern: /[0-9]*/,
							}
						}}
						inputProps={{
							placeholder: '+',
						}}
					/>
				</TextFieldMUI>
				<TextFieldCommentContainerMUI>
					<TextFieldMUI maxWidth={false} color={'#C4C4C4'}>
						<TextFieldUI
							controller={{
								name: 'comment',
								control,
								defaultValue: '',
							}}
							inputProps={{
								placeholder: 'Назначение платежа',
							}}
						/>
					</TextFieldMUI>
					<SubmitButtonMUI>
						Применить
					</SubmitButtonMUI>
				</TextFieldCommentContainerMUI>
				<TextFieldMUI color='#F35151'>
					<TextFieldUI
						controller={{
							name: 'minus',
							control,
							defaultValue: '',
						}}
						inputProps={{
							placeholder: '-',
						}}
					/>
				</TextFieldMUI>
			</FormContainerMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	SubmitButtonMUI,
	FormContainerMUI,
	TextFieldMUI,
	TextFieldCommentContainerMUI,
} = usePaymentFormStyles();

export default React.memo(PaymentForm);
