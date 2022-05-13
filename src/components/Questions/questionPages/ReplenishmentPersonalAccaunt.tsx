import React from 'react';
import { useQuestionPagesStyles } from './style';

const ReplenishmentPersonalAccaunt = () => {
	return (
		<ContainerMUI>
		
			<ParagraphMUI>
				Пополнить свой личный счет на Octo Global можно двумя способами: 
			</ParagraphMUI>
			<ULMUI>
				<LIMUI>
					Переводом в рублях на карту по курсу евро
				</LIMUI>
				<LIMUI>
					Переводом Bitcoin на крипто кошелек
				</LIMUI>
			</ULMUI>


			<ParagraphMUI>
				Для пополнения счета необходимо сформировать заявку, и мы пришлем реквизиты для перевода и нужную сумму.
			</ParagraphMUI>
			<ParagraphMUI>
				Курс Евро к рублю по которому возможен перевод вы видите у нас на сайте. 
			</ParagraphMUI>

		</ContainerMUI>
	);
};

const {
	ContainerMUI,	
	ParagraphMUI,
	ULMUI,
	LIMUI,
	
} = useQuestionPagesStyles();
export default React.memo(ReplenishmentPersonalAccaunt);