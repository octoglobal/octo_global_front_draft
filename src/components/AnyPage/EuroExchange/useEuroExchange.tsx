import { useEffect, useState } from 'react';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {useAppDispatch,useAppSelector} from '@/hooks/useReduxHooks';
import { fetchEuroRate,fetchSetEuroRate } from '@/store/reducers/euroExchangeRate/asyncThunk/euroApi';

export const useEuroExchange = () => {
	

	const [isEditMode, setEditMode] = useState(false);
	const dispatch = useAppDispatch();
	const {
		value
	} = useAppSelector(state => state.euroSlice);
	
	const onSubmitEuroPrice:SubmitHandler<FieldValues> = (data)=>{
		
		// console.log('data.rate', parseInt(data.rate).toFixed(2));
		// console.log('data.rate',data.rate.toFixed(2));

		const value = Number(data.rate).toFixed(2) * 100;

		dispatch(fetchSetEuroRate({
			currency: 'EUR',
			value: value
		}));
		setEditMode(false);
	};
	
	useEffect(()=>{
		dispatch(fetchEuroRate());
	},[]);

	return {	
		isEditMode,
		setEditMode,
		onSubmitEuroPrice,
		value
	};
};
