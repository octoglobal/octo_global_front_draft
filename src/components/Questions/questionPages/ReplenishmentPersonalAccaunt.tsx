import React from 'react';
import { useQuestionPagesStyles } from './style';

const ReplenishmentPersonalAccaunt = () => {
	return (
		<ContainerMUI>
		
			<ParagraphMUI>
				Оплатить товары на Octo Global  возможно двумя способами:
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
				Для оплаты необходимо сформировать заявку, и мы пришлем реквизиты.
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