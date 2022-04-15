import React, {FC} from 'react';
import {useCategorySwiper} from '@/components/AnyPage/CategorySwiper/useCategorySwiper';
import CategorySearchSwiperItem from '@/components/AnyPage/CategorySwiper/CategorySwiperItem/CategorySwiperItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useCategorySwiperItem} from '@/components/AnyPage/CategorySwiper/style';
import SwiperArrowNext from '@/UIIcon/CategoryArrowRight.svg';
import SwiperArrowPrev from '@/UIIcon/CategoryArrow.svg';
import { Controller } from 'react-hook-form';
import 'swiper/css';
import {ICategoryItem, ISwiperCategoryItemClick} from '@/components/Shops/type';

interface ICategorySwiperProps extends ISwiperCategoryItemClick {
	allTags: ICategoryItem[];
}

const CategorySwiper: FC<ICategorySwiperProps> = (
	{
		allTags,
		handleClick,
	}
) => {

	const {
		onSwiper,
		// categories,
		widthInName,
		isCategoriesArray,
		handleChangeSlide,
	} = useCategorySwiper(allTags);

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
							{allTags?.map(tag => (
								<SwiperSlide
									key={tag.id}
									style={widthInName(tag.title)}
								>
									<CategorySearchSwiperItem
										handleClick={handleClick(value, onChange)}
										id={tag.id}
										title={tag.title}
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

const { SwiperArrowButtonMUI } = useCategorySwiperItem();


export default React.memo(CategorySwiper);
