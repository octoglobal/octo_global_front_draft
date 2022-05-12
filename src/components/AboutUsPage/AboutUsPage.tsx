import React, { useEffect, useState } from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { styled } from '@mui/material';
import CollapseInfo from '@/components/AnyPage/CollapseInfo/CollapseInfo';
import VpnPage from './questionPages/VpnPage';
import TranslatePage from './questionPages/TranslatePage';
import AboutTransferPage from './questionPages/AboutTransferPage';
import { useRouter } from 'next/router';
import { useAboutUsStyle } from './style';



const AboutUsPage = () => {
	


	return (
		<ContainerMUI>
			<HeaderMargin/>
					
			<ParagraphMUI>
				Компания "Octo Global" работает на российском и немецком рынках с 2021 года. 
 




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


const ContainerMUI = styled('div')(() => ({
	maxWidth: '650px',
	margin: '15px auto 0'
}));

const {
	ParagraphMUI
} = useAboutUsStyle();

export default React.memo(AboutUsPage);
