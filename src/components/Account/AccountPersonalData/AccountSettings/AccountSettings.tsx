import React, { FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import User from '../../../AnyPage/User/User';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import EditPencil from '../../../../UI/UIIcon/EditPencil.svg';
import { useUserStore } from '../../../../hooks/useUserStore';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import TextFieldPhoneUI from 'UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import TextFieldPasswordUI from 'UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';

import { useAccountSettingsStyle } from './style';
import {useAccountSettings} from '@/components/Account/AccountPersonalData/AccountSettings/useAccountSettings';

const AccountSettings: FC = () => {
	const {
		FormTableUI,
		FormButtonUI,
		FormTableEndUI,
		FormTextFieldUI,
		FormTableUserUI,
		FormTableTextUI,
		SettingsWrapperUI,
		FormsWrapperBoxUI,
		FormTableRowLabelUI,
		FormTextFieldWrapperUI,
		FormTextFieldPasswordWrapperUI,
	} = useAccountSettingsStyle();

	const { handleSubmit, control, setValue, getValues, setError } = useForm();

	const {onSubmit} = useAccountSettings();

	const {
		user: { verifiedEmail, email, id },
	} = useUserStore();

	// TODO: пока что задал жестко, потом переедет в хук
	useEffect(() => {
		if (email) {
			setValue('email', email);
		}
		if(!verifiedEmail && getValues('email')) {
			// setError('email', {
			// 	type: 'manual',
			// 	message: 'Почта не подтверждена',
			// });
		}
	}, [email]);

	const handlerEditClick = (): void => {
		console.log('handlerEditClick-e: ');
	};

	return (
		<SettingsWrapperUI>
			{/* TODO: вынести форму в другой файл */}
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<FormsWrapperBoxUI>

					<FormTableUserUI>
						<User />
					</FormTableUserUI>
					<FormTableUI>
						<FormTableRowLabelUI>
							<Typography variant="body2">
								Номер кабинета
							</Typography>
						</FormTableRowLabelUI>
						<FormTableTextUI>#{id}</FormTableTextUI>

						<FormTableRowLabelUI>
							<Typography variant="body2">Почта</Typography>
						</FormTableRowLabelUI>

						<FormTextFieldWrapperUI>
							<TextFieldUI
								controller={{
									name: 'email',
									control,
									defaultValue: email,
									rules: { required: true },
								}}
								inputProps={{
									name: 'email',
									type: 'email',
									required: true,
									helperText: verifiedEmail
										? 'Почта не подтверждена'
										: 'Заполните поле "Почта"',
									sx: FormTextFieldUI,
									disabled: true
								}}
								// iconProps={{
								// 	defaultIcon: EditPencil,
								// 	activeIcon: EditPencil,
								// 	onClick: handlerEditClick,
								// }}
							/>
						</FormTextFieldWrapperUI>

						<FormTableRowLabelUI>
							<Typography variant="body2">Телефон</Typography>
						</FormTableRowLabelUI>
						<FormTextFieldPasswordWrapperUI>
							<TextFieldPhoneUI
								controller={{
									name: 'phone',
									control,
									defaultValue: '',
									rules: { required: true },
								}}
								inputProps={{
									name: 'phone',
									type: 'tel',
									required: true,
									helperText: 'Заполните поле "Телефон"',
									sx: FormTextFieldUI,
								}}
								iconProps={{
									defaultIcon: EditPencil,
									activeIcon: EditPencil,
									onClick: handlerEditClick,
								}}
							/>
						</FormTextFieldPasswordWrapperUI>

						<FormTableRowLabelUI>
							<Typography variant="body2">Смена пароля</Typography>
						</FormTableRowLabelUI>
						<FormTextFieldPasswordWrapperUI>
							<TextFieldPasswordUI
								controller={{
									name: 'oldPassword',
									control,
									defaultValue: '',
									// rules: { required: true },
								}}
								inputProps={{
									// label: 'Старый пароль',
									placeholder: 'Старый пароль',
									name: 'oldPassword',
									type: 'password',
									// required: true,
									helperText: 'Заполните поле "Пароль"',
									sx: FormTextFieldUI,
								}}
							/>
						</FormTextFieldPasswordWrapperUI>

						<Typography variant="body2"></Typography>
						<FormTextFieldPasswordWrapperUI>
							<TextFieldPasswordUI
								controller={{
									name: 'newPassword',
									control,
									defaultValue: '',
									// rules: { required: true },
								}}
								inputProps={{
									// label: 'Новый пароль',
									placeholder: 'Новый пароль',
									name: 'newPassword',
									type: 'password',
									// required: true,
									helperText: 'Заполните поле "Пароль"',
									sx: FormTextFieldUI,
								}}
							/>
						</FormTextFieldPasswordWrapperUI>

						<Typography variant="body2"></Typography>
						<FormTableEndUI>
							<ButtonUI type="submit" style={FormButtonUI}>
								Сохранить
							</ButtonUI>
						</FormTableEndUI>
					</FormTableUI>
				</FormsWrapperBoxUI>
			</Box>
		</SettingsWrapperUI>
	);
};

export default React.memo(AccountSettings);
