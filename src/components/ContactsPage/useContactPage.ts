
import {SubmitHandler,FieldValues, useForm} from 'react-hook-form';

  
export const useContactPage = () => {	

	const {		
		control,
		handleSubmit,
		reset,	
		watch,		
	} = useForm<FieldValues>();

	const onSubmit: SubmitHandler<FieldValues> = data => {
		console.log('sub!!');
		console.log(data);
		reset({contactEmail: '',contactText: ''});
		
	  };
	return {
		control,
		handleSubmit,
		watch,		
		onSubmit,
		reset,
	};
};
