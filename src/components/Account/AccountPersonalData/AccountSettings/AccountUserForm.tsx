import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import {Avatar, Box, useMediaQuery} from '@mui/material';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import TextFieldPhoneUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import EditPencil from '@/UIIcon/EditPencil.svg';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useAccountSettings} from '@/components/Account/AccountPersonalData/AccountSettings/useAccountSettings';
import {useAccountSettingsStyle} from '@/components/Account/AccountPersonalData/AccountSettings/style';
import {FieldValues, useForm} from 'react-hook-form';
import {useUserStore} from '@/hooks/useUserStore';
import {ObjectHasOwnProperty} from '@/services/services';
import {useAppSelector} from '@/hooks/useReduxHooks';

const AccountUserForm: FC = () => {

	const textPhoneRef = useRef<HTMLInputElement | null>(null);
	const textEmailRef = useRef<HTMLInputElement | null>(null);
	const textNameRef = useRef<HTMLInputElement | null>(null);
	const textSurnameRef = useRef<HTMLInputElement | null>(null);

	const {
		handleSubmit,
		getValues,
		control,
		setValue,
		setError,
		formState: {dirtyFields, isSubmitted},
		reset,
		clearErrors
	} = useForm<FieldValues>();

	const {
		user: {personalAreaId, verifiedEmail, email, phone},
		isAdmin
	} = useUserStore();

	const {
		adminSwitchUserModel,
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);

	const [isEditFIO, setIsEditFIO] = useState<boolean>(false);

	const isMobile = useMediaQuery('(max-width: 599px)');

	const dirtyPhone = useMemo(
		() => dirtyFields.phone,
		[dirtyFields.phone]
	);

	const dirtyEmail = useMemo(
		() => dirtyFields.email,
		[dirtyFields.email]
	);

	const dirtyName = useMemo(
		() => dirtyFields?.name,
		[dirtyFields?.name]
	);

	const dirtySurname = useMemo(
		() => dirtyFields?.surname,
		[dirtyFields?.surname]
	);

	const {
		onSubmitUser,
		handlerEditClick,
	} = useAccountSettings(clearErrors,setError, verifiedEmail, reset,);

	useEffect(() => {
		if (email) setValue('email', email);
		if (phone) setValue('phone', phone);
	}, []);

	const isSubmitForm = useMemo(
		() => !isSubmitted && (dirtyPhone || dirtyEmail || dirtyName || dirtySurname),
		[isSubmitted, dirtyPhone, dirtyEmail, dirtyName, dirtySurname]
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
		if (dirtyEmail && ObjectHasOwnProperty(textEmailRef, 'current')) {
			const emailFieldRef = textEmailRef.current as HTMLInputElement | null;
			if (emailFieldRef) emailFieldRef.focus();
		}
	}, [dirtyEmail]);

	useEffect(() => {
		if (dirtyName && ObjectHasOwnProperty(textNameRef, 'current')) {
			const nameFieldRef = textNameRef.current as HTMLInputElement | null;
			if (nameFieldRef) nameFieldRef.focus();
		}
	}, [dirtyName]);

	useEffect(() => {
		if (dirtySurname && ObjectHasOwnProperty(textSurnameRef, 'current')) {
			const surnameFieldRef = textSurnameRef.current as HTMLInputElement | null;
			if (surnameFieldRef) surnameFieldRef.focus();
		}
	}, [dirtySurname]);

	useEffect(() => {
		if (isAdmin) {
			const data = getValues();
			const emailValue = data?.email;
			const phoneValue = data?.phone;
			const nameValue = data?.name;
			const surnameValue = data?.surname;
			if (userEmail !== emailValue) {
				setValue('email', userEmail ? userEmail : '');
			}
			if (userPhone !== phoneValue) {
				setValue('phone', userPhone ? userPhone : '');
			}
			if (adminSwitchUserModel?.name !== nameValue) {
				setValue('name', adminSwitchUserModel?.name);
			}
			if (adminSwitchUserModel?.surname !== surnameValue) {
				setValue('surname', adminSwitchUserModel?.surname);
			}
			setIsEditFIO(false);
		}
	}, [adminSwitchIdToUser, userPhone, userEmail, adminSwitchUserModel?.name, adminSwitchUserModel?.surname]);

	// useEffect(()=>{
	// 	const data = getValues();
	// 	const phoneValue = data?.phone;

	// 	if (userPhone !== phoneValue) {
	// 		setValue('phone', userPhone ? userPhone : '');
	// 	}
	// },[dirtyPhone]);


	useEffect(() => {
		if (isEditFIO) {
			setValue('name', adminSwitchUserModel?.name);
			setValue('surname', adminSwitchUserModel?.surname);
		}
	}, [isEditFIO]);

	useEffect(() => {
		reset({});
	}, [adminSwitchIdToUser]);

	return (
		<Box component="form" onSubmit={handleSubmit(onSubmitUser)}>
			<FormTableUI>
				{isAdmin && (
					<AdminAvatarContainerMUI>
						<Avatar
							sx={{
								bgcolor: '#274D82',
								marginRight: '8px',
							}}
						/>
						{isEditFIO ? (
							<>
								<FormTextFieldBorderUI selection={true} focusBorder={true}>
									<TextFieldNameMUI>
										<TextFieldUI
											controller={{
												name: 'name',
												control,
												defaultValue: adminSwitchUserModel?.name,
											}}
											inputProps={{
												name: 'name',
												sx: {
													...FormTextFieldUI,
													padding: '10px 0 10px 10px',
												},
												inputRef: textNameRef,
											}}
										/>
									</TextFieldNameMUI>
								</FormTextFieldBorderUI>
								<FormTextFieldBorderUI selection={true} focusBorder={true}>
									<TextFieldNameMUI>
										<TextFieldUI
											controller={{
												name: 'surname',
												control,
												defaultValue: adminSwitchUserModel?.surname,
											}}
											inputProps={{
												name: 'name',
												sx: {
													...FormTextFieldUI,
													padding: '10px 0 10px 10px',
												},
												inputRef: textSurnameRef
											}}
										/>
									</TextFieldNameMUI>
								</FormTextFieldBorderUI>
							</>
						) : (
							<>
								<UserAdminNameSurnameMUI>{adminSwitchUserModel?.name}</UserAdminNameSurnameMUI>
								<UserAdminNameSurnameMUI>{adminSwitchUserModel?.surname}</UserAdminNameSurnameMUI>
								<button
									style={{border: 0, backgroundColor: 'transparent', cursor: 'pointer', height: '24px'}}
									onClick={() => setIsEditFIO(true)}
								>
									<EditPencil/>
								</button>
							</>
						)}
					</AdminAvatarContainerMUI>
				)}
				<FormContainerTopMUI>
					<FormSectionMUI>
						<FormTableSectionTopLeftMUI>
							Номер кабинета
						</FormTableSectionTopLeftMUI>
						<FormTableSectionTopRightMUI>
							<FormTableTextUI>#{userAreaId}</FormTableTextUI>
						</FormTableSectionTopRightMUI>
					</FormSectionMUI>

					<FormSectionMUI sx={{marginBottom: isMobile ? '5px' : ''}}>
						<MailLeftMUI>
							Почта
						</MailLeftMUI>
						<MailRightMUI>
							<FormTextFieldBorderUI selection={!email} focusBorder={true}>
								<TextFieldEmailMUI selection={!isAdmin}>
									<TextFieldUI
										controller={{
											name: 'email',
											control,
											defaultValue: userEmail,
										}}
										inputProps={{
											name: 'email',
											type: 'email',
											helperText: verifiedEmail ? 'Почта не подтверждена' : '',
											sx: {
												...FormTextFieldUI,
												height: isMobile ? '37px !important' : '',
												padding: isMobile ? '6px 0 6px 10px' : '10px 0 10px 10px',
											},
											disabled: !isAdmin,
											inputRef: textEmailRef,
										}}
										iconProps={{
											visibleIcon: isAdmin,
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
						<FormTextFieldBorderUI selection={isAdmin ? !!phone : !phone} focusBorder={true}>
							<FormTextFieldContainerMUI>
								<TextFieldPhoneUI
									controller={{
										name: 'phone',
										control,
										defaultValue: userPhone || '',
										rules: {required: false},
									}}
									inputProps={{
										name: 'phone',
										type: 'tel',
										required: false,
										sx: {
											...FormTextFieldUI,
											height: isMobile ? '37px !important' : '',
											'& > div':
												{
													'& > input': {
														padding: isMobile ? '6px 0 6px 10px !important' : ''
													}
												}
										},
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
	TextFieldNameMUI,
	AdminAvatarContainerMUI,
	FormTableSectionTopLeftMUI,
	UserAdminNameSurnameMUI,
	FormTableSectionTopRightMUI,
	FormSectionMUI,
	FormContainerTopMUI,
	FormTextFieldContainerMUI,
	MailLeftMUI,
	MailRightMUI
} = useAccountSettingsStyle();

export default React.memo(AccountUserForm);
