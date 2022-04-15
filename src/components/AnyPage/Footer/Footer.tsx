import React from 'react';

import VkIcon from '../../../UI/UIIcon/VKIconColor.svg';
//import InstIcon from '../../../UI/UIIcon/InstIcon.svg';
import OdnoklasIcon from '../../../UI/UIIcon/OdnoklasIconColor.svg';
import WhatsUpIcon from '../../../UI/UIIcon/WhatsappIconColor.svg';
import TelegramIcon from '../../../UI/UIIcon/TelegramIconColor.svg';

import {useCustomSize} from '@/hooks/useMedia';

import {useFooterStyle} from './style';

const Footer = () => {

	const {
		FooterWrapperUI,
		FooterContentUI,
		FooterRowUI,
		FooterColumnBlockUI,
		FooterColumnTitleUI,
		FooterColumnTextUI,
		IndexTitleUI,
		FooterRowIconsUI
	} = useFooterStyle();

	const {isCustomSize} = useCustomSize(800);

	return (
		<FooterWrapperUI>
			<FooterContentUI>

				<FooterColumnBlockUI>
					<FooterColumnTitleUI>Полезное</FooterColumnTitleUI>
					<FooterColumnTextUI>Список магазинов</FooterColumnTextUI>
					<FooterColumnTextUI>Стоимость посылки</FooterColumnTextUI>
					<FooterColumnTextUI>Частые вопросы</FooterColumnTextUI>
				</FooterColumnBlockUI>

				<FooterColumnBlockUI>
					<FooterColumnTitleUI>Информация</FooterColumnTitleUI>
					<FooterColumnTextUI>Отзывы</FooterColumnTextUI>
					<FooterColumnTextUI>Блог</FooterColumnTextUI>
				</FooterColumnBlockUI>

				<FooterColumnBlockUI>
					<FooterColumnTitleUI>Общая информация</FooterColumnTitleUI>
					<FooterColumnTextUI>О нас</FooterColumnTextUI>
					<FooterColumnTextUI>Контакты</FooterColumnTextUI>
					<FooterColumnTextUI>Юридическая информация</FooterColumnTextUI>
				</FooterColumnBlockUI>

				<FooterColumnBlockUI>
					<FooterRowUI>
						<FooterColumnBlockUI>
							<FooterColumnTitleUI>Социальные сети</FooterColumnTitleUI>
							<FooterRowIconsUI>
								<VkIcon/>
								<OdnoklasIcon/>
								<TelegramIcon/>
								{/*<InstIcon />*/}
							</FooterRowIconsUI>
						</FooterColumnBlockUI>

						<FooterColumnBlockUI>
							<FooterColumnTitleUI>Чаты поддержки</FooterColumnTitleUI>
							<FooterRowIconsUI>
								<TelegramIcon/>
								<WhatsUpIcon/>
							</FooterRowIconsUI>
						</FooterColumnBlockUI>

					</FooterRowUI>

					{!isCustomSize && (
						<IndexTitleUI
							href="https://lndex.ru/"
							rel="noopener noreferrer"
							target="_blank"
						>
							Разработано студией INDEX
						</IndexTitleUI>
					)}
				</FooterColumnBlockUI>

				{isCustomSize && (
					<IndexTitleUI>
						Разработано студией INDEX
					</IndexTitleUI>
				)}
			</FooterContentUI>
		</FooterWrapperUI>
	);
};

export default React.memo(Footer);
