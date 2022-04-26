import {FieldValues, useForm} from 'react-hook-form';
import {useEffect} from 'react';

interface IFormStatus {
	trackNumber: string;
	orderStatus: { title: string, value: number };
}

const collapseItems = [
	{
		title: 'Ожидаемые',
		name: 'wait',
		value: 0,
	},
	{
		title: 'На складе',
		name: 'stock',
		value: 1,
	},
	{
		title: 'Доставлены',
		name: 'send',
		value: 2,
	},
];



export const useOrderStatusModal = (isOpen: boolean) => {
	const methods = useForm<IFormStatus | FieldValues>();
	const trackNumberProps = {
		controller: {
			name: 'trackNumber',
			control: methods.control,
			rules: {required: true},
		},
		inputProps: {
			placeholder: 'Трек номер'
		}
	};

	useEffect(() => {
		if (!isOpen) {
			methods.reset({
				trackNumber: '',
				orderStatus: undefined,
			});
		}
	}, [isOpen]);

	return {
		methods,
		collapseItems,
		trackNumberProps
	};
};
