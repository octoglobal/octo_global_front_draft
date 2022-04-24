import React from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { styled } from '@mui/material';
import CollapseInfo from '@/components/AnyPage/CollapseInfo/CollapseInfo';

const questionsData = [
	{
		title: 'Запрещенные товары',
		description: '1',
	},
	{
		title: 'Возврат товара',
		description: '1',
	},
	{
		title: 'Все о доставке',
		description: '1',
	},
	{
		title: 'Таможня',
		description: 'Присылаете полную инструкцию на товар.\n' +
			'Вы переводите сумму частному лицу на российскую карту в рублях по курсу Альфа банка на день оплаты +5%. Мы сразу \n' +
			'\n' +
			'покупаем евро на эти деньги, но для транспортировки их в Европу нам понадобится 2-3 дня. ' +
			'Затем выкупаем для вас товар самостоятельно. Присылаем подтверждение выкупа. Как только посылка приходит, оповещаем Вас. \n' +
			'\n' +
			'Даю точную стоимость отправки исходя из веса и габаритов.  Стоимость отправки, также, можно оплатить в рублях по курсу банка на день оплаты +5%. По вашим инструкциям отправляем в Россию Почтовой службой.',
	},
];


const Questions = () => {
	return (
		<ContainerMUI>
			<HeaderMargin/>
			{questionsData.map((item, index) => (
				<CollapseInfo
					index={index + 1}
					allLength={questionsData.length}
					key={item.title}
					title={item.title}
					description={item.description}
				/>
			))}
		</ContainerMUI>
	);
};


const ContainerMUI = styled('div')(() => ({
	maxWidth: '650px',
	margin: '15px auto 0'
}));


export default React.memo(Questions);
