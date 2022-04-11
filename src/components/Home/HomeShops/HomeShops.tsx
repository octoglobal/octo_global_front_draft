import React from 'react';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import Container from '@/components/Container/Container';
import {useHomeShopStyles} from '@/components/Home/HomeShops/style';
import HomeShopsList from '@/components/Home/HomeShops/HomeShopsList/HomeShopsList';
import {useCustomSize} from '@/hooks/useMedia';
import HomeShopSwiper from '@/components/Home/HomeShops/HomeShopSwipers/HomeShopSwipers';

const HomeShops = () => {

	const {WrapperMUI, TitleMUI, LinkWrapperMUI, containerStyle} = useHomeShopStyles();
	const {isCustomSize: isTablet} = useCustomSize(1000);

	return (
		<>
			<Container>
				<TitleMUI>
					<HomeSectionTitle
						title="Магазины с которыми мы работаем"
					/>
				</TitleMUI>
			</Container>
			<Container customStyles={containerStyle}>
				<WrapperMUI>
					{isTablet ? (
						<HomeShopSwiper/>
					) : (
						<HomeShopsList/>
					)}
					<LinkWrapperMUI href="/shops">
						ВСЕ МАГАЗИНЫ
					</LinkWrapperMUI>
				</WrapperMUI>
			</Container>
		</>
	);
};

export default React.memo(HomeShops);
