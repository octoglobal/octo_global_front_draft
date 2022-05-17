import React, { useEffect, useState } from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { styled } from '@mui/material';
import CollapseInfo from '@/components/AnyPage/CollapseInfo/CollapseInfo';
import VpnPage from './questionPages/VpnPage';
import TranslatePage from './questionPages/TranslatePage';
import AboutTransferPage from './questionPages/AboutTransferPage';
import { useRouter } from 'next/router';
import HowItWorks from './questionPages/HowItWorks';
import BlockProduct from './questionPages/BlockProduct';
import ReplenishmentPersonalAccaunt from './questionPages/ReplenishmentPersonalAccaunt';
import CustomsDuties from './questionPages/CustomsDuties';
import CostServices from './questionPages/CostServices';
import ProductReturns from './questionPages/ProductReturns';



const Questions = () => {
	const [openVPN, setOpenVPN] = useState(false);
	const [openTranslate, setOpenTranslate] = useState(false);
	const [openTransferPage, setOpenTransferPage] = useState(false);
	const router = useRouter();


	useEffect(()=>{
		const key = Object.keys(router.query)[0];
		switch (key) {
		case 'translate':
			console.log('translate');
			setOpenTranslate(true);
			break;
		case 'transfer':
			console.log('transfer');
			setOpenTransferPage(true);
			break;
		case 'vpn':
			console.log('vpn');
			setOpenVPN(true);
			break;
		default:
			break;
		}
		console.log('router',Object.keys(router.query)[0]);
		
	},[router]);

	return (
		<ContainerMUI>
			<HeaderMargin/>
			<CollapseInfo
				title={'Как это работает'}				
				open={false}
			>
				<HowItWorks/>
			</CollapseInfo>

			<CollapseInfo
				title={'Стоимость наших услуг '}				
				open={false}
			>
				<CostServices/>
			</CollapseInfo>

		
			<CollapseInfo			
				title={'Стоимость почтового отправления в Россию'}
				end={true}
				open={openTransferPage}
			>
				<AboutTransferPage/>
			</CollapseInfo>	

			<CollapseInfo
				title={'Пополнение личного счета'}				
				open={false}
			>				
				<ReplenishmentPersonalAccaunt/>
			</CollapseInfo>

			<CollapseInfo
				title={'Запрещенные товары'}				
				open={false}
			>
				<BlockProduct/>
			</CollapseInfo>

			<CollapseInfo
				title={'Таможенные пошлины'}				
				open={false}
			>								
				<CustomsDuties/>
			</CollapseInfo>

			<CollapseInfo
				title={'Возврат товара'}				
				open={false}
			>
				<ProductReturns/>
			</CollapseInfo>

			<CollapseInfo
				title={'Инструкция по настройке VPN сервиса для работы на сайте'}				
				open={openVPN}
			>
				<VpnPage/>
			</CollapseInfo>
			
			<CollapseInfo			
				title={'Как перевести сайт на русский'}
				open={openTranslate}
			>
				<TranslatePage/>
			</CollapseInfo>

			

		</ContainerMUI>
	);
};


const ContainerMUI = styled('div')(() => ({
	maxWidth: '650px',
	margin: '15px auto 0'
}));


export default React.memo(Questions);
