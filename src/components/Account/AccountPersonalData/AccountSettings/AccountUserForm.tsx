import React, {FC, useEffect, useMemo, useRef} from 'react';
import {Box, Typography} from '@mui/material';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import TextFieldPhoneUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import EditPencil from '@/UIIcon/EditPencil.svg';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useAccountSettings} from '@/components/Account/AccountPersonalData/AccountSettings/useAccountSettings';
import {useAccountSettingsStyle} from '@/components/Account/AccountPersonalData/AccountSettings/style';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {ObjectHasOwnProperty} from '@/services/services';

const AccountUserForm: FC = () => {

	const {
		FormTableUI,
		FormButtonUI,
		FormTableEndUI,
		FormTextFieldUI,
		FormTableTextUI,
		FormTableRowLabelUI,
		FormTextFieldBorderUI,
		// FormTextFieldFocusBorder,
		HelperBoxUI
	} = useAccountSettingsStyle();

	const textPhoneRef = useRef<HTMLInputElement | null>(null);

	const {handleSubmit, control, setValue, setError, formState: {dirtyFields, isSubmitted}} = useForm();

	const {
		user: {personalAreaId, verifiedEmail, email, phone},
	} = useUserStore();

	const dirtyPhone = useMemo(
		() => dirtyFields.phone,
		[dirtyFields.phone]
	);

	const {
		onSubmitUser,
		handlerConfirmEmail,
		handlerEditClick,
		showEmailPromt
	} = useAccountSettings(setError, verifiedEmail);

	useEffect(() => {
		if (email) setValue('email', email);
		if (phone) setValue('phone', phone);
	}, []);

	const isSubmitForm = useMemo(
		() => !isSubmitted && dirtyPhone,
		[isSubmitted, dirtyPhone]
	);

	// console.log('isSubmitForm: ', isSubmitForm);


	useEffect(() => {
		if (dirtyPhone && ObjectHasOwnProperty(textPhoneRef, 'current')) {
			const phoneFieldRef = textPhoneRef.current as HTMLInputElement | null;
			if (phoneFieldRef) phoneFieldRef.focus();
		}
	}, [dirtyPhone]);

	return (
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

				<FormTextFieldBorderUI selection={false}>
					<TextFieldUI
						controller={{
							name: 'email',
							control,
							defaultValue: email,
							// rules: {required: true},
						}}
						inputProps={{
							name: 'email',
							type: 'email',
							// required: true,
							helperText: verifiedEmail ? 'Почта не подтверждена' : '',
							sx: FormTextFieldUI,
							disabled: true
						}}
					/>
					{showEmailPromt && (
						<HelperBoxUI onClick={handlerConfirmEmail}>
							Подтвердите почту
						</HelperBoxUI>
					)}
				</FormTextFieldBorderUI>

				<FormTableRowLabelUI>
					<Typography variant="body2">Телефон</Typography>
				</FormTableRowLabelUI>

				<FormTextFieldBorderUI selection={!phone} focusBorder={true}>
					<TextFieldPhoneUI
						controller={{
							name: 'phone',
							control,
							defaultValue: phone || '',
							rules: {required: true},
						}}
						inputProps={{
							name: 'phone',
							type: 'tel',
							required: true,
							// helperText: 'Заполните поле "Телефон"',
							sx: FormTextFieldUI,
							// autoFocus: true
							inputRef: textPhoneRef
						}}
						iconProps={{
							editIcon: true,
							defaultIcon: EditPencil,
							activeIcon: EditPencil,
							onClick: handlerEditClick,
						}}
					/>
				</FormTextFieldBorderUI>

				{isSubmitForm && (
					<>
						<FormTableRowLabelUI/>

						<FormTableEndUI>
							<ButtonUI
								type="submit"
								style={FormButtonUI}
							>
								Сохранить
							</ButtonUI>
						</FormTableEndUI>
					</>
				)}
			</FormTableUI>
		</Box>
	);
};

export default React.memo(AccountUserForm);
