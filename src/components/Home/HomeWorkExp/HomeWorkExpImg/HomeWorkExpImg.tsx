import React, {FC} from 'react';
import HomeSectionTitle from '@/components/Home/HomeSectionTitle/HomeSectionTitle';
import {useHomeWorkExpImgStyles} from '@/components/Home/HomeWorkExp/HomeWorkExpImg/style';

const HomeWorkExpImg: FC = () => {

	const {
		ImageMUI,
		ContainerMUI,
		ImageContainerMUI
	} = useHomeWorkExpImgStyles();

	return (
		<ContainerMUI>
			<ImageContainerMUI>
				<ImageMUI src='/image/homeWorkExpMap.png' alt='delivery-map'/>
			</ImageContainerMUI>
		</ContainerMUI>
	);
};

export default React.memo(HomeWorkExpImg);
