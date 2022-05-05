import React, {FC, useEffect, useMemo, useRef} from 'react';
import {Box} from '@mui/material';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import TextFieldPhoneUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import EditPencil from '@/UIIcon/EditPencil.svg';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useAccountSettings} from '@/components/Account/AccountPersonalData/AccountSettings/useAccountSettings';
import {useAccountSettingsStyle} from '@/components/Account/AccountPersonalData/AccountSettings/style';
import {useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {ObjectHasOwnProperty} from '@/services/services';
import {useAppSelector} from '@/hooks/useReduxHooks';

const AccountUserForm: FC = () => {

	const textPhoneRef = useRef<HTMLInputElement | null>(null);

	const {handleSubmit, getValues, control, setValue, setError, formState: {dirtyFields, isSubmitted}} = useForm();

	const {
		user: {personalAreaId, verifiedEmail, email, phone},
		isAdmin
	} = useUserStore();

	const {
		adminSwitchUserModel
	} = useAppSelector(state => state.adminReducer);

	const dirtyPhone = useMemo(
		() => dirtyFields.phone,
		[dirtyFields.phone]
	);

	const {
		onSubmitUser,
		handlerEditClick,
	} = useAccountSettings(setError, verifiedEmail);

	useEffect(() => {
		if (email) setValue('email', email);
		if (phone) setValue('phone', phone);
	}, []);

	const isSubmitForm = useMemo(
		() => !isSubmitted && dirtyPhone,
		[isSubmitted, dirtyPhone]
	);

	const userAreaId = useMemo(() => {
		if (isAdmin && adminSwitchUserModel) {
			return adminSwitchUserModel.personalAreaId;
		} else {
			return personalAreaId;
		}
	}, [personalAreaId, adminSwitchUserModel]);

	const userEmail = useMemo(() => {
		if (isAdmin && adminSwitchUserModel) {
			return adminSwitchUserModel.email;
		} else {
			return email;
		}
	}, [personalAreaId, adminSwitchUserModel]);

	const userPhone = useMemo(() => {
		if (isAdmin && adminSwitchUserModel) {
			return adminSwitchUserModel.phone;
		} else {
			return phone;
		}
	}, [personalAreaId, adminSwitchUserModel]);

	useEffect(() => {
		if (dirtyPhone && ObjectHasOwnProperty(textPhoneRef, 'current')) {
			const phoneFieldRef = textPhoneRef.current as HTMLInputElement | null;
			if (phoneFieldRef) phoneFieldRef.focus();
		}
	}, [dirtyPhone]);

	useEffect(() => {
		if (isAdmin) {
			const data = getValues();
			const emailValue = data?.email;
			const phoneValue = data?.phone;
			if (userEmail !== emailValue) {
				setValue('email', userEmail);
			}
			if (userPhone !== phoneValue) {
				setValue('phone', userPhone);
			}
		}
	}, [userEmail, userPhone]);

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmitUser)}>
			<FormTableUI>
				<FormContainerTopMUI>
					<FormSectionMUI>
						<FormTableSectionTopLeftMUI>
							Номер кабинета
						</FormTableSectionTopLeftMUI>
						<FormTableSectionTopRightMUI>
							<FormTableTextUI>#{userAreaId}</FormTableTextUI>
						</FormTableSectionTopRightMUI>
					</FormSectionMUI>

					<FormSectionMUI>
						<MailLeftMUI>
							Почта
						</MailLeftMUI>
						<MailRightMUI>
							<FormTextFieldBorderUI selection={false}>
								<TextFieldEmailMUI>
									<TextFieldUI
										controller={{
											name: 'email',
											control,
											defaultValue: userEmail,
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
								</TextFieldEmailMUI>
								{/* {showEmailPromt && (
									<HelperBoxUI onClick={handlerConfirmEmail}>
										Подтвердите почту
									</HelperBoxUI>
								)} */}
							</FormTextFieldBorderUI>

						</MailRightMUI>
					</FormSectionMUI>
				</FormContainerTopMUI>

				<FormTableTopSectionMUI>
					<FormTableSectionLeftMUI>
						Телефон
					</FormTableSectionLeftMUI>
					<FormTableSectionRightMUI>
						<FormTextFieldBorderUI selection={!phone} focusBorder={true}>
							<FormTextFieldContainerMUI>
								<TextFieldPhoneUI
									controller={{
										name: 'phone',
										control,
										defaultValue: userPhone || '',
										rules: {required: true},
									}}
									inputProps={{
										name: 'phone',
										type: 'tel',
										required: true,
										// helperText: 'Заполните поле "Телефон"',
										sx: FormTextFieldUI,
										// autoFocus: true,
										inputRef: textPhoneRef
									}}
									iconProps={{
										editIcon: true,
										defaultIcon: EditPencil,
										activeIcon: EditPencil,
										onClick: handlerEditClick,
									}}
								/>
							</FormTextFieldContainerMUI>
						</FormTextFieldBorderUI>
					</FormTableSectionRightMUI>
				</FormTableTopSectionMUI>
				{isSubmitForm && (<>
					<FormTableEndUI>
						<ButtonUI
							type="submit"
							style={FormButtonUI}
						>
							Сохранить
						</ButtonUI>
					</FormTableEndUI>
				</>)}

			</FormTableUI>
		</Box>


	);
};

const {
	FormTableUI,
	FormButtonUI,
	FormTableEndUI,
	FormTextFieldUI,
	FormTableTextUI,
	FormTextFieldBorderUI,
	FormTableSectionLeftMUI,
	FormTableSectionRightMUI,
	FormTableTopSectionMUI,
	TextFieldEmailMUI,
	FormTableSectionTopLeftMUI,
	FormTableSectionTopRightMUI,
	FormSectionMUI,
	FormContainerTopMUI,
	FormTextFieldContainerMUI,
	MailLeftMUI,
	MailRightMUI

} = useAccountSettingsStyle();

export default React.memo(AccountUserForm);
