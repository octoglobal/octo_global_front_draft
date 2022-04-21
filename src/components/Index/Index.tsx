import React, {FC} from 'react';
import HomeAbout from '@/components/Home/HomeAbout/HomeAbout';
import HomeWorkExp from '@/components/Home/HomeWorkExp/HomeWorkExp';
import HomeConfidence from '@/components/Home/HomeConfidence/HomeConfidence';
import HomeShops from '@/components/Home/HomeShops/HomeShops';
import HomeBlog from '@/components/Home/HomeBlog/HomeBlog';
import {useTouchDevice} from '@/hooks/useMedia';
import HomeReviews from '@/components/Home/HomeReviews/HomeReviews';

const IndexPage : FC = () => {
	const {
		isTouchDevice
	} = useTouchDevice();

	return (
		<>
			<HomeAbout/>
			{isTouchDevice && (
				<HomeBlog/>
			)}
			<HomeWorkExp/>
			<HomeConfidence/>
			<HomeShops/>
			{!isTouchDevice && (
				<HomeBlog/>
			)}
			<HomeReviews/>
		</>
	);
};

export default React.memo(IndexPage);
