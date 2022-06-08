import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useMemo } from 'react';
import { octoAxios } from '@/lib/http';
import { IOrderModel } from '@/models/IOrderModel';
import { IDefaultFetchSuccess } from '../../../../types/types';
import { ComponentType } from '@/components/AnyPage/OrderItem/OrderItem';
import { useAppDispatch } from '@/hooks/useReduxHooks';
import { fetchChangeStatusPackageToSend } from '@/reducers/orderStockSlice/asynThunk/stockApi';

interface IFormStatus {
	trackNumber: string;
	orderStatus: { title: string; value: number };
}

export const useOrderStatusModal = (
	isOpen: boolean,
	orderItem: IOrderModel,
	successCallback: () => void,
	component: ComponentType | 'stock2',
	packageChange: boolean,
	submitStatus: number
) => {
	const dispatch = useAppDispatch();
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
		if (component == 'stock2') {
			return [
				{
					title: 'Отправленные',
					name: 'send',
					value: 2,
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
			rules: { required: true, pattern: /^[a-zA-Z0-9]+$/g },
		},
		inputProps: {
			placeholder: 'Трек номер',
			disabled: component === 'wait' || component === 'stock',
		},
	};

	useEffect(() => {
		if (orderItem.trackNumber && isOpen && !packageChange) {
			methods.setValue('trackNumber', orderItem.trackNumber);
		}
	}, [orderItem, isOpen, packageChange]);

	const onSubmit: SubmitHandler<IFormStatus | FieldValues> = (data) => {
		if (
			data?.trackNumber &&
			(data?.orderStatus?.value !== undefined ||
				submitStatus !== undefined)
		) {
			try {
				const trackNumber = methods.getValues('trackNumber');
				if (packageChange) {
					dispatch(
						fetchChangeStatusPackageToSend({
							userId: orderItem.userId,
							packageId: orderItem.id,
							trackNumber: trackNumber,
						})
					).then((r) => {
						if (r.payload) {
							const data = r.payload as { message: 'success' };
							if (data.message == 'success') {
								successCallback();
							}
						}
					});
				} else {
					const statusId = data?.orderStatus?.value
						? data?.orderStatus?.value
						: submitStatus;
					octoAxios
						.post<IDefaultFetchSuccess>('/admin/orders', {
							userId: orderItem.userId,
							track_number: trackNumber
								? trackNumber
								: orderItem.trackNumber,
							title: orderItem.title,
							comment: orderItem.comment,
							statusId: statusId,
						})
						.then((r) => {
							if (r.data.message === 'success') {
								successCallback();
							}
						});
				}
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
		trackNumberProps,
	};
};
