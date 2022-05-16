import {FieldValues, useForm} from 'react-hook-form';
import {useEffect, useMemo} from 'react';

interface IPaymentFormState {
	plus: string;
	minus: string;
	comment: string;
}

export const usePaymentForm = () => {
	const {
		control,
		watch,
		setValue
	} = useForm<IPaymentFormState | FieldValues>({
		defaultValues: {
			minus: '',
			plus: '',
			comment: '',
		}
	});

	const formValues = watch();

	const minusValue = useMemo(() => {
		return formValues.minus;
	}, [formValues.minus]);

	const plusValue = useMemo(() => {
		return formValues.plus;
	}, [formValues.plus]);

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
	};
};
