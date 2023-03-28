import React from 'react';
import {useQuestionPagesStyles} from '@/components/Questions/questionPages/style';

const RedemptionOfGoods = () => {
	return (
		<ContainerMUI>
			<ULMUI>
				<LIMUI>Вы присылаете ссылку на товар, наш менеджер напишет сумму в рублях по курсу сервиса на день покупки.</LIMUI>
				<LIMUI>Перевод можно сделать на рублевую карту.</LIMUI>
				<LIMUI>Заявки обрабатываются с пн- пт с 10:00 до 20:00. Сб, Вс и праздничные дни с 12:00 - 16:00.</LIMUI>
				<LIMUI>Заявки, поданные не в рабочее время, будут обработаны на следующий день..</LIMUI>
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
