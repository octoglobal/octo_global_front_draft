import React from 'react';
import {useHomeShopSwipers} from '@/components/Home/HomeShops/HomeShopSwipers/useHomeShopSwipers';
import HomeShopSwiper from '@/components/Home/HomeShops/HomeShopSwiper/HomeShopSwiper';
import {useHomeShopSwipersStyles} from '@/components/Home/HomeShops/HomeShopSwipers/style';

const HomeShopSwipers = () => {

	const { SwipersContainerMUI } = useHomeShopSwipersStyles();

	const {
		isShopsDataArray,
		secondSwiperData,
		firstSwiperData,
		isFirstSwiperData,
		isSecondSwiperData
	} = useHomeShopSwipers();

	return (
		isShopsDataArray ? (
			<SwipersContainerMUI>
				{isFirstSwiperData && (
					<HomeShopSwiper
						watchSlidesProgress={false}
						photos={firstSwiperData}
						firstSwiper
					/>
				)}
				{isSecondSwiperData && (
					<HomeShopSwiper
						photos={secondSwiperData}
						reverseDirection={true}
						watchSlidesProgress={true}
					/>
				)}
			</SwipersContainerMUI>
		) : null
	);
};

export default React.memo(HomeShopSwipers);
