import {FieldValues, useForm} from 'react-hook-form';
import {useMemo, useState} from 'react';
import {octoAxios} from '@/lib/http';

interface IFormData {
	title: string;
	track_number: string;
	comment: string;
}

interface IAddOrderSuccess {
	message: 'success'
}

export const useAccountOrdersAdd = () => {

	const {control, handleSubmit, reset} = useForm<IFormData | FieldValues>();
	const [formMessage, setFormMessage] = useState<string>('');

	const getControlObj = (name: string, placeholder: string) => {
		return {
			controller: {
				name,
				control,
				rules: {required: true}
			},
			inputProps: {
				placeholder: placeholder
			}
		};
	};

	const textFieldName = useMemo(() => (
		getControlObj('title', 'Название')
	), []);

	const textFieldTrackNumber = useMemo(() => (
		getControlObj('track_number', 'Трек номер')
	), []);

	const textFieldDesc = useMemo(() => (
		getControlObj('comment', 'Комментарий')
	), []);

	const submitErrors = (status: number) => {
		switch (status) {
		case 409:
			return 'Посылка с текущем трек номером уже добавлена';
		case 422:
			return 'Неправильная дата';
		case 403:
			return 'Пользователь не найден';
		default:
			return 'Непредвиденная ошибка';
		}
	};


	const onSubmit = async (data: IFormData | FieldValues) => {
		await octoAxios.post<IAddOrderSuccess>('/user/orders', data)
			.then(response => {
				if (response.data.message === 'success') {
					setFormMessage('Посылка успешно добавлена');
					return;
				}
				setFormMessage(submitErrors(500));
			})
			.catch(e => setFormMessage(submitErrors(e.response.status)));
		reset({
			title: '',
			track_number: '',
			comment: '',
		});
		setTimeout(() => {
			setFormMessage('');
		}, 5000);
	};

	return {
		control,
		onSubmit,
		formMessage,
		handleSubmit,
		textFieldDesc,
		textFieldName,
		textFieldTrackNumber,
	};
};
