import React from 'react';
import { useQuestionPagesStyles } from './style';

const HowItWorks = () => {
	return (
		<ContainerMUI>
			<ULMUI>
				<LIMUI>Создайте личный кабинет на Octo Global.</LIMUI>
				<LIMUI>Выбирайте любой товар из <AMUI style={{textDecoration: 'underline'}} href="/shops" target="_blank" rel="noreferrer">списка магазинов у нас на сайте</AMUI> или из любого другого магазина Европы.</LIMUI>
				<LIMUI>Если у вас нет возможности оплатить товар самостоятельно, пополните ваш личный счет переводом на рублевую карту.</LIMUI>
				<LIMUI>Воспользуйтесь услугой <AMUI href="/account/instruction" target="_blank" rel="noreferrer">«Выкуп товара».</AMUI></LIMUI>
				<LIMUI>Вы получите письмо, когда товар поступит к нам на склад.</LIMUI>
				<LIMUI>Укажите конечный адрес доставки и оформите заявку для отправки посылки.</LIMUI>
				<LIMUI>Пополните ваш личный счет на Octo Global для оплаты почтовых сборов.</LIMUI>
				<LIMUI>Мы осуществляем доставку Почтой России.</LIMUI>
				<LIMUI>При отправки посылки, вы получаете уведомление с трек номером для дальнейшего почтового отслеживания.</LIMUI>
				<LIMUI>В <AMUI href="/account/info" target="_blank" rel="noreferrer">личном кабинете</AMUI> вы можете проверить свой баланс и историю заказов.</LIMUI>
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
