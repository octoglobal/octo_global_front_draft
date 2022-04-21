import React from 'react';
import {useHomeBlogStyles} from '@/components/Home/HomeBlog/style';
import LinkButtonUI from '../../../UI/UIComponents/LinkButtonUI/LinkButton';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import Container from '@/components/Container/Container';
import HomeBlogSwiper from '@/components/Home/HomeBlog/HomeBlogSwiper/HomeBlogSwiper';

const HomeBlog = () => {
	return (
		<Container>
			<ContainerMUI>
				<HomeSectionTitle
					title='Блог'
				/>
				<SwiperContainerMUI>
					<HomeBlogSwiper/>
				</SwiperContainerMUI>
				<LinkButtonUI href='/blog'>
					Смотреть все
				</LinkButtonUI>
			</ContainerMUI>
		</Container>
	);
};

const {
	ContainerMUI,
	SwiperContainerMUI
} = useHomeBlogStyles();

export default React.memo(HomeBlog);
