import React, {FC} from 'react';
import Image from 'next/image';

import OctoGlobalBig from '../../UI/UIIcon/OctoGlobalBig.svg';
import Step1 from '../../UI/UIIcon/Step1.png';
import Step2 from '../../UI/UIIcon/Step2.png';
import Step3 from '../../UI/UIIcon/Step3.png';
import Step4 from '../../UI/UIIcon/Step4.png';
import Map from '../../UI/UIIcon/Map.png';

import IndexStep from './IndexStep/IndexStep';
import ButtonUI from '../../UI/UIComponents/ButtonUI/ButtonUI';
import { IndexLayout, IndexShortLayout } from '@/layout/IndexLayout/IndexLayout';

import {useIndexStyle} from './style';
import {useMobile} from '@/hooks/useMedia';

const IndexPage : FC = () => {

	const {isMobile} = useMobile();

	const {
		IndexContentUI,

		TypographyTitleUI,
		TypographyTextUI,
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
		<IndexContentUI>
			<IndexLayout>
				<MainBlockUI>
					<MainInfoUI>

						<MainInteractUI>
							<TypographyTitleUI>
								Доставка товаров из Европы
							</TypographyTitleUI>
							<TypographyTextUI>
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
							</TypographyTextUI>
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
						<TypographyTitleUI>
							Как это работает
						</TypographyTitleUI>
						<MainHowWorkBlockUI>
							<MainHowWorkMapUI>
								<Image
									src={Map}
								/>
								{/*<Map />*/}
							</MainHowWorkMapUI>
							<MainHowWorkStepUI>
								<IndexStep
									title="1. Регистрируйтесь"
									subtitle="Получите адрес"
									image={Step1}
								/>
								<IndexStep
									title="1. Регистрируйтесь"
									subtitle="Получите адрес"
									image={Step2}
								/>
								<IndexStep
									title="1. Регистрируйтесь"
									subtitle="Получите адрес"
									image={Step3}
								/>
								<IndexStep
									title="1. Регистрируйтесь"
									subtitle="Получите адрес"
									image={Step4}
								/>
							</MainHowWorkStepUI>
						</MainHowWorkBlockUI>
					</MainHowWorkUI>
				</MainBlockUI>
			</IndexLayout>

			<IndexShortLayout>
				<WhyMeBlockUI>
					<TypographyTitleUI>
						Почему именно мы
					</TypographyTitleUI>
					<TypographyTextUI>
						Цепляющий текст
						Цепляющий текст
						Цепляющий текст
						Цепляющий текст
						Цепляющий текст
						Цепляющий текст
						Цепляющий текст
					</TypographyTextUI>
				</WhyMeBlockUI>
			</IndexShortLayout>

			<IndexLayout>Иконки</IndexLayout>

			<IndexShortLayout>
				<RegistrBlockUI>
					<TypographyTitleUI>
						Получите адрес прямо сейчас
					</TypographyTitleUI>
					<RegistrInfoBlockUI>
						<RegistrImageUI>
							{/*<Image />*/}
						</RegistrImageUI>

						<RegistrInfoUI>
							<TypographyTextUI>
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
								Цепляющий текст
							</TypographyTextUI>
							<ButtonUI
								style={isMobile ? ButtonRegistrMobileUI : ButtonRegistrUI}
							>
								Регистрация
							</ButtonUI>
						</RegistrInfoUI>
					</RegistrInfoBlockUI>
				</RegistrBlockUI>
			</IndexShortLayout>
		</IndexContentUI>
	);
};

export default React.memo(IndexPage);
