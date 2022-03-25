import React, {FC} from 'react';
import {Box } from '@mui/material';
import {useForm} from 'react-hook-form';

import Basket from '../../../UI/UIIcon/Basket.svg';
import {useAddLocationFormStyle} from './style';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

interface IAddLocationForm {
	disabledTextField?: boolean
}

const AddLocationForm: FC<IAddLocationForm> = ({disabledTextField = false}) => {
	const {
		FormUI,
		FormWrapper,
		FormRowTitle,
		FormRowTextField,
		FormTextFieldUI,
		ButtonSubmitUI,
		FormIconUI
	} = useAddLocationFormStyle();

	const {control} = useForm();

	const handlerDeleteLocation = () => {
		if(!handlerDeleteLocation) return;

		// TODO: добавить проверку на подтверждения удаления
		console.log('handlerDeleteLocation');
	}

	return (
		<FormUI>
			<FormWrapper>
				<FormRowTitle>Имя</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'name',
							control,
							defaultValue: 'Anastasia',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'Email',
							name: 'name',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Почта"',
							sx: FormTextFieldUI,
							disabled: disabledTextField ? true : false
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Фамилия</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'surname',
							control,
							defaultValue: 'Khorobrykh',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'text',
							name: 'surname',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
							helperText: 'Заполните поле "Почта"',
							disabled: disabledTextField ? true : false
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Телефон</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'phone',
							control,
							defaultValue: '+7 963 785 78 45',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'Email',
							name: 'phone',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
							helperText: 'Заполните поле "Почта"',
							disabled: disabledTextField ? true : false
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Адрес</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'address',
							control,
							defaultValue: 'г. Челябинск, ул. Пушкина, д. 52 кв. 88',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'Email',
							name: 'address',
							type: 'text',
							required: true,
							sx: FormTextFieldUI,
							helperText: 'Заполните поле "Почта"',
							disabled: disabledTextField ? true : false
						}}
					/>
				</FormRowTextField>

				<FormRowTitle></FormRowTitle>
				{!disabledTextField && (
				<FormRowTextField>
					<ButtonUI
						type="submit"
						style={ButtonSubmitUI}
					>
						Сохранить
					</ButtonUI>
				</FormRowTextField>
				)}

			</FormWrapper>
			{disabledTextField && (
				<FormIconUI onClick={handlerDeleteLocation}>
					<Basket />
				</FormIconUI>
			)}
		</FormUI>
	);
};

export default React.memo(AddLocationForm);
