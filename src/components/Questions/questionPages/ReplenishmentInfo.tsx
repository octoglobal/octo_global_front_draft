import React from 'react';
import {useQuestionPagesStyles} from '@/components/Questions/questionPages/style';

const ReplenishmentInfo = () => {
	return (
		<ContainerMUI>
			<ULMUI>
				<LIMUI>Пополнить свой личный счет на Octo Global можно переводом в рублях на карту по курсу сервиса на день покупки.</LIMUI>
				<LIMUI>Для пополнения счета необходимо сформировать заявку, и мы пришлем реквизиты для перевода и нужную сумму.</LIMUI>
				<LIMUI>Курс Евро к рублю по которому возможен перевод вы видите у нас на сайте.</LIMUI>
			</ULMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	ULMUI,
	LIMUI,
} = useQuestionPagesStyles();

export default React.memo(ReplenishmentInfo);
