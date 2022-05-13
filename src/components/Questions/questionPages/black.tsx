import React from 'react';
import { useQuestionPagesStyles } from './style';

const BlankPage = () => {
	return (
		<ContainerMUI>
		
		</ContainerMUI>
	);
};

const {
	ContainerMUI,
	H3MUI,
	ParagraphMUI,
	ContainerTextMUI,
	ContainerImgMUI,
	ImgMUI,
	SpanMUI
} = useQuestionPagesStyles();
export default React.memo(BlankPage);