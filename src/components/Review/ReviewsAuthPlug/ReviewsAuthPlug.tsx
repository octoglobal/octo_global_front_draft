import React, {FC} from 'react';
import {useReviewsAuthPlugStyles} from '@/components/Review/ReviewsAuthPlug/style';
import ButtonUI from '../../../UI/UIComponents/ButtonUI/ButtonUI';

const ReviewsAuthPlug: FC = () => {
	const {
		PlugWrapperMUI,
		ReviewPlugContentMUI,
		buttonSignUpStyle
	} = useReviewsAuthPlugStyles();

	return (
		<PlugWrapperMUI>
			<ReviewPlugContentMUI>
				Отзывы доступны после регистрации
			</ReviewPlugContentMUI>
			<ButtonUI sx={buttonSignUpStyle}>
				Регистрация
			</ButtonUI>
		</PlugWrapperMUI>

	);
};

export default React.memo(ReviewsAuthPlug);
