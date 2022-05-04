import React from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { styled } from '@mui/material';
import CollapseInfo from '@/components/AnyPage/CollapseInfo/CollapseInfo';

const questionsData = [
	{
		title: 'Как это работает',
		description: '' +
			'1. Выбирайте любой товар из списка магазинов у нас на сайте или из любого другого магазина Европы. \n' +
			'2. Покупайте товар самостоятельно, заполнив адрес доставки по нашим инструкциям. \n' +
			'3. Если у вас нет возможности оплатить товар самостоятельно, пополните ваш личный счет на Octo Global переводом на карту или переводом Bitcoin. И воспользуйтесь услугой «Выкуп товара» \n' +
			'4. Добавьте посылку, которую вы ждете. Введите трек номер, название товара и комментарии. Так мы сможем опознать вашу посылку, когда она придет на склад.   \n' +
			'5. Получите письмо, когда ваша посылка придет на склад. \n' +
			'Решайте сами, хотите ее отправить или объединить с другими посылками для отправки вам. \n' +
			'6. Оставьте заявку на отправку нам и выберете нужный адрес для отправки. \n' +
			'7. Пополните ваш личный счет на Octo Global для оплаты почтовых сборов. \n' +
			'8. Мы отправляем посылки Почтой России. \n' +
			'9. Получите письмо с трек номером, для отслеживания посылки. \n' +
			'10. В личном кабинете вы можете всегда проверить трек номер и статус вашей посылки. Также вы можете проверить свой личный счет и посмотреть его историю. \n',
	},
	{
		title: 'Запрещенные товары',
		description: '' +
			'1) Оружие газовое, огнестрельное, пневматическое, сигнальные пистолеты, боевые припасы, взрывчатые и пожароопасные вещества, изделия, по конструкции похожие на оружие, все виды ножей, электрошокеры;\n' +
			'2) Самовоспламеняющиеся материалы (керосин, бензин, грунтовки, герметизирующие составы, клея, изготовленные на основе растворителей, парфюмерия, краски, лаки, ацетон и лосьоны), ' +
			'летучие серные соединения, спички, в состав которых входят кислоты, соли, желтый или белый фосфор, металлические порошки, бенгальские огни, напалм, карбиды, уголь, литиевые батареи, сухой лед; \n' +
			'3) Предметы антиквариата, ценные вещи – драгоценные камни, алмазы, минеральное сырье, коллекционные монеты, медали, картины, представляющие художественную ценность. ' +
			'При этом можно можно отправлять в международных почтовых отправлениях ювелирные украшения; \n' +
			'4) Фальшивые деньги и поддельные банкноты; \n' +
			'5) Токсичные и радиоактивные вещества, жидкости, содержащие ДДТ и метиловый спирт. В частности запрещены к пересылке ртуть, едкий натр, электролиты для аккумуляторов; \n' +
			'6) Печатная, аудио– и видео продукция политического, религиозного или порнографического характера, а также экстремистская литература; \n' +
			'7) Емкости, ампулы и капсулы с живыми паразитами, бактериями или микробами, в т.ч. медикаменты и вакцины; \n' +
			'8) Любые скоропортящиеся продукты; \n' +
			'9) Табак, этиловый спирт и спиртосодержащие напитки; \n' +
			'10) Рыболовные сети, электроловильные устройства; \n' +
			'11) Отходы металлопроизводства и лом металлов (черных и цветных); \n' +
			'12) Наркотики и психотропные вещества, а также их прекурсоры, в т.ч. в виде лекарственных препаратов; \n' +
			'13) Растения и семена овощных и плодово-ягодных культур, саженцы, органические удобрения, селитра, перекись водорода; \n' +
			'14) Живых животных, грызунов, птиц; \n' +
			'15) Технические средства слежения; \n' + '\n' +
			'Ознакомьтесь пожалуйста, с данной информацией до совершения покупок.',
	},
	{
		title: 'Выкуп товара',
		description: 'В случае, если у вас нет возможности выкупить товар самостоятельно, мы сделаем это для вас. ' +
			'Для выкупа товара, необходимо пополнить личный счет на Octo Global на нужную сумму. ' +
			'Далее в личном кабинете оставьте заявку на выкуп, наш менеджер свяжется с вами. \n' +
			'Заявки обрабатываются с понедельника, вторника, среды, четверга и пятницы с 10:00 до 20:00. ' +
			'В субботу, Воскресенье и праздничные дни с 12:00 - 16:00. Заявки, поданные не в рабочее время, будут обработаны на следующий день. \n',
	},
	{
		title: 'Пополнение лицевого счета',
		description: 'Пополнить свой личный счет на Octo Global можно двумя способами: \n' +
			'1. Переводом в рублях на карту по курсу евро. \n' +
			'2. Переводом Bitcoin на крипто кошелек. \n' +
			'Для пополнения счета необходимо сформировать заявку, и мы пришлем реквизиты для перевода и нужную сумму.  \n' +
			'Курс Евро к рублю по которому возможен перевод вы видите у нас на сайте. \n',
	},
	{
		title: 'Таможенные пошлины',
		description: 'С 31 марта до 1 октября 2022 года таможенный лимит беспошлинного ввоза товаров для России составляет 1000 евро, по весу 31 кг на 1 посылку. \n' +
			'При превышении этого порога будет насчитываться пошлина в размере 15% от стоимости заказа, но не менее 2 евро за 1 кг. \n' +
			'Количество посылок не ограничено. \n',
	},
	{
		title: 'Стоимость отправления',
		description: 'Стоимость почтового отправления в Россию зависит от веса, размеров коробки и стоимости товара. \n' +
			'2 кг коробка до 30*30*30 см = от 20 EUR \n' +
			'5 кг коробка до 120*60*60 см = от 31 EUR \n' +
			'10 кг коробка до 120*60*60 см = от 38 EUR \n' +
			'20 кг коробка до 120*60*60 см = от 56 EUR \n' +
			'30 кг один товар с негабаритными размерами 180*60*60 см  = от 95 EUR  \n',
	},
	{
		title: 'Стоимость наших услуг',
		description: 'Прием посылок на склад – 0 € \n' +
			'Объединение и сбор посылок  - 0 € \n' +
			'Переупаковка – 0 € \n' +
			'Хранение 60 дней – 0 € \n' +
			'Заполнение декларации – 0 € \n' +
			'Двухслойная картонная коробка – 3 € \n' +
			'Гофрированная усиленная трехслойная картонная коробка \n' +
			'(фарфор, посуда, стекло, лампы) – 20 € \n' +
			'Возврат товара в магазин – 10 € \n' +
			'Проверка товара и фотофиксация – 15 € \n',
	},
	{
		title: 'Возврат товара',
		description: 'Осуществить возврат товара возможно только с нашего склада в Европе, и он предусмотрен магазином. ' +
			'Если с товаром не пришла возвратная накладная, отправка до магазина оплачивается отдельно. ' +
			'Срок возврата товара в интернет-магазин обычно составляет от 7 до 30 дней с момента получения заказа. ' +
			'Для того чтобы вернуть товар, необходимо сделать запрос в личном кабинете или обратиться в службу поддержки. \n' +
		'Стоимость услуги возврата составляет  10 € ',
	},
	// {
	// 	title: 'Все о доставке',
	// 	description: '1',
	// },
	// {
	// 	title: 'Таможня',
	// 	description: 'Присылаете полную инструкцию на товар.\n' +
	// 		'Вы переводите сумму частному лицу на российскую карту в рублях по курсу Альфа банка на день оплаты +5%. Мы сразу \n' +
	// 		'\n' +
	// 		'покупаем евро на эти деньги, но для транспортировки их в Европу нам понадобится 2-3 дня. ' +
	// 		'Затем выкупаем для вас товар самостоятельно. Присылаем подтверждение выкупа. Как только посылка приходит, оповещаем Вас. \n' +
	// 		'\n' +
	// 		'Даю точную стоимость отправки исходя из веса и габаритов.  ' +
	// 		'Стоимость отправки, также, можно оплатить в рублях по курсу банка на день оплаты +5%. По вашим инструкциям отправляем в Россию Почтовой службой.',
	// },
	{
		title: 'Инструкция по настройке VPN сервиса для работы на сайте',
		description: '1. Яндекс браузер \n' +
			'Откройте браузер. В правом верхнем углу нажмите на этот значок --- выберите настройки – перейдите в дополнения. \n' +
			'Прокрутите колесиком вниз и выберите каталог расширений для Яндекс.Браузера. В поисковой строке напишите VPN и скачайте. \n' +
			'Перезапустите браузер, зайдите на сайт и наслаждайтесь шопингом! \n' +
			'2. Google Chrome \n ' +
			'Запустите браузер. В правой верхней части экрана нажмите на кнопку с дополнительными функциями. ' +
			'В открывшемся окне выберите Дополнительные настройки – Расширения. ' +
			'В расширениях перейдите на интернет-магазин Chrome. В строке «Поиск по магазину» напишите VPN  и скачайте.  \n' +
			'3. Mozilla Firefox \n' +
			'Откройте браузер. В верхней части экрана откройте меню. Далее выберите Дополнения – Расширения. ' +
			'В поиске «Найти больше расширений» напишите VPN и откроется новая вкладка. Выберите понравившийся VPN, скачайте и совершайте покупки! ',
	},
	{
		title: 'Как перевести сайт на русский',
		description: '1. Яндекс браузер \n' +
			'Перевести страницу можно быстро, если в дополнительных расширениях указан автоматический перевод страниц. \n' +
			'Перейдите на иностранный сайт. В правой верхней части экрана появится панель для перевода -- нажмите перевести страницу. ' +
			'Выберите язык для перевода и наслаждайтесь шопингом! \n' +
			'2. Google Chrome \n ' +
			'Запустите браузер. В верхней части экрана нажмите на значок с тремя точками. ' +
			'Далее «Дополнительные настройки» -- «Расширения». В левой части экрана нажмите на значок с тремя ---. ' +
			'Затем откройте интернет-магазин Chrome. В новой вкладке откроется окно. ' +
			'В поиске по магазину напишите «переводчик». Выберите его и скачайте. \n' +
			'В поисковой строке выберите нужный сайт для шопинга. \n' +
			'3. Mozilla Firefox \n' +
			'В верхней части экрана откройте меню. Затем перейдите в «Дополнения». ' +
			'В поисковой строке напишите «Переводчик». ' +
			'Затем откроется новое окно с разными переводчиками. Выберите понравившийся и перезапустите браузер. \n' + '\n' +

			'В мобильной версии сайта iphone, браузер Safari не предоставляет возможности для перевода. Для этого Вам нужно будет скачать Google Chrome и нажать на значок перевода. \n' + '\n' +
			'В мобильной версии браузер Safari не предоставляет возможности для перевода. \n' +
			'Если на Iphone не открывается Safari. Для этого нужно будет скачать браузер Google Chrome. \n',
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
