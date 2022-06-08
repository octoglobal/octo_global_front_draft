import React from 'react';
import { useQuestionPagesStyles } from './style';

const TranslatePage = () => {
	return (
		<ContainerMUI>
			<ContainerTextMUI>
				<H3MUI>1. Яндекс браузер</H3MUI>
				<ParagraphMUI>
					Перевести страницу можно быстро, если в дополнительных
					расширениях указан автоматический перевод страниц.Перейдите
					на иностранный сайт. В правой верхней части экрана появится
					панель для перевода --нажмите перевести страницу. Выберите
					язык для перевода и наслаждайтесь шопингом!
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/ydxTopMenu.jpg" alt="img" />
				</ContainerImgMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/ydxTransBtn.jpg" alt="img" />
				</ContainerImgMUI>
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>2. Google Chrome</H3MUI>
				<ParagraphMUI>
					Запустите браузер. В верхней части экрана нажмите на значок
					с тремя точками. Далее «Дополнительные инструменты» --
					«Расширения».
				</ParagraphMUI>

				<ContainerImgMUI>
					<ImgMUI
						src="/image/ChromSettings.jpg"
						alt="crhomSettings"
					/>
					<ImgMUI
						src="/image/ChromSettingsMore.jpg"
						alt="crhomSettingsMore"
					/>
				</ContainerImgMUI>
				<ParagraphMUI>
					В левой части экрана нажмите на значок с тремя{' '}
					<SpanMUI>
						<ImgMUI src="/image/yandexBurger.jpg" alt="=" />{' '}
					</SpanMUI>
					. Затем откройте интернет-магазин Chrome.
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/ChromShop.jpg" alt="магазин google" />
				</ContainerImgMUI>
				<ParagraphMUI>
					В новой вкладке откроется окно. В поиске по магазину
					напишите «переводчик». Выберите его и скачайте.<br></br> В
					поисковой строке выберите нужный сайт для шопинга.
				</ParagraphMUI>
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>3. Mozilla Firefox</H3MUI>
				<ParagraphMUI>
					Откройте браузер<br></br>В верхней части экрана откройте
					меню. Затем перейдите в «Дополнения».
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI
						src="/image/MozilaSettings.jpg"
						alt="mazila themes"
					/>
				</ContainerImgMUI>
				<ParagraphMUI>
					В поисковой строке напишите «Переводчик». Затем откроется
					новое окно с разными переводчиками. Выберите понравившийся и
					перезапустите браузер.
				</ParagraphMUI>
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>4. Safari</H3MUI>
				<ParagraphMUI>
					{/* В мобильной версии сайта iPhone, браузер Safari не предоставляет возможности для перевода. Для этого Вам нужно будет скачать Google Chrome и нажать на значок перевода */}
					В новой версии браузера Safari можно сделать перевод всей
					страницы на компьютере или телефоне. В доменной строке есть
					символ перевода или Аа. Нажав на него, браузер предлагает
					выбор языка и мгновенно переводит.
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
