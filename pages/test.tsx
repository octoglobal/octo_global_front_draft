import React from 'react';
import {SubmitHandler, useForm, FieldValues} from 'react-hook-form';
import TextFieldUI from '../src/UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from '../src/UI/UIComponents/ButtonUI/ButtonUI';
import {Box} from '@mui/material';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
interface FormData {
	readonly test: string;
	readonly test2: string
}

const Test = () => {
	const {control, handleSubmit} = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const innerData = data as FormData;
		console.log(innerData);
	};

	return (
		<HeaderLayout>
			<div>
				<Box component='form' onSubmit={handleSubmit(onSubmit)}>
					<TextFieldUI
						controller={{
							name: 'test',
							control,
							defaultValue: '123'
						}}
					/>
					<TextFieldUI
						controller={{
							name: 'test2',
							control,
							defaultValue: '321'
						}}
					/>
					<ButtonUI type='submit'>
					Тест
					</ButtonUI>
				</Box>
			</div>
		</HeaderLayout>
		
	);
};

export default Test;
