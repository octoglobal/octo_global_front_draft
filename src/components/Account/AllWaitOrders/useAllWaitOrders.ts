import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {octoAxios} from '@/lib/http';
import {IWaitProductsData} from '@/components/Account/AllWaitOrders/types';

export const useAllWaitOrders = () => {
	const [productList, setProductList] = useState<IWaitProductsData[]>([]);

	const {
		control
	} = useForm();


	useEffect(() => {
		octoAxios.get<{orders: IWaitProductsData[]}>('/admin/all_expected').then((res) => {
			setProductList([...res.data.orders]);
		});
	}, []);



	const onSubmitInputValue = (id:number, value:boolean)=>{
		return async () => {
			const res = await octoAxios.post('/admin/invoice_check',{orderId: id, invoice_check:!value});

			if (res.status === 200){
				await octoAxios.get('/admin/all_expected').then((res) => {
					setProductList([...res.data.orders]);
				});
			}
		};
	};

	return {
		control,
		productList,
		onSubmitInputValue,
	};
};
