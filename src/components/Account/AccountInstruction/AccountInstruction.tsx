import React, {FC} from 'react';

import {useAccountInstructionStyle} from './style';
// import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import WhatsAppIconLarge from '../../../UI/UIIcon/WhatsAppLarge.svg';

const AccountInstruction : FC = () => {
	return (
		<WrapperMUI>
			<HeaderMUI>
				<TextMUI style={{fontSize:'24px'}}>Инструкция</TextMUI>
			</HeaderMUI>
			<ULMUI>
				<LIMUI>Присылаете полную инструкцию на товар.</LIMUI>
				<LIMUI>Вы переводите сумму частному лицу на российскую карту в рублях по курсу Альфа банка на день оплаты +5%. Мы сразу покупаем евро на эти деньги, но для транспортировки их в Европу нам понадобится 2-3 дня.</LIMUI>
				<LIMUI>Затем выкупаем для вас товар самостоятельно. Присылаем подтверждение выкупа. Как только посылка приходит, оповещаем Вас.</LIMUI>
				<LIMUI>Даю точную стоимость отправки исходя из веса и габаритов.  Стоимость отправки, также, можно оплатить в рублях по курсу банка на день оплаты +5%. По вашим инструкциям отправляем в Россию Почтовой службой.</LIMUI>
			</ULMUI>
			<FooterMUI>
				<TextMUI>Если товар превышает сумму беспошлинного ввоза (на сегодня это пока что 200 евро за посылку), то там точно такая же процедура, как если бы товар пришел от интернет магазина на прямую. </TextMUI>
			</FooterMUI>
			<FooterButtonMUI>
				{/* <ButtonUI
					sx={ButtonToShopMUI}
				>
					За покупками!
				</ButtonUI> */}
				<LinkMUI >Связаться с менеджером</LinkMUI>


				<WhatsAppIconLarge/>
			</FooterButtonMUI>
		</WrapperMUI>
	);
};

export default React.memo(AccountInstruction);

const {
	WrapperMUI,
	HeaderMUI,
	FooterMUI,
	FooterButtonMUI,
	ULMUI,
	LIMUI,
	TextMUI,
	LinkMUI
} = useAccountInstructionStyle();
