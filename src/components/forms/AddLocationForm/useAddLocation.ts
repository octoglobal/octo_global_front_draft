import { FieldValues, UseFormSetError, SubmitHandler } from 'react-hook-form';
import {
	fetchAddAddress,
	IUserAddresReq,
} from '@/reducers/addresSlice/asyncActions/addressApi';
import { useAppDispatch } from './../../../hooks/useReduxHooks';

export const useAddLocation = (
	setError: UseFormSetError<FieldValues | IUserAddresReq>
) => {
	const dispatch = useAppDispatch();

	const setErrorFields = (fieldName: keyof IUserAddresReq, message: string) => {
		setError(fieldName, {
			type: 'string',
			message: message
		});
	};

	const handleBadResponse = () => {
		// setErrorFields('');
		// setErrorFields('');
		// setErrorFields('');
		// setErrorFields('');
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		const formData = data as IUserAddresReq;
		// TODO: добавить проверки и всякие дополнения к данным формы
		if (0) {
			dispatch(fetchAddAddress(formData)).then((e) => {
				const statusCode = e.payload;
				switch (statusCode) {
					case 403:
						handleBadResponse();
						return;
					case 422:
						handleBadResponse();
				}
			});
		}
	};
};
