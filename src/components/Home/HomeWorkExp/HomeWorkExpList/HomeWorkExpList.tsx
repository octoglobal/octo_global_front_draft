import React, {FC} from 'react';
import {useHomeWorkExpListStyles} from '@/components/Home/HomeWorkExp/HomeWorkExpList/style';
import HomeWorkExpIconReg from '../../../../UI/UIIcon/HomeWorkExpIconReg.svg';
import HomeWorkExpIconBuy from '../../../../UI/UIIcon/HomeWorkExpIconBuy.svg';
import HomeWorkExpIconCons from '../../../../UI/UIIcon/HomeWorkExpIconCons.svg';
import HomeWorkExpIconSending from '../../../../UI/UIIcon/HomeWorkExpIconSending.svg';
import HomeWorkExpListItem, {
	IHomeWorkExpListItemProps
} from '@/components/Home/HomeWorkExp/HomeWorkExpListItem/HomeWorkExpListItem';

const listData: IHomeWorkExpListItemProps[] = [
	{
		title: 'Зарегистрируйтесь на сайте, чтобы получить инструкцию для покупок.',
		icon: HomeWorkExpIconReg,
		animation: true,
		top: 0,
	},
	{
		title: 'Совершайте покупки самостоятельно или с помощью услуги «Выкуп товара»',
		icon: HomeWorkExpIconBuy,
		animation: true,
		top: 100,
	},
	{
		title: 'Объединяйте несколько покупок в одну посылку',
		icon: HomeWorkExpIconCons,
		animation: true,
		top: 200,
	},
	{
		title: 'Получайте заказы по почте',
		icon: HomeWorkExpIconSending,
		animation: true,
		top: 300,
	},
];


const HomeWorkExpList: FC = () => {

	const { ListMUI } = useHomeWorkExpListStyles();

	return (
		<ListMUI>
			{listData.map(workItem => (
				<HomeWorkExpListItem
					key={workItem.title}
					title={workItem.title}
					icon={workItem.icon}
					animation={workItem.animation}
					top={workItem.top}
				/>
			))}
		</ListMUI>
	);
};

export default React.memo(HomeWorkExpList);
