import React from 'react';
import { useQuestionPagesStyles } from './style';

import Busket from '../../../UI/UIIcon/Busket.svg';

const AboutTransferPage = () => {
	return (
		<ContainerMUI>
			<ParagraphMUI>Стоимость почтового отправления в Россию зависит от веса, размеров упаковки и стоимости товара.</ParagraphMUI>
			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>
				<ParagraphMUI>2 кг коробка до 30*30*30 см = от 23EUR</ParagraphMUI>
			</ContetntLineMUI>

			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>
				<ParagraphMUI>5 кг коробка до 120*60*60 см = от 39 EUR</ParagraphMUI>
			</ContetntLineMUI>

			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>
				<ParagraphMUI>10 кг коробка до 120*60*60 см = от 46 EUR</ParagraphMUI>
			</ContetntLineMUI>

			<ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>
				<ParagraphMUI>20 кг коробка до 120*60*60 см = от 63 EUR</ParagraphMUI>
			</ContetntLineMUI>

			{/* <ContetntLineMUI>
				<SvgBlockMUI>
					<Busket/>
				</SvgBlockMUI>
				<ParagraphMUI>30 кг Один товар с негабаритными размерами 180×60×60см = 95 EUR </ParagraphMUI>
			</ContetntLineMUI> */}
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
