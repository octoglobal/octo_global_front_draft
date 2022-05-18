import React from 'react';
import {usePaymentFormStyles} from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/style';
import {usePaymentForm} from '@/components/AnyPage/Header/HeaderPayment/PaymentForm/usePaymentForm';
import TextFieldUI from '../../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';

const PaymentForm = () => {

	const {
		control,
		onSubmit,
		handleSubmit,
		statusMessage,
	} = usePaymentForm();

	return (
		<ContainerMUI>
			<FormContainerMUI onSubmit={handleSubmit(onSubmit)}>
				<TextFieldMUI color='#23D16A'>
					<TextFieldUI
						controller={{
							name: 'plus',
							control,
							defaultValue: '',
						}}
						inputProps={{
							placeholder: '+',
							type: 'number',
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
					<StatusMessageMUI>
						{statusMessage}
					</StatusMessageMUI>
					<SubmitButtonMUI type='submit'>
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
							type: 'number',
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
	StatusMessageMUI,
	TextFieldCommentContainerMUI,
} = usePaymentFormStyles();

export default React.memo(PaymentForm);
