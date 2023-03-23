import React from 'react';
import { useQuestionPagesStyles } from './style';

const TranslatePage = () => {
	return (
		<ContainerMUI>
			<ContainerTextMUI>
				<H3MUI>1. Яндекс браузер</H3MUI>
				<ParagraphMUI>
					Для того, чтобы перевести страницу с иностранного языка на русский язык, нажмите стрелочку перевести страницу.
				</ParagraphMUI>
				<ParagraphMUI>
					В Верхней части экрана появится панель перевода, где отображается ход работы
				</ParagraphMUI>
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI src="/image/ydxTopMenu.jpg" alt="img" />*/}
				{/*</ContainerImgMUI>*/}
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI src="/image/ydxTransBtn.jpg" alt="img" />*/}
				{/*</ContainerImgMUI>*/}
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>2. Google Chrome</H3MUI>
				<ParagraphMUI>
					В поисковой строке выберите нужный иностранный сайт.
				</ParagraphMUI>
				<ParagraphMUI>
					Далее в верхнем правом углу нажмите на значок в виде трёх точек -- перейдите в настройки -- дополнительные -- языки
				</ParagraphMUI>
				<ParagraphMUI>
					Затем добавьте нужный язык для перевода
				</ParagraphMUI>

				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI*/}
				{/*		src="/image/ChromSettings.jpg"*/}
				{/*		alt="crhomSettings"*/}
				{/*	/>*/}
				{/*	<ImgMUI*/}
				{/*		src="/image/ChromSettingsMore.jpg"*/}
				{/*		alt="crhomSettingsMore"*/}
				{/*	/>*/}
				{/*</ContainerImgMUI>*/}
				{/*<ParagraphMUI>*/}
				{/*	В левой части экрана нажмите на значок с тремя{' '}*/}
				{/*	<SpanMUI>*/}
				{/*		<ImgMUI src="/image/yandexBurger.jpg" alt="=" />{' '}*/}
				{/*	</SpanMUI>*/}
				{/*	. Затем откройте интернет-магазин Chrome.*/}
				{/*</ParagraphMUI>*/}
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI src="/image/ChromShop.jpg" alt="магазин google" />*/}
				{/*</ContainerImgMUI>*/}
				{/*<ParagraphMUI>*/}
				{/*	В новой вкладке откроется окно. В поиске по магазину*/}
				{/*	напишите «переводчик». Выберите его и скачайте.<br></br> В*/}
				{/*	поисковой строке выберите нужный сайт для шопинга.*/}
				{/*</ParagraphMUI>*/}
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>3. Mozilla Firefox</H3MUI>
				<ParagraphMUI>
					Для того чтобы перевести страницу с иностранного языка на русский язык, нажмите стрелочку перевести страницу.
				</ParagraphMUI>
				<ParagraphMUI>В правом верхнем углу на три черточки </ParagraphMUI>
				<ParagraphMUI>Перейдите в настройки и выберите дополнительный язык.</ParagraphMUI>
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI*/}
				{/*		src="/image/MozilaSettings.jpg"*/}
				{/*		alt="mazila themes"*/}
				{/*	/>*/}
				{/*</ContainerImgMUI>*/}
				{/*<ParagraphMUI>*/}
				{/*	В поисковой строке напишите «Переводчик». Затем откроется*/}
				{/*	новое окно с разными переводчиками. Выберите понравившийся и*/}
				{/*	перезапустите браузер.*/}
				{/*</ParagraphMUI>*/}
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>4. Safari</H3MUI>
				<ParagraphMUI>
					Для того чтобы пере­вести страницу на ру­сский язык в доменной строке необходимо нажать «Аа»
					и выбрать «перевести на Русский»

				</ParagraphMUI>
			</ContainerTextMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	H3MUI,
	ParagraphMUI,
	ContainerTextMUI,
	ContainerImgMUI,
	ImgMUI,
	SpanMUI,
} = useQuestionPagesStyles();
export default React.memo(TranslatePage);
