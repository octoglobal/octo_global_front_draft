import React from 'react';
import { useQuestionPagesStyles } from './style';

const TrackYourOrder = () => {
	return (
		<ContainerMUI>
			<ContetntLineMUI>
				<ParagraphMUI>
					После отправления товара из Европы, в личном кабинете появиться трек номер. По нему вы можете отследить посылку на сайте Почты России.
				</ParagraphMUI>
			</ContetntLineMUI>
		</ContainerMUI>
	);
};

const { ContainerMUI, ParagraphMUI, ContetntLineMUI } =
	useQuestionPagesStyles();
export default React.memo(TrackYourOrder);
