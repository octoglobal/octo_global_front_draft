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
				<ParagraphMUI isNotBottom>
					<HighlightSpanMUI> Компания &quot;Octo Global&quot;</HighlightSpanMUI> работает на российском и немецком рынках с <HighlightSpanMUI>2021</HighlightSpanMUI> года.
				</ParagraphMUI>
				<ParagraphMUI>
					Головной офис компании находится в Германии в городе <HighlightSpanMUI>Гамбург</HighlightSpanMUI>, а
					официальный представитель в России <HighlightSpanMUI>г. Санкт-Петербург</HighlightSpanMUI>.
				</ParagraphMUI>
				<ParagraphMUI >
					Основное наше направление – это <HighlightSpanMUI>выкуп и предоставление склада для ваших покупок</HighlightSpanMUI> в Европе и дальнейшая логистика.
				</ParagraphMUI>
				<ParagraphMUI>
					Наша основная
					цель — это индивидуальный подход к каждому клиенту,
					профессионализм и компетентность.
				</ParagraphMUI>
				<ParagraphMUI>
					<HighlightSpanMUI>Octo global</HighlightSpanMUI> - ваш персональный <HighlightSpanMUI>надежный </HighlightSpanMUI> помощник по доставке товаров из Европы!
				</ParagraphMUI>
			</AboutContainerMUI>
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	AboutContainerMUI,
	AboutTitleMUI,
	ParagraphMUI,
	HighlightSpanMUI,
} = useAboutUsStyle();

export default React.memo(AboutUsPage);
