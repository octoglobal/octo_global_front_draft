import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useEffect, useMemo} from 'react';
import {octoAxios} from '@/lib/http';
import {IOrderModel} from '@/models/IOrderModel';
import {IDefaultFetchSuccess} from '../../../../types/types';
import {ComponentType} from '@/components/AnyPage/OrderItem/OrderItem';

interface IFormStatus {
	trackNumber: string;
	orderStatus: { title: string, value: number };
}


export const useOrderStatusModal = (
	isOpen: boolean,
	orderItem: IOrderModel,
	successCallback: () => void,
	component: ComponentType,
) => {
	const methods = useForm<IFormStatus | FieldValues>();

	const collapseItems = useMemo(() => {
		if (component == 'wait') {
			return [
				{
					title: 'На складе',
					name: 'stock',
					value: 1,
				},
			];
		}
		if (component == 'stock') {
			return [
				{
					title: 'Ожидаемые',
					name: 'wait',
					value: 0,
				},
			];
		}
		return [
			{
				title: '',
				name: '',
				value: -1,
			},
		];
	}, [component]);

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
						successCallback();
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
