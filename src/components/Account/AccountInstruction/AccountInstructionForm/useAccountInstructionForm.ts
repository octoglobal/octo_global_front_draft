import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {validateUrl} from '@/services/services';
import {octoAxios} from '@/lib/http';

interface IFormData {
	url: string;
	count: number;
}

export const useAccountInstructionForm = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { control, handleSubmit, setError, reset } = useForm<IFormData>();
	const [isVisibleSuccessModal, setIsVisibleSuccessModal] = useState<boolean>(false);

	const handleUpCounter = (value: number, onChange: (state: number) => void) => {
		return () => {
			onChange(value + 1);
		};
	};

	const handleCloseTooltip = () => {
		setOpen(false);
	};

	const handleDownCounter = (value: number, onChange: (state: number) => void) => {
		return () => {
			if (value - 1) {
				onChange(value - 1);
			}
		};
	};

	const handleCloseModal = () => {
		setIsVisibleSuccessModal(false);
	};

	const handleTooltipOpen = () => {
		setOpen((prev)=>!prev);
	};

	const onSubmit = async (data: IFormData) => {
		if (validateUrl(data.url)) {
			const response = await octoAxios.post<{message: 'success'}>('/user/send_message/redemption_of_goods', data).then(r => r.data);
			if (response?.message === 'success') {
				setIsVisibleSuccessModal(true);
				reset({url: '', count: 1});
			} else {
				setError('url', {type: 'value', message: 'Ошибка при отправке'});
			}
		} else {
			setError('url', {type: 'validate', message: 'Введите корректную ссылку'});
		}
	};

	return {
		open,
		control,
		setOpen,
		onSubmit,
		handleCloseTooltip,
		isVisibleSuccessModal,
		handleUpCounter,
		handleDownCounter,
		handleSubmit,
		handleCloseModal,
		handleTooltipOpen,
	};
};
