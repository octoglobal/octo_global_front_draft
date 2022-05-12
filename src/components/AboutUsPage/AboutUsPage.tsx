import React from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { useAboutUsStyle } from './style';


const AboutUsPage = () => {	

	return (
		<ContainerMUI>
			<HeaderMargin/>
					
			<ParagraphMUI>
				Компания &quot;Octo Global&quot; работает на российском и немецком рынках с 2021 года.
			</ParagraphMUI>

			<ParagraphMUI>
				Головной офис компании находится в Германии в городе Гамбург, а официальный представитель в России г. Санкт-Петербург. 
				Наш основной склад расположен в городе Гамбург, дополнительные склады находятся в Роттердаме (Нидерланды) и Котке (Финляндия).
			</ParagraphMUI>
			<ParagraphMUI>
				Наше основное направление – это предоставление склада для ваших покупок в Европе и дальнейшая логистика.
			</ParagraphMUI>
			<ParagraphMUI>
				Мы современная и динамично развивающаяся компания
				Наша основная цель — это индивидуальный подход к каждому клиенту, профессионализм и компетентность.
				Octo global - ваш персональный надежный помощник по доставке товаров из Европы!
			</ParagraphMUI>
			
		</ContainerMUI>
	);
};

const {
	ParagraphMUI,
	ContainerMUI
} = useAboutUsStyle();

export default React.memo(AboutUsPage);
