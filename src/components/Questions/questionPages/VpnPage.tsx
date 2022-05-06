import React from 'react';
import { useQuestionPagesStyles } from './style';

const VpnPage = () => {
	return (
		<ContainerMUI>
			<ContainerTextMUI>
				<H3MUI>1. Яндекс браузер</H3MUI>
				<ParagraphMUI> Откройте браузер. В правом верхнем углу нажмите на этот значок <SpanMUI><ImgMUI src="/image/yandexBurger.jpg" alt="=" /> </SpanMUI> выберите настройки – перейдите в Дополнения. </ParagraphMUI>			

				<ContainerImgMUI >
					<ImgMUI src="/image/yandexDop.jpg" alt="img" />
				</ContainerImgMUI>
			
				<ParagraphMUI>Прокрутите колесиком вниз и выберите каталог расширений для Яндекс.Браузера. </ParagraphMUI>
				<ContainerImgMUI>
					<ImgMUI src="/image/ydxCatalog.jpg" alt="каталог расширений браузера" />
				</ContainerImgMUI>
			
		 	<ParagraphMUI>В поисковой строке напишите VPN и скачайте. Перезапустите браузер, зайдите на сайт и наслаждайтесь шопингом!	</ParagraphMUI>

			</ContainerTextMUI>
			<ContainerTextMUI>
				<H3MUI>2. Google Chrome</H3MUI>
				<ParagraphMUI>Запустите браузер. В правой верхней части экрана нажмите на кнопку с дополнительными функциями. В открывшемся окне выберите Дополнительные инструменты – Расширения.</ParagraphMUI>
		
				<ContainerImgMUI>
					<ImgMUI src="/image/ChromSettings.jpg" alt="img" />
					<ImgMUI src="/image/ChromSettingsMore.jpg" alt="img" />				
				</ContainerImgMUI>
				<ParagraphMUI>В расширениях перейдите на интернет-магазин Chrome. В строке «Поиск по магазину» напишите VPN  и скачайте.</ParagraphMUI>
				<ImgMUI src="/image/ChromShop.jpg" alt="магазин google" />
			</ContainerTextMUI>
			
			<ContainerTextMUI>
				<H3MUI>3. Mozilla Firefox</H3MUI>
				<ParagraphMUI>Откройте браузер. В верхней части экрана откройте меню. Далее выберите Дополнения – Расширения.</ParagraphMUI>
				<ContainerImgMUI >
					<ImgMUI src="/image/MozilaSettings.jpg" alt="img" />				
				</ContainerImgMUI>
				<ParagraphMUI>В поиске «Найти больше дополнений» напишите VPN и откроется новая вкладка. Выберите понравившийся VPN, скачайте и совершайте покупки!</ParagraphMUI>
		
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
	SpanMUI
} = useQuestionPagesStyles();
export default React.memo(VpnPage);