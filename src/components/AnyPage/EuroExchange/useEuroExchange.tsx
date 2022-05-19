import { useState } from 'react';
import {FieldValues, SubmitHandler} from 'react-hook-form';

export const useEuroExchange = () => {
	

	const [isEditMode, setEditMode] = useState(false);

	
	const onSubmitEuroPrice:SubmitHandler<FieldValues> = (data)=>{
		console.log('onSubmitEuroPrice', data);
	};
	
	
	return {	
		isEditMode,
		setEditMode,
		onSubmitEuroPrice,
	};
};
