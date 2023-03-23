import React from 'react';
import { useQuestionPagesStyles } from './style';

const CustomsDuties = () => {
	return (
		<ContainerMUI>
			<ParagraphMUI>
				С 2 апреля 2023 года таможенный лимит беспошлинного ввоза товаров для России составляет 200 евро, по весу 31 кг на 1 посылку.
			</ParagraphMUI>

			<ParagraphMUI>
				При превышении этого порога будет насчитываться пошлина в размере 15% от стоимости заказа, но не менее 2 евро за 1 кг.
			</ParagraphMUI>
			<ParagraphMUI>
				Количество посылок не ограничено.
			</ParagraphMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,

	ParagraphMUI,

} = useQuestionPagesStyles();
export default React.memo(CustomsDuties);
