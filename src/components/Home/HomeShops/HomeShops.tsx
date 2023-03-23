import React, {useMemo} from 'react';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import Container from '@/components/Container/Container';
import {useHomeShopStyles} from '@/components/Home/HomeShops/style';
import HomeShopsList from '@/components/Home/HomeShops/HomeShopsList/HomeShopsList';
import {useCustomSize} from '@/hooks/useMedia';
import HomeShopSwiper from '@/components/Home/HomeShops/HomeShopSwipers/HomeShopSwipers';
import LinkButtonUI from '../../../UI/UIComponents/LinkButtonUI/LinkButton';

const HomeShops = () => {

	const {WrapperMUI, TitleMUI, containerStyle, containerAdaptiveStyle} = useHomeShopStyles();
	const {isCustomSize: isTablet} = useCustomSize(1024);
	const containerAdaptiveStyles = useMemo(() => {
		if (isTablet) {
			return {
				...containerStyle,
				...containerAdaptiveStyle,
			};
		};
		return containerStyle;
	}, [isTablet]);

	return (
		<>
			<Container>
				<TitleMUI>
					<HomeSectionTitle
						title='Список магазинов для шопппинга'
					/>
				</TitleMUI>
			</Container>
			<Container customStyles={containerAdaptiveStyles}>
				<WrapperMUI>
					{isTablet ? (
						<HomeShopSwiper/>
					) : (
						<HomeShopsList/>
					)}
					<LinkButtonUI href="/shops">
						Все магазины
					</LinkButtonUI>
				</WrapperMUI>
			</Container>
		</>
	);
};

export default React.memo(HomeShops);
