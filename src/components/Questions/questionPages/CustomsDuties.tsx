import React from 'react';
import { useQuestionPagesStyles } from './style';

const CustomsDuties = () => {
	return (
		<ContainerMUI>
			<ParagraphMUI>
                С 31 марта до 1 октября 2022 года таможенный лимит беспошлинного ввоза товаров для России составляет 1000 евро, по весу 31 кг на 1 посылку
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