import React from 'react';

import VkIcon from '../../../UI/UIIcon/VKIconColor.svg';
//import InstIcon from '../../../UI/UIIcon/InstIcon.svg';
// import OdnoklasIcon from '../../../UI/UIIcon/OdnoklasIconColor.svg';
import WhatsUpIcon from '../../../UI/UIIcon/WhatsappIconColor.svg';
import TelegramIcon from '../../../UI/UIIcon/TelegramIconColor.svg';

import {useCustomSize} from '@/hooks/useMedia';

import {useFooterStyle} from './style';
import SvgLinkUI from '../../../UI/UIComponents/SvgLinkUI/SvgLinkUI';
import {SUPPORT_PHONE_RU} from '@/constants/constants';
import { WHATSAPP } from '@/lib/services/services';
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
	
		FooterColumnTextMUI,
		FooterColumnSocialBlockMUI,
	} = useFooterStyle();

	const {isCustomSize} = useCustomSize(800);

	return (
		<FooterWrapperUI>
			<FooterContentUI>

				<FooterColumnBlockUI>
					<FooterColumnTitleUI>Полезное</FooterColumnTitleUI>
					<FooterColumnTextUI href='/shops'>Список магазинов</FooterColumnTextUI>
					<FooterColumnTextUI href='/questions?transfer'>Стоимость посылки</FooterColumnTextUI>
					<FooterColumnTextUI href='/questions'>Частые вопросы</FooterColumnTextUI>
				</FooterColumnBlockUI>

				<FooterColumnBlockUI>
					<FooterColumnTitleUI>Информация</FooterColumnTitleUI>
					<FooterColumnTextUI href='/reviews'>Отзывы</FooterColumnTextUI>
					<FooterColumnTextUI href='/blog'>Блог</FooterColumnTextUI>
				</FooterColumnBlockUI>

				<FooterColumnBlockUI>
					<FooterColumnTitleUI>Общая информация</FooterColumnTitleUI>
					<FooterColumnTextUI href='/aboutus'>О нас</FooterColumnTextUI>
					<FooterColumnTextUI href='/contacts'>Контакты</FooterColumnTextUI>
					<FooterColumnTextUI href='/lawinfo'>Юридическая информация</FooterColumnTextUI>
				 	{isCustomSize?<FooterColumnTextMUI href='/contacts'>Обратная связь</FooterColumnTextMUI>:null}	
				</FooterColumnBlockUI>

				<FooterColumnBlockUI>
					<FooterRowUI>
						<FooterColumnSocialBlockMUI>
							<FooterColumnTitleUI>Социальные сети</FooterColumnTitleUI>
							<FooterRowIconsUI>
								<SvgLinkUI
									href='https://vk.com/club212299557'
									title='vk'
								>
									<VkIcon/>
								</SvgLinkUI>
								{/*<SvgLinkUI*/}
								{/*	title='ok'*/}
								{/*	href='https://ok.ru/'*/}
								{/*>*/}
								{/*	<OdnoklasIcon/>*/}
								{/*</SvgLinkUI>*/}
								<SvgLinkUI
									title='telegram'
									href='https://t.me/octoglobal'
								>
									<TelegramIcon/>
								</SvgLinkUI>
								{/*<InstIcon />*/}
							</FooterRowIconsUI>
							{!isCustomSize && <IndexTitleUI
								href="https://www.index-studio.ru/"
								rel="noopener noreferrer"
								target="_blank"
							>
							Разработано студией INDEX 
							</IndexTitleUI>}
							
						</FooterColumnSocialBlockMUI>

						<FooterColumnSocialBlockMUI>
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
									// href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_RU}&text=Здавствуйте!`}
									href={WHATSAPP(SUPPORT_PHONE_RU)}
								>
									<WhatsUpIcon/>
								</SvgLinkUI>
							</FooterRowIconsUI>
							{!isCustomSize &&<IndexTitleUI
								href="/contacts"								
							>
							Обратная связь
							</IndexTitleUI>}
							
						</FooterColumnSocialBlockMUI>

					</FooterRowUI>

				
				</FooterColumnBlockUI>

				{isCustomSize && (
					<IndexTitleUI
						href="https://www.index-studio.ru/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Разработано студией INDEX
					</IndexTitleUI>
				)}
			</FooterContentUI>
		</FooterWrapperUI>
	);
};

export default React.memo(Footer);
