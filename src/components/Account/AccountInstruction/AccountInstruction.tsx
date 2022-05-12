import React, {FC} from 'react';

import {useAccountInstructionStyle} from './style';
// import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';
import WhatsAppIconLarge from '../../../UI/UIIcon/WhatsAppLarge.svg';
import {SUPPORT_PHONE_DE} from '@/constants/constants';

const AccountInstruction : FC = () => {
	return (
		<WrapperMUI>
			<HeaderMUI>
				<TextMUI style={{fontSize:'24px'}}>Выкуп товара</TextMUI>
			</HeaderMUI>
			<ULMUI>
				<LIMUI>Мы выкупим товар в Европе с вашего личного счета с Octo Global..</LIMUI>
				<LIMUI>Если товар превышает сумму беспошлинного ввоза (1000 евро за посылку), предстоит процедура таможенного оформления, как при покупке напрямую в интернет-магазине.  </LIMUI>
				<LIMUI>Для выкупа товара необходимо пополнить личный счет на Octo Global.</LIMUI>
				<LIMUI>Заполните графы в  заявке на выкуп товара и наш менеджер выкупит товар с вашего счета Octo Global.</LIMUI>
			</ULMUI>
			{/* <FooterMUI>
				<TextMUI>Если товар превышает сумму беспошлинного ввоза (на сегодня это пока что 200 евро за посылку), то там точно такая же процедура, как если бы товар пришел от интернет магазина на прямую. </TextMUI>
			</FooterMUI> */}
			<FooterButtonMUI>
				{/* <ButtonUI
					sx={ButtonToShopMUI}
				>
					За покупками!
				</ButtonUI> */}
				<LinkMUI
					href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_DE}&text=`}
				>Связаться с менеджером</LinkMUI>
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
