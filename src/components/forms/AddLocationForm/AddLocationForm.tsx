import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import {useMobile} from '../../../hooks/useMedia';

import TextFieldPhoneUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldPhoneUI/TextFieldPhoneUI';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

import { useAddLocationFormStyle } from './style';

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

	const { control } = useForm();

	const {isMobile} = useMobile();

	const handlerCancelButton = () => {
		setOpenForm(prevState => !prevState);
	};

	return (
		<FormUI>
			<FormWrapper>
				<FormRowTitle>Имя</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'name',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Имя' : '',
							name: 'name',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Почта"',
							sx: FormTextFieldUI,
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Фамилия</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'surname',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Фамилия' : '',
							name: 'surname',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
							helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Телефон</FormRowTitle>
				<FormRowTextField>
					<TextFieldPhoneUI
						controller={{
							name: 'phone',
							control,
							defaultValue: '',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Телефон' : '',
							name: 'phone',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
							helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Адрес</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'address',
							control,
							defaultValue:
								'',
							rules: { required: true },
						}}
						inputProps={{
							placeholder: isMobile ? 'Адрес' : '',
							name: 'address',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
							helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormRowTextField>

				<FormRowTitle></FormRowTitle>
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