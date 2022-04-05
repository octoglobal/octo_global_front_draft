import React, {FC} from 'react';
import {useHomeWorkExpListStyles} from '@/components/Home/HomeWorkExp/HomeWorkExpList/style';
import HomeWorkExpIconReg from '../../../../UI/UIIcon/HomeWorkExpIconReg.svg';
import HomeWorkExpIconBuy from '../../../../UI/UIIcon/HomeWorkExpIconBuy.svg';
import HomeWorkExpIconCons from '../../../../UI/UIIcon/HomeWorkExpIconCons.svg';
import HomeWorkExpIconSending from '../../../../UI/UIIcon/HomeWorkExpIconSending.svg';
import HomeWorkExpListItem from '@/components/Home/HomeWorkExp/HomeWorkExpListItem/HomeWorkExpListItem';

const listData = [
	{
		title: 'Зарегистрируйтесь на сайте, чтобы получить инструкцию для покупок.',
		icon: HomeWorkExpIconReg,
	},
	{
		title: 'Совершайте покупки самостоятельно или с помощью услуги «Выкуп товара»',
		icon: HomeWorkExpIconBuy,
	},
	{
		title: 'Консолидируйте несколько покупок в одну посылку',
		icon: HomeWorkExpIconCons,
	},
	{
		title: 'Отправляем вам по почте',
		icon: HomeWorkExpIconSending,
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
				/>
			))}
		</ListMUI>
	);
};

export default React.memo(HomeWorkExpList);
