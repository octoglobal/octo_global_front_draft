import React from 'react';
import { useQuestionPagesStyles } from './style';

const HowItWorks = () => {
	return (
		<ContainerMUI>			
			<ULMUI>
				<LIMUI>Создайте личный кабинет на Octo Global.</LIMUI>
				<LIMUI>Выбирайте любой товар из <AMUI href="/shops" target="_blank" rel="noreferrer">списка магазинов</AMUI> или из любого другого магазина Европы.</LIMUI>
				<LIMUI>Покупайте товар самостоятельно, заполнив адрес доставки по нашим инструкциям.</LIMUI>
				<LIMUI>Или воспользуйтесь услугой «Выкуп товара».</LIMUI>
				<LIMUI>Вы получите письмо, когда товар поступит к нам на склад.</LIMUI>
				<LIMUI>Укажите конечный адрес доставки и оформите заявку для отправки посылки.</LIMUI>
				<LIMUI><AMUI href="/questions?transfer" target="_blank" rel="noreferrer">Оплатите почтовый сбор.</AMUI></LIMUI>
				<LIMUI>Мы осуществляем доставку Почтой России.</LIMUI>
				<LIMUI>Вам придет трек номер для почтового отслеживания.</LIMUI>
				<LIMUI>В личном кабинете вы можете посмотреть историю заказов.</LIMUI>
			</ULMUI>			
		</ContainerMUI>
	);
};

const {
	ContainerMUI,	
	ULMUI,
	LIMUI,
	AMUI,
} = useQuestionPagesStyles();
export default React.memo(HowItWorks);