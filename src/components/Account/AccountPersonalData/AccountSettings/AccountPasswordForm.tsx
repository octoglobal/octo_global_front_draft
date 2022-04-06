import React, {FC, useMemo} from 'react';
import {Box, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';

import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldPasswordUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';
import {useAccountSettingsStyle} from '@/components/Account/AccountPersonalData/AccountSettings/style';
import {useAccountSettings} from '@/components/Account/AccountPersonalData/AccountSettings/useAccountSettings';

const AccountPasswordForm : FC = () => {

	const {
		FormTableUI,
		FormButtonUI,
		FormTableEndUI,
		FormTextFieldUI,
		FormTableRowLabelUI,
		FormTextFieldBorderUI,
		HelperBoxUI
	} = useAccountSettingsStyle();

	const {handleSubmit, control, setError, formState: {isSubmitting, isSubmitted}} = useForm();

	const {
		onSubmitPassword,
		isSubmitFormSuccess
	} = useAccountSettings(setError);

	const isSubmitForm = useMemo(
		() => isSubmitted && isSubmitFormSuccess,
		[isSubmitted, isSubmitFormSuccess]
	);

	console.log('isSubmitForm: ', isSubmitForm);
	console.log('isSubmitting: ', isSubmitting);
	console.log('isSubmitted: ', isSubmitted);
	console.log('isSubmitFormSuccess: ', isSubmitFormSuccess);

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmitPassword)}>
			<FormTableUI>
				<FormTableRowLabelUI>
					<Typography variant="body2">Смена пароля</Typography>
				</FormTableRowLabelUI>
				<FormTextFieldBorderUI>
					<TextFieldPasswordUI
						controller={{
							name: 'oldPassword',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							// label: 'Старый пароль',
							placeholder: 'Старый пароль',
							name: 'oldPassword',
							type: 'password',
							required: true,
							helperText: 'Заполните поле "Пароль"',
							sx: FormTextFieldUI,
							// autoFocus: true,
						}}
					/>
				</FormTextFieldBorderUI>

				<Typography variant="body2"/>
				<FormTextFieldBorderUI>
					<TextFieldPasswordUI
						controller={{
							name: 'newPassword',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							// label: 'Новый пароль',
							placeholder: 'Новый пароль',
							name: 'newPassword',
							type: 'password',
							required: true,
							// helperText: 'Заполните поле "Пароль"',
							sx: FormTextFieldUI,
							// autoFocus: true,
						}}
					/>
					{isSubmitForm &&
						<HelperBoxUI>
							Пароль успешно изменен
						</HelperBoxUI>
					}
				</FormTextFieldBorderUI>

				<Typography variant="body2"/>
				<FormTableEndUI>
					<ButtonUI type="submit" style={FormButtonUI}>
						Сохранить
					</ButtonUI>
				</FormTableEndUI>
			</FormTableUI>
		</Box>
	);
};

export default React.memo(AccountPasswordForm);
