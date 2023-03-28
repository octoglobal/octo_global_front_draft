import React from 'react';
import { useQuestionPagesStyles } from './style';
import {styled} from '@mui/material';

const ReplenishmentPersonalAccaunt = () => {
	return (
		<ContainerMUI>

			<ParagraphMUI>
				Оплатить товары на Octo Global  возможно двумя способами:
			</ParagraphMUI>
			<CustomULMUI>
				<CustomLIMUI>
					Переводом в рублях на карту по курсу евро
				</CustomLIMUI>
				<CustomLIMUI>
					Переводом Bitcoin на крипто кошелек
				</CustomLIMUI>
			</CustomULMUI>


			<ParagraphMUI>
				Для оплаты необходимо сформировать заявку, и мы пришлем реквизиты.
			</ParagraphMUI>
			<ParagraphMUI>
				Курс Евро к рублю по которому возможен перевод вы видите у нас на сайте в личном кабинете.
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

const CustomLIMUI = styled(LIMUI)`
	margin-left: 30px;
	@media (max-width: 500px) {
		margin-left: 10px;
	}
`;

const CustomULMUI = styled(ULMUI)`
	margin-bottom: 16px;
`;

export default React.memo(ReplenishmentPersonalAccaunt);
