import React, {FC, useEffect, useMemo} from 'react';
import {Box, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';

import User from '../../../AnyPage/User/User';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import EditPencil from '../../../../UI/UIIcon/EditPencil.svg';
import {useUserStore} from '@/hooks/useUserStore';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import TextFieldPhoneUI from 'UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import TextFieldPasswordUI from 'UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';

import {useAccountSettingsStyle} from './style';
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
		FormTextFieldBorderUI,
		HelperBoxUI
	} = useAccountSettingsStyle();

	const {handleSubmit, control, setValue, setError, formState: {dirtyFields, isSubmitting, isSubmitted}} = useForm();

	const {
		user: {personalAreaId, verifiedEmail, email, phone},
	} = useUserStore();

	const {
		onSubmitUser,
		onSubmitPassword,
		handlerConfirmEmail,
		handlerEditClick,
		showEmailPromt
	} = useAccountSettings(verifiedEmail, setError);

	const isSubmitForm = useMemo(
		() => !isSubmitted,
		[isSubmitting]
	);

	// TODO: пока что задал жестко, потом переедет в хук
	useEffect(() => {
		if (email) setValue('email', email);
		if (phone) setValue('phone', phone);
	}, [email, phone]);

	return (
		<SettingsWrapperUI>
			{/* TODO: вынести форму в другой файл */}
			<FormsWrapperBoxUI>
				<FormTableUserUI>
					<User/>
				</FormTableUserUI>

				<Box component="form" onSubmit={handleSubmit(onSubmitUser)}>

					<FormTableUI>
						<FormTableRowLabelUI>
							<Typography variant="body2">
								Номер кабинета
							</Typography>
						</FormTableRowLabelUI>
						<FormTableTextUI>#{personalAreaId}</FormTableTextUI>

						<FormTableRowLabelUI>
							<Typography variant="body2">Почта</Typography>
						</FormTableRowLabelUI>

						<FormTextFieldBorderUI selection={!verifiedEmail}>
							<TextFieldUI
								controller={{
									name: 'email',
									control,
									defaultValue: email,
									rules: {required: true},
								}}
								inputProps={{
									name: 'email',
									type: 'email',
									required: true,
									helperText: verifiedEmail ? 'Почта не подтверждена' : '',
									sx: FormTextFieldUI,
									disabled: verifiedEmail
								}}
							/>
							{showEmailPromt &&
								<HelperBoxUI
									onClick={handlerConfirmEmail}
								>
									Подтвердите почту
								</HelperBoxUI>
							}
						</FormTextFieldBorderUI>

						<FormTableRowLabelUI>
							<Typography variant="body2">Телефон</Typography>
						</FormTableRowLabelUI>
						<FormTextFieldBorderUI>
							<TextFieldPhoneUI
								controller={{
									name: 'phone',
									control,
									defaultValue: phone,
									rules: {required: true},
								}}
								inputProps={{
									name: 'phone',
									type: 'tel',
									required: true,
									// helperText: 'Заполните поле "Телефон"',
									sx: FormTextFieldUI,
									// autoFocus: true
								}}
								iconProps={{
									defaultIcon: EditPencil,
									activeIcon: EditPencil,
									onClick: handlerEditClick,
								}}
							/>
						</FormTextFieldBorderUI>

						{isSubmitForm && (
							dirtyFields.phone && (
								<>
									<FormTableRowLabelUI/>

									<FormTableEndUI>
										<ButtonUI type="submit" style={FormButtonUI}>
											Сохранить
										</ButtonUI>
									</FormTableEndUI>
								</>
							)
						)}
					</FormTableUI>
				</Box>


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

			</FormsWrapperBoxUI>
		</SettingsWrapperUI>
	);
};

export default React.memo(AccountSettings);
