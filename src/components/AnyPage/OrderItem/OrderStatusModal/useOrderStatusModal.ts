import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useEffect} from 'react';
import {octoAxios} from '@/lib/http';
import {IOrderModel} from '@/models/IOrderModel';
import {IDefaultFetchSuccess} from '../../../../types/types';

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
];



export const useOrderStatusModal = (isOpen: boolean, orderItem: IOrderModel) => {
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
		if (orderItem.trackNumber && isOpen) {
			methods.setValue('trackNumber', orderItem.trackNumber);
		}
	}, [orderItem, isOpen]);


	const onSubmit: SubmitHandler<IFormStatus | FieldValues> = (data) => {
		if (data?.trackNumber && data?.orderStatus?.value !== undefined) {
			try {
				octoAxios.post<IDefaultFetchSuccess>('/admin/orders', {
					userId: orderItem.userId,
					track_number:orderItem.trackNumber,
					title: orderItem.title,
					comment: orderItem.comment,
					statusId: data.orderStatus.value
				}).then(r => {
					if (r.data.message === 'success') {
						console.log(123);
					}
				});
			} catch (e) {
				throw new Error('Error change status');
			}
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
		onSubmit,
		collapseItems,
		trackNumberProps
	};
};
