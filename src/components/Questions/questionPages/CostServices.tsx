import React from 'react';
import { useQuestionPagesStyles } from './style';

const CostServices = () => {
	return (
		<ContainerMUI>
			<ParagraphMUI>
				<strong>
					Выкуп товара 10%
				</strong>
			</ParagraphMUI>
			<ParagraphMUI>
                Прием посылок на склад – 0 €
			</ParagraphMUI>

			<ParagraphMUI>
                Объединение и сбор посылок  - 0 €
			</ParagraphMUI>

			<ParagraphMUI>
               Переупаковка – 0 €
			</ParagraphMUI>

			<ParagraphMUI>
               Хранение 60 дней  – 0 €
			</ParagraphMUI>

			<ParagraphMUI>
               Заполнение декларации – 0 €
			</ParagraphMUI>

			<ParagraphMUI>
				Двухслойная картонная коробка – 3 €
			</ParagraphMUI>

			<ParagraphMUI>
				Гофрированная усиленная трехслойная картонная коробка (фарфор, посуда, стекло, лампы) – 20 €
			</ParagraphMUI>

			<ParagraphMUI>
				Возврат товара в магазин – 10 €
			</ParagraphMUI>

			<ParagraphMUI>
				Проверка товара и фотофиксация – 7 €
			</ParagraphMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	ParagraphMUI,

} = useQuestionPagesStyles();
export default React.memo(CostServices);
