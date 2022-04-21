import React, {FC} from 'react';
import {useHomeAboutTextStyles} from '@/components/Home/HomeAbout/HomeAboutText/style';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import RussianIcon from '../../../../UI/UIIcon/RussianIcon.svg';
import GermanyIcon from '../../../../UI/UIIcon/GerIcon.svg';
import WhatsAppIcon from '../../../../UI/UIIcon/WhatsappIcon.svg';
import {SUPPORT_PHONE_DE, SUPPORT_PHONE_RU} from '@/constants/constants';

const HomeAboutText: FC = () => {
	return (
		<ContainerMUI>
			<HomeSectionTitle
				title='Вы делаете покупки в Европе, мы присылаем Вам их по почте'
			/>
			<ParagraphMUI>
				Мы предлагаем сервис по предоставлению адреса в Европе, чтобы
				вы могли пользоваться всеми преимуществами европейского
				покупателя. Выгода покупок до 60%, богатейший выбор товаров и
				брендов, только оригинальные вещи и гарантия  высокого
				качество. Служба поддержки в России и Европе поможет на любом
				этапе.
				<br/>
				<br/>
				Если Вы хотите привезти крупногабаритный груз или
				коммерческую партию товара, поможем Вам в поиске, оплате
				и доставке.
			</ParagraphMUI>
			<LinkContainerMUI>
				<LinkTitleMUI>
					Поддержка
				</LinkTitleMUI>
				<LinkWrapperMUI>
					<LinkItemMUI href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_RU}&text=`} target='_blank' title='WhatsAppRU'>
						<RussianIcon/>
						<WhatsAppIcon/>
					</LinkItemMUI>
					<LinkItemMUI href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_DE}&text=`} target='_blank' title='WhatsAppDE'>
						<GermanyIcon/>
						<WhatsAppIcon/>
					</LinkItemMUI>
				</LinkWrapperMUI>
			</LinkContainerMUI>
		</ContainerMUI>
	);
};

const {
	LinkItemMUI,
	LinkTitleMUI,
	ContainerMUI,
	ParagraphMUI,
	LinkWrapperMUI,
	LinkContainerMUI
} = useHomeAboutTextStyles();

export default React.memo(HomeAboutText);
