import React, {FC} from 'react';
import {useCategorySwiper} from '@/components/AnyPage/CategorySwiper/useCategorySwiper';
import CategorySearchSwiperItem from '@/components/AnyPage/CategorySwiper/CategorySwiperItem/CategorySwiperItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useCategorySwiperItem} from '@/components/AnyPage/CategorySwiper/style';
import SwiperArrowPrev from '@/UIIcon/CategoryArrow.svg';
import SwiperArrowNext from '@/UIIcon/CategoryArrowRight.svg';
import 'swiper/css';

interface ICategorySearchSwiperProps {
	handleClick: (state: string) => () => void;
}

const CategorySwiper: FC<ICategorySearchSwiperProps> = ({handleClick}) => {

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
					onClick={handleChangeSlide('prev')}
				>
					<SwiperArrowPrev/>
				</SwiperArrowButtonMUI>
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
								handleClick={handleClick}
								id={category.id}
								title={category.title}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<SwiperArrowButtonMUI
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
