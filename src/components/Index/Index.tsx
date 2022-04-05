import React, {FC} from 'react';
import Image from 'next/image';

import Step1 from '../../UI/UIIcon/Step1.png';
import Step2 from '../../UI/UIIcon/Step2.png';
import Step3 from '../../UI/UIIcon/Step3.png';
import Step4 from '../../UI/UIIcon/Step4.png';
import Map from '../../UI/UIIcon/Map.png';
import {useMobile} from '@/hooks/useMedia';
import IndexStep from './IndexStep/IndexStep';
import OctoGlobalBig from '../../UI/UIIcon/OctoGlobalBig.svg';
import ButtonUI from '../../UI/UIComponents/ButtonUI/ButtonUI';
import { IndexLayout, IndexShortLayout } from '@/layout/IndexLayout/IndexLayout';

import {useIndexStyle} from './style';

const IndexPage : FC = () => {

	const {isMobile} = useMobile();

	const {
		ContentUI,

		TitleUI,
		TextUI,
		ULUI,
		LIUI,
		OctoTextUI,

		MainBlockUI,
		MainInfoUI,
		MainInteractUI,
		MainIconUI,
		MainHowWorkUI,
		MainHowWorkBlockUI,
		MainHowWorkMapUI,
		MainHowWorkStepUI,

		WhyMeBlockUI,

		RegistrBlockUI,
		RegistrInfoBlockUI,
		RegistrImageUI,
		RegistrInfoUI,

		ButtonRegistrUI,
		ButtonRegistrMobileUI
	} = useIndexStyle();

	return (
		<ContentUI>
			<IndexLayout>
				<MainBlockUI>
					<MainInfoUI>

						<MainInteractUI>
							<TitleUI>
								Вы делаете  покупки в Европе, мы присылаем Вам их по почте
							</TitleUI>
							<TextUI>
								Мы предлагаем сервис по предоставлению адреса в Европе, чтобы вы могли пользоваться всеми преимуществами европейского покупателя.
								Выгода покупок до 60%, богатейший выбор товаров и брендов, только оригинальные вещи и гарантия  высокого качество.
								Служба поддержки в России и Европе поможет на любом этапе.
								<br/><br/>
								Если Вы хотите привезти крупногабаритный груз или коммерческую партию товара, поможем Вам в поиске, оплате и доставке.
							</TextUI>
							<ButtonUI
								style={isMobile ? ButtonRegistrMobileUI : ButtonRegistrUI}
							>
								{isMobile ? 'За покупками' : 'Регистрация'}
							</ButtonUI>
						</MainInteractUI>

						<MainIconUI>
							<OctoGlobalBig />
							<OctoTextUI>
								octo global
							</OctoTextUI>
						</MainIconUI>

					</MainInfoUI>

					<MainHowWorkUI>
						<TitleUI>
							Как это работает
						</TitleUI>
						<MainHowWorkBlockUI>
							<MainHowWorkMapUI>
								<Image
									src={Map}
								/>
								{/*<Map />*/}
							</MainHowWorkMapUI>
							<MainHowWorkStepUI>
								<IndexStep
									title=""
									subtitle="Зарегистрируйтесь на сайте, чтобы получить инструкцию для покупок. "
									image={Step1}
								/>
								<IndexStep
									title=""
									subtitle="Совершайте покупки самостоятельно или с помошью услуги «Выкуп товара»"
									image={Step2}
								/>
								<IndexStep
									title=""
									subtitle="Консолидируйте несколько покупок в одну посылку "
									image={Step3}
								/>
								<IndexStep
									title=""
									subtitle="Отправляем вам по почте"
									image={Step4}
								/>
							</MainHowWorkStepUI>
						</MainHowWorkBlockUI>
					</MainHowWorkUI>
				</MainBlockUI>
			</IndexLayout>

			<IndexLayout>
				<WhyMeBlockUI>
					<TitleUI>
						Почему нам доверяют
					</TitleUI>
					<ULUI>
						<LIUI>
							Поможем с поиском и оплатой любого товара
						</LIUI>
						<LIUI>
							Консультация и помощь на любом этапе
						</LIUI>
						<LIUI>
							Заполним сами экспортную декларацию
						</LIUI>
						<LIUI>
							Наши услуги для Вас бесплатны мы зарабатываем на экспорте который и так включён в стоимость товаров.
						</LIUI>
						<LIUI>
							Возможность оплаты криптовалютой
						</LIUI>
						<LIUI>
							Покупаю на территории ЕС наши услуги бесплатные.
						</LIUI>
						<LIUI>
							Возможно заказ любого вида товара от одежды до бытовой техники и спортинвентаря.
						</LIUI>
					</ULUI>
				</WhyMeBlockUI>
			</IndexLayout>

			<IndexLayout>Иконки</IndexLayout>

			<IndexShortLayout>
				<RegistrBlockUI>
					<TitleUI>
						Получите адрес прямо сейчас
					</TitleUI>
					<RegistrInfoBlockUI>
						<RegistrImageUI>
							{/*<Image />*/}
						</RegistrImageUI>

						<RegistrInfoUI>
							<TextUI>
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
							</TextUI>
							<ButtonUI
								style={isMobile ? ButtonRegistrMobileUI : ButtonRegistrUI}
							>
								Регистрация
							</ButtonUI>
						</RegistrInfoUI>
					</RegistrInfoBlockUI>
				</RegistrBlockUI>
			</IndexShortLayout>
		</ContentUI>
	);
};

export default React.memo(IndexPage);
