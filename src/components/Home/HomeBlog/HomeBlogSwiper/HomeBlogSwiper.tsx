import React from 'react';
import BlogItem from '@/components/Blog/BlogItem/BlogItem';
import {useHomeBlogSwiper} from '@/components/Home/HomeBlog/HomeBlogSwiper/useHomeBlogSwiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperArrowLeftIcon from '@/UIIcon/SwiperArrowLeft.svg';
import SwiperArrowRightIcon from '@/UIIcon/SwiperArrowRight.svg';
import {useHomeBlogSwiperStyles} from '@/components/Home/HomeBlog/HomeBlogSwiper/style';
import 'swiper/css';
import 'swiper/css/autoplay';

const HomeBlogSwiper = () => {

	const {
		onSwiper,
		blogData,
		isBlogDataArray,
		isTouchDevice,
		handleChangeSlide,
	} = useHomeBlogSwiper();


	return (
		isBlogDataArray ? (
			<>
				{!isTouchDevice && (
					<ButtonArrowMUI
						sx={{marginRight: '10px'}}
						onClick={handleChangeSlide('prev')}
					>
						<SwiperArrowLeftIcon/>
					</ButtonArrowMUI>
				)}
				<Swiper
					loop={true}
					autoHeight={true}
					spaceBetween={20}
					onSwiper={onSwiper}
					modules={[Autoplay]}
					watchSlidesProgress={true}
					speed={500}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
				>
					{blogData.map(blogItem => (
						<SwiperSlide
							key={blogItem.id}
						>
							<BlogItem
								viewDescription={false}
								{...blogItem}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				{!isTouchDevice && (
					<ButtonArrowMUI
						sx={{marginLeft: '10px'}}
						onClick={handleChangeSlide('next')}
					>
						<SwiperArrowRightIcon/>
					</ButtonArrowMUI>
				)}
			</>
		) : null
	);
};

const {
	ButtonArrowMUI
} = useHomeBlogSwiperStyles();

export default React.memo(HomeBlogSwiper);
