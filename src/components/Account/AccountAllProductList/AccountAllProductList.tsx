import { octoAxios } from '@/lib/http';
import React, {FC,useEffect,useState} from 'react';
import {useAccountAllProducListStyle} from './style';
import CheckboxUIV3 from 'UI/UIComponents/CheckboxUIV3/CheckboxUIV3';

import {useForm} from 'react-hook-form';
import { useMobile } from '@/hooks/useMedia';

import { useRouter } from 'next/router';


interface IDataProducts {
	orderId: number,
	userId: number
	userEmail: string,
	orderLongId: number,
	orderTrackNumber: number,
	userName: string,
	orderInvoiceCheck: boolean,
}

const AccountAllProducList: FC = () => {

	const [productlist, setProductlist] = useState<IDataProducts[]>([]);
	;

	const {
		isMobile
	} = useMobile();
	const {		
		control,		
		
	} = useForm();
	const router = useRouter();
	



	useEffect( ()=>{
		
		async function getProducts() {
			const res = await octoAxios.get('/admin/all_expected');
		
			if (res.status === 200){
				setProductlist([...res.data.orders]);
			
			}		
		}

		
		getProducts();
	},[]);



	const onSubmitInputValue = async (id:number, value:boolean, )=>{
		const res = await octoAxios.post('/admin/invoice_check',{orderId: id, invoice_check:!value});
		if (res.status === 200){
			const res = await octoAxios.get('/admin/all_expected');
		
			if (res.status === 200){
				setProductlist([...res.data.orders]);
			}
		}
		
	};
	
	
	const products = productlist.map(product=>{
		
		return <ProductRowMUI key={product.orderId}>
			<ProductCheckedMUI onClick={()=>{onSubmitInputValue(product.orderId,product.orderInvoiceCheck);}}>
				<CheckboxUIV3 
					controller={{
						name: `${product.orderId}`,
						control,
						defaultValue: false,									
                        
					}}
					myValue={product.orderInvoiceCheck}
				/>				
			</ProductCheckedMUI>
						
			<ProductUserIdMUI>{product.userId}</ProductUserIdMUI>
			<ProductEmailMUI>{product.userEmail}</ProductEmailMUI>
			<ProductOrderMUI>{product.orderLongId}</ProductOrderMUI>
			<ProductTracknumberMUI>{product.orderTrackNumber}</ProductTracknumberMUI>
			<ProductNameMUI>{product.userName}</ProductNameMUI>
			
		</ProductRowMUI>;
	});

	
	
	return (
		
		<AccountAllProducListMUI>			
			<ProductListMUI>
				<ProductListTitleMUI>
					<ProductUserIdMUI>User ID</ProductUserIdMUI>
					<ProductEmailMUI>E-Mail</ProductEmailMUI>
					<ProductOrderMUI>Order</ProductOrderMUI>
					<ProductTracknumberMUI>Track Number</ProductTracknumberMUI>
					<ProductNameMUI>Name</ProductNameMUI>
				</ProductListTitleMUI>
				{products}
			</ProductListMUI>

		</AccountAllProducListMUI>
		
		
		
	);
};

const {
	AccountAllProducListMUI,	
	ProductRowMUI,
	ProductListTitleMUI,
	ProductListMUI,
	ProductCheckedMUI,
	ProductUserIdMUI,
	ProductOrderMUI,
	ProductEmailMUI,
	ProductTracknumberMUI,
	ProductNameMUI,

} = useAccountAllProducListStyle();

export default React.memo(AccountAllProducList);
