import React, {FC} from 'react';
import {useHomeConfidenceListStyles} from '@/components/Home/HomeConfidence/HomeConfidenceList/style';
import HomeConfidenceListItem from '../HomeConfidenceListItem/HomeConfidenceListItem';

const homeConfidenceData = [
	'Поможем с поиском и оплатой любого товара',
	'Консультация и помощь на любом этапе',
	'Заполним сами экспортную декларацию',
	'Наши услуги для Вас бесплатны мы зарабатываем на экспорте который и так включён в стоимость товаров.',
	'Возможность оплаты криптовалютой',
	'Покупаю на территории ЕС наши услуги бесплатные.',
	'Возможно заказ любого вида товара от одежды до бытовой техники и спортинвентаря.',
];

const HomeConfidenceList: FC = () => {

	const { ListMUI } = useHomeConfidenceListStyles();

	return (
		<ListMUI>
			{homeConfidenceData.map(confidenceItem => (
				<HomeConfidenceListItem
					key={confidenceItem}
					title={confidenceItem}
				/>
			))}
		</ListMUI>
	);
};

export default React.memo(HomeConfidenceList);
