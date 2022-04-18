import React from 'react';

import VkIcon from '../../../UI/UIIcon/VKIconColor.svg';
//import InstIcon from '../../../UI/UIIcon/InstIcon.svg';
import OdnoklasIcon from '../../../UI/UIIcon/OdnoklasIconColor.svg';
import WhatsUpIcon from '../../../UI/UIIcon/WhatsappIconColor.svg';
import TelegramIcon from '../../../UI/UIIcon/TelegramIconColor.svg';

import {useCustomSize} from '@/hooks/useMedia';

import {useFooterStyle} from './style';
import SvgLinkUI from '../../../UI/UIComponents/SvgLinkUI/SvgLinkUI';
import {SUPPORT_PHONE_RU} from '@/constants/constants';

const Footer = () => {

	const {
		FooterWrapperUI,
		FooterContentUI,
		FooterRowUI,
		FooterColumnBlockUI,
		FooterColumnTitleUI,
		FooterColumnTextUI,
		IndexTitleUI,
		FooterRowIconsUI,
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
								<SvgLinkUI
									href='https://vk.com/'
									title='vk'
								>
									<VkIcon/>
								</SvgLinkUI>
								<SvgLinkUI
									title='ok'
									href='https://ok.ru/'
								>
									<OdnoklasIcon/>
								</SvgLinkUI>
								<SvgLinkUI
									title='telegram'
									href='https://web.telegram.org/k/'
								>
									<TelegramIcon/>
								</SvgLinkUI>
								{/*<InstIcon />*/}
							</FooterRowIconsUI>
						</FooterColumnBlockUI>

						<FooterColumnBlockUI>
							<FooterColumnTitleUI>Чаты поддержки</FooterColumnTitleUI>
							<FooterRowIconsUI>
								<SvgLinkUI
									title='telegram'
									href={'tg://resolve?domain=<@qwe>'}
								>
									<TelegramIcon/>
								</SvgLinkUI>
								<SvgLinkUI
									title='whatsapp'
									href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_RU}&text=123`}
								>
									<WhatsUpIcon/>
								</SvgLinkUI>
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
