import {FieldValues, useForm} from 'react-hook-form';
import {useMemo, useState} from 'react';
import {octoAxios} from '@/lib/http';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {orderWaitSlice} from '@/reducers/orderWaitSlice/orderWaitSlice';
import { useMediaQuery } from '@mui/material';
import {useUserStore} from '@/hooks/useUserStore';

interface IFormData {
	title: string;
	track_number: string;
	comment: string;
}

interface IAddOrderSuccess {
	message: 'success'
}

export const useAccountOrdersAdd = () => {
	const dispatch = useAppDispatch();
	const isMobile = useMediaQuery('(max-width: 1025px)');
	const {control, handleSubmit, reset} = useForm<IFormData | FieldValues>();
	const {isAdmin} = useUserStore();
	const {adminSwitchIdToUser} = useAppSelector(state => state.adminReducer);

	const [isAddOrder, setIsAddOrder] = useState<boolean>(false);
	const [formMessage, setFormMessage] = useState<string>('');

	const handleToggleOrder = () => {
		setIsAddOrder(prevState => !prevState);
	};

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
		const url = isAdmin ? '/admin/orders' : '/user/orders';
		const sendData = isAdmin ?
			{
				...data,
				statusId: 0,
				userId: adminSwitchIdToUser
			}
			: data;
		await octoAxios.post<IAddOrderSuccess>(url, sendData)
			.then(response => {
				if (response.data.message === 'success') {
					setFormMessage('Посылка успешно добавлена');
					setIsAddOrder(true);
					dispatch(orderWaitSlice.actions.defaultData());
					reset({
						title: '',
						track_number: '',
						comment: '',
					});
					return;
				}
				setFormMessage(submitErrors(500));
			})
			.catch(e => setFormMessage(submitErrors(e.response.status)));
		setTimeout(() => {
			setFormMessage('');
		}, 5000);
	};

	return {
		control,
		isMobile,
		onSubmit,
		isAddOrder,
		formMessage,
		handleSubmit,
		textFieldDesc,
		textFieldName,
		setIsAddOrder,
		handleToggleOrder,
		textFieldTrackNumber,
	};
};
