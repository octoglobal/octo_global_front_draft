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
import TrackYourOrder from './questionPages/TrackYourOrder';
import RedemptionOfGoods from '@/components/Questions/questionPages/RedemptionOfGoods';
import ReplenishmentInfo from '@/components/Questions/questionPages/ReplenishmentInfo';



const Questions = () => {
	const [openVPN, setOpenVPN] = useState(false);
	const [openTranslate, setOpenTranslate] = useState(false);
	const [openTransferPage, setOpenTransferPage] = useState(false);
	const [costServices, setOpenСostServicesPage] = useState(false);
	const [trackYourOrder, setSrackYourOrder] = useState(false);
	const router = useRouter();


	useEffect(()=>{
		const key = Object.keys(router.query)[0];
		switch (key) {
		case 'translate':

			setOpenTranslate(true);
			break;
		case 'transfer':

			setOpenTransferPage(true);
			break;
		case 'vpn':

			setOpenVPN(true);
			break;
		case 'costServices':

			setOpenСostServicesPage(true);
			break;
		case 'trackyourorder':

			setSrackYourOrder(true);
			break;
		default:
			break;
		}


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
				title={'Запрещенные товары'}
				open={false}
			>
				<BlockProduct/>
			</CollapseInfo>

			<CollapseInfo
				title={'Выкуп товара'}
				open={false}
			>
				<RedemptionOfGoods/>
			</CollapseInfo>

			<CollapseInfo
				title={'Пополнение личного счета'}
				open={false}
			>
				<ReplenishmentInfo/>
			</CollapseInfo>

			<CollapseInfo
				title={'Стоимость почтового отправления'}
				open={openTransferPage}
			>
				<AboutTransferPage/>
			</CollapseInfo>

			<CollapseInfo
				title={'Стоимость наших услуг'}
				open={costServices}
			>
				<CostServices/>
			</CollapseInfo>


			<CollapseInfo
				title={'Оплата товаров'}
				open={false}
			>
				<ReplenishmentPersonalAccaunt/>
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

			<CollapseInfo
				title={'Как отследить заказ'}
				open={trackYourOrder}
				end={true}
			>
				<TrackYourOrder/>
			</CollapseInfo>

		</ContainerMUI>
	);
};


const ContainerMUI = styled('div')(() => ({
	maxWidth: '650px',
	margin: '15px auto 0'
}));


export default React.memo(Questions);
