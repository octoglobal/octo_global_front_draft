import React, {FC} from 'react';
import BlogNewsItem from './BlogNewsItem/BlogNewsItem';
import ButtonUI from '../../UI/UIComponents/ButtonUI/ButtonUI';
import {useBlogPageStyle} from '@/components/Blog/style';

const BlogPage : FC = () => {
	return (
		<BlogMUI>
			<BlogNewsItem
				title="Самые популярные сайты для покупок нижнего белья"
				text="Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для  Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для "
			/>

			<BlogNewsItem
				title="Самые популярные сайты для покупок нижнего белья"
				text="Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для  Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для "
			/>

			<BlogNewsItem
				title="Самые популярные сайты для покупок нижнего белья"
				text="Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для  Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для "
			/>

			<BlogNewsItem
				title="Самые популярные сайты для покупок нижнего белья"
				text="Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для  Самые популярные сайты для покупок нижнего белья Самые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для покупок нижнего бельяСамые популярные сайты для "
			/>

			<ButtonUI sx={ButtonLoadMore}>
				Загрузить ещё
			</ButtonUI>
		</BlogMUI>
	);
};

export default React.memo(BlogPage);

const {
	BlogMUI,
	ButtonLoadMore
} = useBlogPageStyle();
