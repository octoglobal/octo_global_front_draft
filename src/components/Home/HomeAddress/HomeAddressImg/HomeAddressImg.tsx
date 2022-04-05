import React from 'react';
import {useHomeAddressImgStyles} from '@/components/Home/HomeAddress/HomeAddressImg/style';

const HomeAddressImg = () => {

	const {
		ImageMUI,
		ImageContainerMUI
	} = useHomeAddressImgStyles();

	return (
		<ImageContainerMUI>
			<ImageMUI/>
		</ImageContainerMUI>
	);
};

export default React.memo(HomeAddressImg);
