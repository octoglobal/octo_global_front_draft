import React from 'react';
import { useQuestionPagesStyles } from './style';

const TrackYourOrder = () => {
	return (
		<ContainerMUI>
			<ContetntLineMUI>
				<ParagraphMUI>
					В личном кабинете Вы можете найти трек номер Вашего заказа
					внутри европы и трек номер почтового отправления. Нажав на
					трек номер вы попадаете на сервис по отслеживанию посылок по
					всему миру. Вы всегда видите где находится ваша покупка.
				</ParagraphMUI>
			</ContetntLineMUI>
		</ContainerMUI>
	);
};

const { ContainerMUI, ParagraphMUI, ContetntLineMUI } =
	useQuestionPagesStyles();
export default React.memo(TrackYourOrder);
