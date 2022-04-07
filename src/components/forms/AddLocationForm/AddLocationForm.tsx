import React, {FC, useMemo, useEffect} from 'react';
import {FieldValues, useForm} from 'react-hook-form';

import {useMobile} from '@/hooks/useMedia';
import {useAddLocation} from './useAddLocation';

import TextFieldPhoneUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

import { useAddLocationFormStyle } from './style';
import {useUserStore} from '@/hooks/useUserStore';
import { translit } from '@/lib/services/services';

interface IAddLocationForm {
	setOpenForm: (prevState : (state: boolean) => boolean) => void
}

const AddLocationForm: FC<IAddLocationForm> = ({setOpenForm}) => {
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

	const { handleSubmit, control, setError } = useForm();

	const {
		user: {
			name, surname,
			phone,
		}
	} = useUserStore();

	const {onSubmit} = useAddLocation();

	const {isMobile} = useMobile();

	const handlerCancelButton = () => {
		setOpenForm(prevState => !prevState);
	};

	const wrapperSubmit = (formData : FieldValues) => {
		onSubmit(formData);
		setOpenForm(prevState => !prevState);
	};

	const addressRegex = useMemo(() => new RegExp(/[^A-Za-z0-9#?!:;,.-_+= ]/gi), []);

	useEffect(() => {
		setError('address', {
			type: 'string',
			message: '',
		});
	}, []);

	return (
		<FormUI onSubmit={handleSubmit(wrapperSubmit)}>
			<FormWrapper>
				<FormRowTitle>Имя</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'name',
							control,
							defaultValue: translit(name),
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Имя' : '',
							name: 'name',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Почта"',
							sx: FormTextFieldUI,
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
							defaultValue: translit(surname),
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Фамилия' : '',
							name: 'surname',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
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
							defaultValue: phone,
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Телефон' : '',
							name: 'phone',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
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
							sx: FormTextFieldUI,
							helperText: 'Только латинские цифры и буквы',
						}}
						regexProps={{
							regex: addressRegex,
						}}
					/>
				</FormRowTextField>

				<FormRowTitle/>
				<FormRowButtonUI>
					<ButtonUI
						style={ButtonCancelUI}
						variant="text"
						onClick={handlerCancelButton}
					>
						Отмена
					</ButtonUI>
					<ButtonUI
						type="submit"
						style={ButtonSubmitUI}
					>
						Сохранить
					</ButtonUI>
				</FormRowButtonUI>
			</FormWrapper>

		</FormUI>
	);
};

export default React.memo(AddLocationForm);
