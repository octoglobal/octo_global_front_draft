import React, { FC, useEffect } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask'

import { useUserStore } from '../../../../hooks/useUserStore';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import User from '../../../AnyPage/User/User';

import EditPencil from '../../../../UI/UIIcon/EditPencil.svg';
import EyeOpen from '../../../../UI/UIIcon/EyeOpen.svg';
import EyeClose from '../../../../UI/UIIcon/EyeClose.svg';

import {PhoneMask} from '../../../../lib/services/services';
import { useAccountSettingsStyle } from './style';
import TextFieldPasswordUI from 'UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';

const AccountSettings: FC = () => {
	const {
		UserFIOUI,
		FormTableUI,
		UserAvatarUI,
		FormButtonUI,
		FormTextFieldUI,
		FormTextFieldWrapperUI,
		FormTextFieldPasswordWrapperUI,
		FormTableRowUI,
		FormTableEndUI,
		SettingsWrapperUI,
		FormTableUserUI,
		FormTableTextUI,
		FormsWrapperBoxUI,
		FormTableRowLabelUI,
	} = useAccountSettingsStyle();

	const { control, setValue, getValues, setError, formState: { errors } } = useForm();

	const {
		user: { verifiedEmail, email, surname, name, id },
	} = useUserStore();

	// TODO: пока что задал жестко, потом переедет в хук
	useEffect(() => {
		if (email) {
			setValue('email', email);
		}
		if(!verifiedEmail && getValues('email')) {
			setError('email', {
				type: "manual",
				message: "Почта не подтверждена",
			});
		}
	}, [email]);

	const handlerEditClick = (): void => {
		console.log('handlerEditClick-e: ');
	};

	return (
		<SettingsWrapperUI>
			{/* TODO: вынести форму в другой файл */}
			<Box component="form">
				<FormsWrapperBoxUI>
					{/* TODO: использовать готовый компонент User */}
					<FormTableUserUI>
						{/* <User name={name} surname={surname} /> */}
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
									// label: 'Новый пароль',
									name: 'email',
									type: 'email',
									required: true,
									helperText: verifiedEmail
										? 'Почта не подтверждена'
										: 'Заполните поле "Почта"',
									sx: FormTextFieldUI,
								}}
								iconProps={{
									defaultIcon: EditPencil,
									activeIcon: EditPencil,
									onClick: handlerEditClick,
								}}
							/>
						</FormTextFieldWrapperUI>


						<FormTableRowLabelUI>
							<Typography variant="body2">Телефон</Typography>
						</FormTableRowLabelUI>
						<FormTextFieldWrapperUI>
							<TextFieldUI
								controller={{
									name: 'phone',
									control,
									defaultValue: '',
									rules: { required: true },
								}}
								inputProps={{
									name: 'phone',
									type: 'tel',
									autoComplete: "tel",
									required: true,
									helperText: 'Заполните поле "Телефон"',
									sx: FormTextFieldUI,
									onChange: () => console.log('onChange')
								}}
								iconProps={{
									defaultIcon: EditPencil,
									activeIcon: EditPencil,
									onClick: handlerEditClick,
								}}
							>
								<InputMask mask="+9 999 999 99 99" maskChar=" " />
							</TextFieldUI>
						</FormTextFieldWrapperUI>


						<FormTableRowLabelUI>
							<Typography variant="body2">Смена пароля</Typography>
						</FormTableRowLabelUI>
						<FormTextFieldPasswordWrapperUI>
							<TextFieldPasswordUI
								controller={{
									name: 'oldPassword',
									control,
									defaultValue: '',
									rules: { required: true },
								}}
								inputProps={{
									label: 'Старый пароль',
									name: 'oldPassword',
									type: 'password',
									required: true,
									helperText: 'Заполните поле "Пароль"',
									sx: FormTextFieldUI,
								}}
								iconProps={{
									defaultIcon: EyeOpen,
									activeIcon: EyeClose,
									// onClick: handlerShowPasswordClick,
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
									rules: { required: true },
								}}
								inputProps={{
									label: 'Новый пароль',
									name: 'newPassword',
									type: 'password',
									required: true,
									helperText: 'Заполните поле "Пароль"',
									sx: FormTextFieldUI,
								}}
								iconProps={{
									defaultIcon: EyeOpen,
									activeIcon: EyeClose,
									// onClick: handlerShowPasswordClick,
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
