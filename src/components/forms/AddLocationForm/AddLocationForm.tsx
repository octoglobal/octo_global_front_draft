import React, {FC, useMemo, useEffect} from 'react';
import {FieldValues, useForm } from 'react-hook-form';

import {useMobile} from '@/hooks/useMedia';
import {useAddLocation} from './useAddLocation';

import TextFieldPhoneUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

import { useAddLocationFormStyle } from './style';
import {useUserStore} from '@/hooks/useUserStore';
import { translit } from '@/lib/services/services';
import { SxProps } from '@mui/material';

interface IAddLocationForm {
	setOpenForm: (prevState : (state: boolean) => boolean) => void
	isVisibleCancel?: boolean
	isAddressProperty?: boolean // флаг, который показываем нам, что мы пришли со странички оформления продукта (компонента - AccountOrdersAddress)
	buttonStyles?: SxProps
	buttonSend?: string;
	textFieldStyles?: SxProps
}

const AddLocationForm: FC<IAddLocationForm> = (
	{
		setOpenForm,
		isVisibleCancel = true,
		isAddressProperty = false,
		buttonStyles = {},
		buttonSend = '',
		textFieldStyles = {},
	}
) => {
	const {
		FormUI,
		FormWrapper,
		FormRowTitle,
		FormRowTextField,
		FormTextFieldUI,
		ButtonSubmitUI,
		ButtonCancelUI,
		FormRowButtonUI,
	} = useAddLocationFormStyle();

	const { handleSubmit, control, setError,reset } = useForm();	
	


	const {
		// user: {
		// 	name, surname,
		// 	phone
		// },
		isAdmin,
		userPhone,
		userName,
		userSurname,
		adminSwitchUserModel
	} = useUserStore();

	const {onSubmit} = useAddLocation();

	const {isMobile} = useMobile();

	const handlerCancelButton = () => {
		setOpenForm(prevState => !prevState);
	};

	const wrapperSubmit = (formData : FieldValues) => {
		if (isAdmin && adminSwitchUserModel){
			onSubmit(formData,isAdmin,adminSwitchUserModel.id);
		}else {
			onSubmit(formData);
		}
	
		setOpenForm(prevState => !prevState);
		reset({});
	};

	const addressRegex = useMemo(() => new RegExp(/[^A-Za-z0-9#?!:;,.-_+= ]/gi), []);

	const TextFieldStyles = useMemo(
		() => ({...FormTextFieldUI, ...textFieldStyles} as SxProps),
		[textFieldStyles]
	);

	useEffect(() => {
		setError('address', {
			type: 'string',
			message: '',
		});
	}, []);

	// для очистки полей при смене пользователя из под админа по не работает
	// useEffect(() => {
	// 	console.log('u34923894293439');
	// 	reset({});
	// }, [adminSwitchIdToUser]);
	
	return (
		<FormUI onSubmit={handleSubmit(wrapperSubmit)}>
			<FormWrapper increaseFormField={isAddressProperty}>
				<FormRowTitle>Имя</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'name',
							control,
							defaultValue: translit(userName),
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Имя' : '',
							name: 'name',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Почта"',
							sx: TextFieldStyles,
						}}
						regexProps={{
							regex: addressRegex,
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Фамилия</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'surname',
							control,
							defaultValue: translit(userSurname),
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Фамилия' : '',
							name: 'surname',
							type: 'text',
							required: true,
							sx: TextFieldStyles,
							// helperText: 'Заполните поле "Почта"',
						}}
						regexProps={{
							regex: addressRegex,
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Телефон</FormRowTitle>
				<FormRowTextField>
					<TextFieldPhoneUI
						controller={{
							name: 'phone',
							control,
							defaultValue: userPhone,
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Телефон' : '',
							name: 'phone',
							type: 'text',
							required: true,
							sx: TextFieldStyles,
							// helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Адрес</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'address',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Адрес' : '',
							name: 'address',
							type: 'text',
							required: true,
							sx: TextFieldStyles,
							helperText: isAddressProperty ? '' : 'Только латинские буквы и цифры',
						}}
						regexProps={{
							regex: addressRegex,
						}}
					/>
				</FormRowTextField>

				<FormRowTitle/>
				<FormRowButtonUI>
					{isVisibleCancel && (
						<ButtonUI
							style={ButtonCancelUI}
							variant="text"
							onClick={handlerCancelButton}
						>
							Отмена
						</ButtonUI>
					)}
					<ButtonUI
						type="submit"
						style={ButtonSubmitUI}
						sx={buttonStyles}
					>
						{buttonSend ? buttonSend : 'Сохранить'}
					</ButtonUI>
				</FormRowButtonUI>
			</FormWrapper>

		</FormUI>
	);
};

export default React.memo(AddLocationForm);
