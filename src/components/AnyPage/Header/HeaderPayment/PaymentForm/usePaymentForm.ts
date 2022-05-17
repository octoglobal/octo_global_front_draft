import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {useEffect, useMemo} from 'react';
import { useUserStore } from '@/hooks/useUserStore';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';
import {fetchAdminAddPaymentInUser, fetchHistoryBalanceOperation} from '@/reducers/paymentSlice/asyncThunk/paymentApi';
import { usePayment } from '@/hooks/usePayment';

interface IPaymentFormState {
	plus: string;
	minus: string;
	comment: string;
}

export const usePaymentForm = () => {

	const {
		control,
		watch,
		setValue,
		reset,
		handleSubmit,
	} = useForm<IPaymentFormState | FieldValues>({
		defaultValues: {
			minus: '',
			plus: '',
			comment: '',
		}
	});

	const {
		user
	} = useUserStore();

	const {
		adminSwitchIdToUser
	} = useAppSelector(state => state.adminReducer);

	const {
		statusMessage,
		handleGetHistoryOperation,
		handleResetStatusMessagePaymentReducer,
		handleUpdateUserBalance,
	} = usePayment();

	const dispatch = useAppDispatch();
	const formValues = watch();

	const minusValue = useMemo(() => {
		return formValues.minus;
	}, [formValues.minus]);

	const plusValue = useMemo(() => {
		return formValues.plus;
	}, [formValues.plus]);

	const onSubmit: SubmitHandler<IPaymentFormState | FieldValues> = (data) => {
		if (
			(
				data.minus &&
				typeof +data.minus === 'number' &&
				+data.minus
			)
			||
			(
				data.plus &&
				typeof +data.plus === 'number'
				&& +data.plus
			)
		) {
			const userId = adminSwitchIdToUser ? adminSwitchIdToUser : user?.id;
			const sendData = {
				userId: userId,
				comment: data.comment,
				amount: (data.minus ? -(+data.minus) : +data.plus) * 100,
			};
			dispatch(fetchAdminAddPaymentInUser(sendData))
				.then((r) => {
					const response = r.payload as {message: string | 'Платеж успешно проведён'};
					const message = response.message;
					if (message == 'Платеж успешно проведён') {
						reset({});
						handleGetHistoryOperation();
						handleUpdateUserBalance(sendData.amount);
						handleResetStatusMessagePaymentReducer('Платеж успешно проведён');
					}
				});
			return;
		}
		handleResetStatusMessagePaymentReducer('Введите корректные значения');
	};

	useEffect(() => {
		if (minusValue.length) {
			if (plusValue) setValue('plus', '');
		}
	}, [minusValue]);

	useEffect(() => {
		if (plusValue.length) {
			if (minusValue) setValue('minus', '');
		}
	}, [plusValue]);


	return {
		control,
		onSubmit,
		handleSubmit,
		statusMessage,
	};
};
