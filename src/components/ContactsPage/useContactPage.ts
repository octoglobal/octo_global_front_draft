import { useState } from 'react';
import { octoAxios } from '@/lib/http';
import {SubmitHandler,FieldValues, useForm} from 'react-hook-form';

  
export const useContactPage = () => {	

	const [isOk, setIsOk]  = useState<boolean>(false);

	const {		
		control,
		handleSubmit,
		reset,	
		watch,
		formState: { errors },
		setError,	
		clearErrors,	
	} = useForm<FieldValues>();

	const onSubmit: SubmitHandler<FieldValues> = data => {

		async function sendText() {
			try {
				const res = await octoAxios.post('/user/send_message/feedback', {
					email: data.contactEmail,
					subject: data.contactText
				});
            
				if (res.status === 200){
					
					reset({contactEmail: '',contactText: ''});
                   
					setTimeout(()=>{
						setIsOk(false);
					},3000);
					setIsOk(true);
				}
			} catch (error) {
				
				setIsOk(false);
				setError('test', {type: 'string', message: 'Произошла ошибка'});
				setTimeout(()=>{
					clearErrors('test');
				},3000);
			}
			
		}

		sendText();
		
	  };
	return {
		control,
		handleSubmit,
		watch,		
		onSubmit,
		reset,
		errors,
		isOk,
	};
};
