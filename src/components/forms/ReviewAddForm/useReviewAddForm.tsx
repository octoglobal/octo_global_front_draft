import {FieldValues, SubmitHandler, UseFormSetError} from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useReviewAddForm = (setError: UseFormSetError<FieldValues>) => {

	// const dispatch = useAppDispatch();
	// const {router, pushTo} = useCustomRouter();
	//
	// const setErrorFields = (fieldName: keyof IUserLoginReq, message: string) => {
	// 	setError(fieldName, {
	// 		type: 'string',
	// 		message
	// 	});
	// };
	//
	// const handleBadResponse = () => {
	// 	setErrorFields('email', ' ');
	// 	setErrorFields('password', 'Неправильный логин или пароль');
	// };

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log('data', data);
	};

	return {
		onSubmit,
	};
};
