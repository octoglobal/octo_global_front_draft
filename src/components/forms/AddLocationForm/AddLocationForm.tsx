import React, {FC} from 'react';
import {Box } from '@mui/material';
import {useForm} from 'react-hook-form';

import {useAddLocationFormStyle} from './style';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';

const AddLocationForm: FC = () => {
	const {
		FormWrapper,
		FormRowTitle,
		FormRowTextField,
		ButtonSubmitUI,
	} = useAddLocationFormStyle();

	const {control} = useForm();

	return (
		<Box component="form">
			<FormWrapper>
				<FormRowTitle>Имя</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'name',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'Email',
							name: 'name',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Почта"',
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
							rules: {required: true}
						}}
						inputProps={{
							// label: 'text',
							name: 'surname',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormRowTextField>

				<FormRowTitle>Телефон</FormRowTitle>
				<FormRowTextField>
					<TextFieldUI
						controller={{
							name: 'phone',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'Email',
							name: 'phone',
							type: 'text',
							required: true,
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
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							// label: 'Email',
							name: 'address',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Почта"',
						}}
					/>
				</FormRowTextField>

				<FormRowTitle></FormRowTitle>
				<FormRowTextField>
					<ButtonUI
						type="submit"
						style={ButtonSubmitUI}
					>
						Сохранить
					</ButtonUI>
				</FormRowTextField>
			</FormWrapper>
		</Box>
	);
};

export default React.memo(AddLocationForm);
