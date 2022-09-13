import React from 'react';
import { useQuestionPagesStyles } from './style';

import Busket from '../../../UI/UIIcon/Busket.svg';

const AboutTransferPage = () => {
	return (
		<ContainerMUI>
			
			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>				
				<ParagraphMUI>2 кг Коробка до 30*30*30см = 19,89 EUR </ParagraphMUI>
			</ContetntLineMUI>

			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>				
				<ParagraphMUI>5 кг Коробка до 120*60*60 см = 31 EUR / Premium 38,50 EUR</ParagraphMUI>
			</ContetntLineMUI>

			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>				
				<ParagraphMUI>10 кг Коробка до 120*60*60 см = 38 EUR / Premium 51 EUR</ParagraphMUI>
			</ContetntLineMUI>

			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>				
				<ParagraphMUI>20 кг Коробка до 120*60*60 см = 55 EUR / Premium 74 EUR</ParagraphMUI>
			</ContetntLineMUI>
            
			{/* <ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>				
				<ParagraphMUI>30 кг Один товар с негабаритными размерами 180×60×60см = 95 EUR </ParagraphMUI>
			</ContetntLineMUI> */}

			<ParagraphMUI>Ориентировочные сроки доставки от 10-20 дней. С сервисом Premium ваши посылки доходят быстрее.</ParagraphMUI>

		</ContainerMUI>
	);
};

const {
	ContainerMUI,	
	ParagraphMUI,
	ContetntLineMUI,
	SvgBlockMUI
	
} = useQuestionPagesStyles();
export default React.memo(AboutTransferPage);