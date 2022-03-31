import {FieldValues, SubmitHandler} from 'react-hook-form';

export const useRepeatPasswordForm = () => {

	const onSubmit : SubmitHandler<FieldValues> = (data) => {
		console.log('data: ', data);
	};

	return {
		onSubmit
	};
};
