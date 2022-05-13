import React from 'react';
import { useQuestionPagesStyles } from './style';

const ProductReturns = () => {
	return (
		<ContainerMUI>
			<ParagraphMUI>Осуществить возврат товара возможно только с нашего склада в Европе, и он предусмотрен магазином. Если с товаром не пришла возвратная накладная, отправка до магазина оплачивается отдельно. Срок возврата товара в интернет-магазин обычно составляет от 7 до 30 дней с момента получения заказа. Для того чтобы вернуть товар, необходимо сделать запрос в личном кабинете или обратиться в службу поддержки.
			</ParagraphMUI>
			
			<ParagraphMUI>
				Стоимость услуги возврата составляет 10 €
			</ParagraphMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,	
	ParagraphMUI,
	
} = useQuestionPagesStyles();
export default React.memo(ProductReturns);