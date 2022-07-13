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
		// isLoadingBlog,
		onSlideChange,
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
					autoHeight={false}
					spaceBetween={20}
					onSwiper={onSwiper}
					modules={[Autoplay]}
					style={{position: 'relative'}}
					onSlideChange={onSlideChange}
					watchSlidesProgress={true}
					speed={500}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
				>
					{/*{isLoadingBlog && (*/}
					{/*	<LoadingContainerSC>*/}
					{/*		<SpinnerSC color="inherit" />*/}
					{/*	</LoadingContainerSC>*/}
					{/*)}*/}
					<>
						{blogData.map(blogItem => (
							<SwiperSlide
								key={blogItem.id}
							>
								<BlogItem
									isTitleSplice={isTouchDevice}
									viewDescription={false}
									{...blogItem}
								/>
							</SwiperSlide>
						))}
					</>
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
	SpinnerSC,
	ButtonArrowMUI,
	LoadingContainerSC,
} = useHomeBlogSwiperStyles();

export default React.memo(HomeBlogSwiper);
