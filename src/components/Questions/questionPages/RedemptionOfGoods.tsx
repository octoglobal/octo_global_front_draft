import React from 'react';
import {useQuestionPagesStyles} from '@/components/Questions/questionPages/style';

const RedemptionOfGoods = () => {
	return (
		<ContainerMUI>
			<ULMUI>
				<LIMUI>Для выкупа товара, необходимо пополнить личный счет на Octo Global на нужную сумму.</LIMUI>
				<LIMUI>Далее в личном кабинете оставьте заявку на выкуп, наш менеджер свяжется с вами.</LIMUI>
				<LIMUI>Заявки обрабатываются с пн- пт с 10:00 до 20:00. Сб, Вс и праздничные дни с 12:00 - 16:00.</LIMUI>
				<LIMUI>Заявки поданные не в рабочее время, будут обработаны на следующий день.</LIMUI>
			</ULMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	ULMUI,
	LIMUI,
} = useQuestionPagesStyles();

export default React.memo(RedemptionOfGoods);
