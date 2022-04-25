import {FieldValues, useForm} from 'react-hook-form';
import {useEffect} from 'react';

interface IFormStatus {
	trackNumber: string;
	status: number;
}

export const useOrderStatusModal = () => {

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
		if (!open) {
			methods.reset({
				trackNumber: '',
				status: 0,
			});
		}
	}, [open]);

	return {
		methods,
		trackNumberProps
	};
};
