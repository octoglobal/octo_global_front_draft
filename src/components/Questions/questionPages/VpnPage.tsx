import React from 'react';
import { useQuestionPagesStyles } from './style';

const VpnPage = () => {
	return (
		<ContainerMUI>
			<ContainerTextMUI>
				<H3MUI>1. Яндекс браузер</H3MUI>
				<ParagraphMUI>
					{' '}
					Откройте настройки. В правом, верхнем углу 3 черточки —{' '}
					<SpanMUI>
						<ImgMUI src="/image/yandexBurger.jpg" alt="=" />{' '}
					</SpanMUI>{' '}
					и нажмите настройки. Прокрутите до раздела «Турбо» и выберите «Автоматически включать…».
					Нажмите 3 клавиши одновременно – Ctrl+Shift+Del и удалите «файлы, сохраненные в кэше».{' '}
				</ParagraphMUI>
				<ParagraphMUI>
					Перезапустите браузер и наслаждайтесь свободным серфингом
				</ParagraphMUI>
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI src="/image/yandexDop.jpg" alt="img" />*/}
				{/*</ContainerImgMUI>*/}

				{/*<ParagraphMUI>*/}
				{/*	Прокрутите колесиком вниз и выберите каталог расширений для*/}
				{/*	Яндекс.Браузера.{' '}*/}
				{/*</ParagraphMUI>*/}
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI*/}
				{/*		src="/image/ydxCatalog.jpg"*/}
				{/*		alt="каталог расширений браузера"*/}
				{/*	/>*/}
				{/*</ContainerImgMUI>*/}

				{/*<ParagraphMUI>*/}
				{/*	В поисковой строке напишите VPN и скачайте. Перезапустите*/}
				{/*	браузер, зайдите на сайт и наслаждайтесь шопингом!{' '}*/}
				{/*</ParagraphMUI>*/}

			</ContainerTextMUI>
			<ContainerTextMUI>
				<H3MUI>2. Google Chrome</H3MUI>
				<ParagraphMUI>
					В правом верхнем углу нажмите на троеточие. Далее, переходим в «Дополнительные инструменты», потом «Расширения».
				</ParagraphMUI>
				<ParagraphMUI>
					В поиске напишите «VPN».
				</ParagraphMUI>
				<ParagraphMUI>
					Установите выбранное расширение.
				</ParagraphMUI>
				{/*<ContainerImgMUI>*/}
				{/*	<ImgMUI src="/image/ChromSettings.jpg" alt="img" />*/}
				{/*	<ImgMUI src="/image/ChromSettingsMore.jpg" alt="img" />*/}
				{/*</ContainerImgMUI>*/}
				{/*<ParagraphMUI>*/}
				{/*	В расширениях перейдите на интернет-магазин Chrome. В строке*/}
				{/*	«Поиск по магазину» напишите VPN и скачайте.*/}
				{/*</ParagraphMUI>*/}
				{/*<ImgMUI src="/image/ChromShop.jpg" alt="магазин google" />*/}
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>3. Mozilla Firefox</H3MUI>
				<ParagraphMUI>
					Откройте браузер. В верхней части экрана откройте меню.
					Далее выберите Дополнения – Расширения.
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/MozilaSettings.jpg" alt="img" />
				</ContainerImgMUI>
				<ParagraphMUI>
					В поиске «Найти больше дополнений» напишите VPN и откроется
					новая вкладка. Выберите понравившийся VPN, скачайте и
					совершайте покупки!
				</ParagraphMUI>
			</ContainerTextMUI>

			<ContainerTextMUI>
				<H3MUI>4. Safari</H3MUI>
				<ParagraphMUI>
					Откройте браузер. В верхней части экрана откройте меню
					Safari. Далее выберите Настройки.
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/SafariSettings.jpg" alt="img" />
				</ContainerImgMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/SafariSettingsMore.jpg" alt="img" />
				</ContainerImgMUI>
				<ParagraphMUI>
					В настройках вы найдете раздел «Дополнения», где сразу можно
					изменить настройки прокси.
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/SafariProxy.jpg" alt="img" />
				</ContainerImgMUI>
				<ParagraphMUI>
					Далее необходимо выбрать защищенный протокол веб-прокси и
					ввести нужные данные к прокси.
				</ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/SafariAccept.jpg" alt="img" />
				</ContainerImgMUI>
				<ParagraphMUI>
					Если все данные были введены верно, то система примет их.
					Останется лишь сохранить эти настройки. Готово!
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
export default React.memo(VpnPage);
