import React from 'react';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import Container from '@/components/Container/Container';
import {useHomeShopStyles} from '@/components/Home/HomeShops/style';

const HomeShops = () => {

	const { WrapperMUI, TitleMUI, LinkWrapperMUI } = useHomeShopStyles();

	return (
		<Container>
			<WrapperMUI>
				<TitleMUI>
					<HomeSectionTitle
						title='Магазины с которыми мы работаем'
					/>
				</TitleMUI>
				<LinkWrapperMUI href='/shops'>
					ВСЕ МАГАЗИНЫ
				</LinkWrapperMUI>
			</WrapperMUI>
		</Container>
	);
};

export default React.memo(HomeShops);
