import React, {FC} from 'react';
import {useCategorySwiper} from '@/components/AnyPage/CategorySwiper/useCategorySwiper';
import CategorySearchSwiperItem from '@/components/AnyPage/CategorySwiper/CategorySwiperItem/CategorySwiperItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useCategorySwiperItem} from '@/components/AnyPage/CategorySwiper/style';
import SwiperArrowPrev from '@/UIIcon/CategoryArrow.svg';
import SwiperArrowNext from '@/UIIcon/CategoryArrowRight.svg'
import { Controller } from 'react-hook-form';
import 'swiper/css';
import {ISwiperCategoryItemClick} from '@/components/Shops/type';

const CategorySwiper: FC<ISwiperCategoryItemClick> = ({handleClick}) => {

	const {
		onSwiper,
		categories,
		widthInName,
		isCategoriesArray,
		handleChangeSlide,
	} = useCategorySwiper();

	const { SwiperArrowButtonMUI } = useCategorySwiperItem();

	return (
		isCategoriesArray ? (
			<>
				<SwiperArrowButtonMUI
					className='nextArrow'
					type='button'
					onClick={handleChangeSlide('prev')}
				>
					<SwiperArrowPrev/>
				</SwiperArrowButtonMUI>
				<Controller
					name='tags'
					defaultValue={[]}
					render={({field: {value, onChange}}) => (
						<Swiper
							onSwiper={onSwiper}
							slidesPerView={'auto'}
						>
							{categories?.map(category => (
								<SwiperSlide
									key={category.id}
									style={widthInName(category.title)}
								>
									<CategorySearchSwiperItem
										handleClick={handleClick(value, onChange)}
										id={category.id}
										title={category.title}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					)}
				/>
				<SwiperArrowButtonMUI
					type='button'
					className='prevArrow'
					onClick={handleChangeSlide('next')}
				>
					<SwiperArrowNext/>
				</SwiperArrowButtonMUI>
			</>
		) : null
	);
};

export default React.memo(CategorySwiper);
