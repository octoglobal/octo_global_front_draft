import React from 'react';

import VkIcon from '../../../UI/UIIcon/VKIcon.svg';
//import InstIcon from '../../../UI/UIIcon/InstIcon.svg';
import OdnoklasIcon from '../../../UI/UIIcon/OdnoklasIcon.svg';
//import WhatsUpIcon from '../../../UI/UIIcon/WhatsUpIcon.svg';
import TelegramIcon from '../../../UI/UIIcon/TelegramIcon.svg';

import {useFooterStyle} from './style';

const Footer = () => {

	const {
		FooterWrapperUI,
		FooterRowUI,
		FooterColumnBlockUI,
		FooterColumnTitleUI,
		FooterColumnTextUI,
		IndexTitleUI,
		FooterRowIconsUI
	} = useFooterStyle();

	return (
		<FooterWrapperUI>
			<FooterColumnBlockUI>
				<FooterColumnTitleUI>Общая информация</FooterColumnTitleUI>
				<FooterColumnTextUI>Политика конфиденциальности</FooterColumnTextUI>
				<FooterColumnTextUI>Пользовательское соглашение</FooterColumnTextUI>
				<FooterColumnTextUI>Публичная оферта</FooterColumnTextUI>
			</FooterColumnBlockUI>

			<FooterColumnBlockUI>
				<FooterColumnTitleUI>Полезное</FooterColumnTitleUI>
				<FooterColumnTextUI>Список магазинов</FooterColumnTextUI>
				<FooterColumnTextUI>Список стран</FooterColumnTextUI>
				<FooterColumnTextUI>Калькулятор</FooterColumnTextUI>
			</FooterColumnBlockUI>

			<FooterColumnBlockUI>
				<FooterColumnTitleUI>Блог</FooterColumnTitleUI>
				<FooterColumnTextUI>Как это работает</FooterColumnTextUI>
				<FooterColumnTextUI>Как заполнять адрес</FooterColumnTextUI>
				<FooterColumnTextUI>Как отслеживать трек-номер</FooterColumnTextUI>
			</FooterColumnBlockUI>

			<FooterColumnBlockUI>

				<FooterRowUI>

					<FooterColumnBlockUI>
						<FooterColumnTitleUI>Социальные сети</FooterColumnTitleUI>
						<FooterRowIconsUI>
							<VkIcon />
							{/*<InstIcon />*/}
							<OdnoklasIcon />
						</FooterRowIconsUI>
					</FooterColumnBlockUI>

					<FooterColumnBlockUI>
						<FooterColumnTextUI>Чаты поддержки</FooterColumnTextUI>
						<FooterRowIconsUI>
							<TelegramIcon />
							{/*<WhatsUpIcon />*/}
						</FooterRowIconsUI>
					</FooterColumnBlockUI>

				</FooterRowUI>

				<IndexTitleUI>Разработано студией INDEX</IndexTitleUI>

			</FooterColumnBlockUI>


		</FooterWrapperUI>
	);
};

export default React.memo(Footer);
