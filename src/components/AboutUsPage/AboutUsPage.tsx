import React from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { useAboutUsStyle } from './style';

const AboutUsPage = () => {
	return (
		<ContainerMUI>
			<HeaderMargin />
			<AboutContainerMUI>
				<AboutTitleMUI>
				О нас
				</AboutTitleMUI>
				<ParagraphMUI>
					<HighlightSpanMUI> Компания &quot;Octo Global&quot;</HighlightSpanMUI> работает на российском и немецком рынках с <HighlightSpanMUI> 2021 </HighlightSpanMUI> года. 
				</ParagraphMUI>
				<ParagraphMUI>
					Головной офис компании находится в Германии в городе <HighlightSpanMUI>Гамбург</HighlightSpanMUI>, а
					официальный представитель в России <HighlightSpanMUI>г. Санкт-Петербург</HighlightSpanMUI>. Наш
					основной склад расположен в городе Гамбург, дополнительные
					склады находятся в Роттердаме (Нидерланды) и Котке (Финляндия).
				</ParagraphMUI>
				<ParagraphMUI>
					Наше основное направление – это <HighlightSpanMUI>предоставление склада для ваших
					покупок</HighlightSpanMUI> в Европе и дальнейшая логистика.
				</ParagraphMUI>
				<ParagraphMUI>
					Мы <HighlightSpanMUI>современная</HighlightSpanMUI> и динамично <HighlightSpanMUI>развивающаяся  </HighlightSpanMUI> компания. Наша основная
					цель — это индивидуальный подход к каждому клиенту,
					профессионализм и компетентность. Octo global - ваш персональный <HighlightSpanMUI>надежный </HighlightSpanMUI> помощник по доставке товаров из Европы!
				</ParagraphMUI>
			</AboutContainerMUI> 
		</ContainerMUI>
	);
};

const { ContainerMUI, AboutContainerMUI, AboutTitleMUI, ParagraphMUI, HighlightSpanMUI,} = useAboutUsStyle();

export default React.memo(AboutUsPage);
