import React, {FC, useEffect} from 'react';
import {Box, Avatar, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';

import {useUserStore} from '../../../../hooks/useUserStore';
import EditPencil from '../../../../UI/UIIcon/EditPencil.svg';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';

import {useAccountSettingsStyle} from './style';

const AccountSettings: FC = () => {

	const {
		UserFIOUI,
		FormTableUI,
		UserAvatarUI,
		FormButtonUI,
		FormTextFieldUI,
		FormTableRowUI,
		FormTableEndUI,
		SettingsWrapperUI,
		FormTableUserUI,
		FormTableTextUI,
		FormsWrapperBoxUI,
		FormTableRowLabelUI,
	} = useAccountSettingsStyle();

	const {control, setValue} = useForm();

	const {
		user: {
			verifiedEmail, email,
			surname, name,
			id
		}
	} = useUserStore();

	// TODO: пока что задал жестко, потом переедет в хук
	useEffect(() => {
		if(email) {
			setValue('email', email);
		}
	}, [email]);

	return (
		<SettingsWrapperUI>
			{/* TODO: вынести форму в другой файл */}
			<Box component="form">
				<FormsWrapperBoxUI>
					<FormTableUI>
						<FormTableUserUI>
							<UserAvatarUI>
								<Avatar />
							</UserAvatarUI>
							<UserFIOUI>{name} {surname}</UserFIOUI>
						</FormTableUserUI>

						<FormTableRowUI>
							<FormTableRowLabelUI>
								<Typography variant="body2">
									Номер кабинета
								</Typography>
							</FormTableRowLabelUI>
							<FormTableTextUI>#{id}</FormTableTextUI>
						</FormTableRowUI>

						<FormTableRowUI>
							<FormTableRowLabelUI>
								<Typography variant="body2">
									Почта
								</Typography>
								<EditPencil />
							</FormTableRowLabelUI>
							<TextFieldUI
								controller={{
									name: 'email',
									control,
									defaultValue: email,
									rules: {required: true}
								}}
								inputProps={{
									// label: 'Новый пароль',
									name: 'email',
									type: 'email',
									required: true,
									helperText: verifiedEmail ? 'Почта не подтверждена' : 'Заполните поле "Почта"',
									sx: FormTextFieldUI
								}}
							/>
						</FormTableRowUI>

						<FormTableRowUI>
							<FormTableRowLabelUI>
								<Typography variant="body2">
									Телефон
								</Typography>
								<EditPencil />
							</FormTableRowLabelUI>
							<TextFieldUI
								controller={{
									name: 'phone',
									control,
									defaultValue: '',
									rules: {required: true}
								}}
								inputProps={{
									name: 'phone',
									type: 'text',
									required: true,
									helperText: 'Заполните поле "Телефон"',
									sx: FormTextFieldUI
								}}
							/>
						</FormTableRowUI>

						<FormTableRowUI>
							<Typography variant="body2">
								Смена пароля
							</Typography>
							<TextFieldUI
								controller={{
									name: 'oldPassword',
									control,
									defaultValue: '',
									rules: {required: true}
								}}
								inputProps={{
									label: 'Старый пароль',
									name: 'oldPassword',
									type: 'password',
									required: true,
									helperText: 'Заполните поле "Пароль"',
									sx: FormTextFieldUI
								}}
							/>
						</FormTableRowUI>

						<FormTableEndUI>
							<TextFieldUI
								controller={{
									name: 'newPassword',
									control,
									defaultValue: '',
									rules: {required: true}
								}}
								inputProps={{
									label: 'Новый пароль',
									name: 'newPassword',
									type: 'password',
									required: true,
									helperText: 'Заполните поле "Пароль"',
									sx: FormTextFieldUI
								}}
							/>
						</FormTableEndUI>

						<FormTableEndUI>
							<ButtonUI
								type='submit'
								style={FormButtonUI}
							>
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
