import React, {FC} from 'react';
import {useHomeAboutTextStyles} from '@/components/Home/HomeAbout/HomeAboutText/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';

import WhatsUpIcon from '../../../../UI/UIIcon/WhatsappIconColor.svg';
import SvgLinkUI from '../../../../UI/UIComponents/SvgLinkUI/SvgLinkUI';
import {SUPPORT_PHONE_RU ,SUPPORT_PHONE_DE} from '@/constants/constants';

import { WHATSAPP } from '@/lib/services/services';

const HomeAboutText: FC = () => {
	return (
		<ContainerMUI>
			<HomeSectionTitle
				title='Вы совершаете покупки в Европе, мы отправляем Вам их по почте.'
			/>

			<ParagraphMUI>
				<SpanMUI>Octo Global</SpanMUI> - сервис по доставке ваших покупок из Европы.  Вы можете воспользоваться всеми <SpanMUI>преимуществами европейского покупателя</SpanMUI>.
			</ParagraphMUI>
			<ParagraphMUI>

				<SpanMUI>Выгода покупок до 60%</SpanMUI>, большой ассортимент товаров и брендов, только оригинальные вещи и гарантия высокого качества.
			</ParagraphMUI>
			<ParagraphMUI>
				Если вы хотите привезти крупногабаритный груз или коммерческую партию товара, то мы поможем Вам в поиске, оплате и доставке.
			</ParagraphMUI>
			<ParagraphMUI>
				<SpanMUI>Служба поддержки в России и Европе поможет на любом этапе.</SpanMUI>
			</ParagraphMUI>
			<ParagraphMUI>
				Наша комиссия составляет 10% от стоимости заказа
			</ParagraphMUI>
			<ParagraphMUI>
				Курс Евро к рублю вы видите у нас на сайте в личном кабинете.
			</ParagraphMUI>
			<FooterRowIconsMUI>
				<SvgLinkUI
					title='Поддрежака в России'
					href={WHATSAPP(SUPPORT_PHONE_RU)}
				>
					<WhatsUpIcon/>
				</SvgLinkUI>
				<SvgLinkUI
					title='Поддрежака в Германии'
					href={WHATSAPP(SUPPORT_PHONE_DE)}
				>
					<WhatsUpIcon/>
				</SvgLinkUI>
			</FooterRowIconsMUI>
		</ContainerMUI>
	);
};

const {
	SpanMUI,
	ContainerMUI,
	ParagraphMUI,
	FooterRowIconsMUI,
} = useHomeAboutTextStyles();

export default React.memo(HomeAboutText);
