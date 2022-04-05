import React, {FC} from 'react';
import {useHomeAboutTextStyles} from '@/components/Home/HomeAbout/HomeAboutText/style';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';

const HomeAboutText: FC = () => {

	const {
		buttonSx,
		ContainerMUI,
		ParagraphMUI,
		ButtonWrapperMUI
	} = useHomeAboutTextStyles();

	return (
		<ContainerMUI>
			<HomeSectionTitle
				title='Вы делаете  покупки в Европе, мы присылаем Ва их по почте'
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
			<ButtonWrapperMUI>
				<ButtonUI sx={buttonSx}>
					Регистрация
				</ButtonUI>
			</ButtonWrapperMUI>
		</ContainerMUI>
	);
};

export default React.memo(HomeAboutText);
