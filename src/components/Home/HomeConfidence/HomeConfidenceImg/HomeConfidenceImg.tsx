import React from 'react';
import {useHomeConfidenceImgStyles} from '@/components/Home/HomeConfidence/HomeConfidenceImg/style';

const HomeConfidenceImg = () => {

	const { ImageContainerMUI, ImageMUI } = useHomeConfidenceImgStyles();

	return (
		<ImageContainerMUI>
			<ImageMUI src='/image/OctoConfidence.png' alt='octo-confidence-image'/>
		</ImageContainerMUI>
	);
};

export default React.memo(HomeConfidenceImg);
