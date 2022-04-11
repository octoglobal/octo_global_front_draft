import React from 'react';
import {Swiper} from 'swiper/react';
import {useHomeShopSwipers} from '@/components/Home/HomeShops/HomeShopSwipers/useHomeShopSwipers';

const HomeShopSwipers = () => {

	const {
		isShopsDataArray,
		secondSwiperData,
		firstSwiperData,
		isFirstSwiperData,
		isSecondSwiperData
	} = useHomeShopSwipers();

	return (
		isShopsDataArray ? (
			<>
				{isFirstSwiperData && (
					<Swiper>

					</Swiper>
				)}
				{isSecondSwiperData && (
					<Swiper>

					</Swiper>
				)}
			</>
		) : null
	);
};

export default React.memo(HomeShopSwipers);
