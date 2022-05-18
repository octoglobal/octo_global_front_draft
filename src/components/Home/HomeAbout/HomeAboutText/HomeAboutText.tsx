import React, {FC} from 'react';
import {useHomeAboutTextStyles} from '@/components/Home/HomeAbout/HomeAboutText/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';

const HomeAboutText: FC = () => {
	return (
		<ContainerMUI>
			<HomeSectionTitle
				title='Вы совершаете покупки в Европе, мы отправляем Вам их по почте.'
			/>

			<ParagraphMUI>
				<SpanMUI>Octo global</SpanMUI> - сервис по доставке ваших покупок из Европы.  Вы можете воспользоваться всеми <SpanMUI>преимуществами европейского покупателя</SpanMUI>.  Помощь при оплате товаров.
			</ParagraphMUI>
			<ParagraphMUI>

				<SpanMUI>Выгода покупок до 60%</SpanMUI>, большой ассортимент товаров, и брендов, только оригинальные вещи и гарантия высокого качества.
			</ParagraphMUI>
			<ParagraphMUI>
				Если вы хотите привезти крупногабаритный груз или коммерческую партию товара, то Мы поможем Вам в поиске, оплате и доставке.
			</ParagraphMUI>
			<ParagraphMUI>
				<SpanMUI>Служба поддержки в России и Европе</SpanMUI>
			</ParagraphMUI>
		</ContainerMUI>
	);
};

const {
	SpanMUI,
	ContainerMUI,
	ParagraphMUI,
} = useHomeAboutTextStyles();

export default React.memo(HomeAboutText);
