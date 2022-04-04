import React, {FC} from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

import FormComponent from '@/components/AnyPage/FormComponent/FormComponent';
import {useFormsStyle} from '@/components/forms/style';
import TextFieldPasswordUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';
import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useRepeatPasswordForm} from '@/components/forms/RepeatPasswordForm/useRepeatPasswordForm';
import {IRepeatPasswordForm} from '../../../types/types';

const RepeatPasswordForm : FC<IRepeatPasswordForm> = ({token}) => {

	const {handleSubmit, control} = useForm();

	const {onSubmit} = useRepeatPasswordForm(token);

	const {
		FormsWrapperBox,
		FormsInput,
		FormsButton,
	} = useFormsStyle();

	return (
		<FormComponent title="Восстановление пароля">
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<FormsWrapperBox>
					<FormsInput>
						<TextFieldPasswordUI
							controller={{
								name: 'password',
								control,
								defaultValue: '',
								rules: {required: true}
							}}
							inputProps={{
								placeholder: 'Новый пароль',
								name: 'password',
								required: true,
								// helperText: 'Заполните поле "Пароль"'
							}}
						/>
					</FormsInput>
					<FormsInput>
						<TextFieldPasswordUI
							controller={{
								name: 'repeatPassword',
								control,
								defaultValue: '',
								rules: {required: true}
							}}
							inputProps={{
								placeholder: 'Повторите пароль',
								name: 'repeatPassword',
								required: true,
								// helperText: 'Заполните поле "Пароль"'
							}}
						/>
					</FormsInput>

					<FormsButton>
						<ButtonUI type="submit">
							Восстановить пароль
						</ButtonUI>
					</FormsButton>

				</FormsWrapperBox>
			</Box>
		</FormComponent>
	);
};

export default React.memo(RepeatPasswordForm);
