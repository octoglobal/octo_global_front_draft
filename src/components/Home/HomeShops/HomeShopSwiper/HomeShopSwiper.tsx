import React, {FC, useMemo} from 'react';
import {IShopsData} from '@/components/Home/HomeShops/HomeShopsList/type';
import {checkValidArray} from '@/services/services';
import HomeShopSwiperItem from '@/components/Home/HomeShops/HomeShopSwiperItem/HomeShopSwiperItem';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

interface IHomeShopSwiperProps {
	photos: IShopsData[]
	reverseDirection?: boolean,
	firstSwiper?: boolean;
	watchSlidesProgress?: boolean,
}

const HomeShopSwiper: FC<IHomeShopSwiperProps> = ({photos, reverseDirection = false, watchSlidesProgress}) => {

	// const [swiperState, setSwiperState] = useState<SwiperTypes | null>();
	const isData = useMemo(() => checkValidArray(photos), []);

	// const onSwiper = (swiper: SwiperTypes) => {
	// 	if (!swiperState && !firstSwiper) {
	// 		setSwiperState(swiper);
	// 	}
	// };
	//


	return (
		isData ? (
			<Swiper
				loop={true}
				freeMode={true}
				// thumbs={{swiper: firstSwiper ? swiperState : null}}
				modules={[Autoplay]}
				watchSlidesProgress={watchSlidesProgress}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
					reverseDirection: reverseDirection,
				}}
				speed={500}
				slidesPerView={'auto'}
			>
				{photos.map(photo => (
					<SwiperSlide key={photo.title} style={{...photo.initialSize}}>
						<HomeShopSwiperItem {...photo}/>
					</SwiperSlide>
				))}
			</Swiper>
		) : null
	);
};

export default React.memo(HomeShopSwiper);
