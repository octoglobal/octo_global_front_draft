import React from 'react';
import {useCategorySearchSwiper} from '@/components/AnyPage/CategorySearchSwiper/useCategorySearchSwiper';
import CategorySearchSwiperItem
	from '@/components/AnyPage/CategorySearchSwiper/CategorySearchSwiperItem/CategorySearchSwiperItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import {useCategorySearchSwiperItem} from '@/components/AnyPage/CategorySearchSwiper/style';

const CategorySearchSwiper = () => {

	const { categories, isCategoriesArray } = useCategorySearchSwiper();
	const { SwiperContainerMUI } = useCategorySearchSwiperItem();

	return (
		isCategoriesArray ? (
			<SwiperContainerMUI>
				<Swiper
					navigation={true}
					modules={[Navigation]}
				>
					{categories?.map(category => (
						<SwiperSlide key={category.id}>
							<CategorySearchSwiperItem
								id={category.id}
								title={category.title}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperContainerMUI>
		) : null
	);
};

export default React.memo(CategorySearchSwiper);
