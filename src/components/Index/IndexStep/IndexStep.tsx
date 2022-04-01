import React, {FC} from 'react';
import Image from 'next/image';

import {useIndexStepStyle} from './style';

interface IIndexStep {
	title: string,
	subtitle: string,
	image: StaticImageData
}

const IndexStep : FC<IIndexStep> = ({
	title,
	subtitle,
	image
}) => {

	const {
		IndexStepUI,
		ImageUI,
		InfoUI,
		TitleUI,
		SubTitleUI
	} = useIndexStepStyle();

	// const Image : React.FC = image;

	return (
		<IndexStepUI>
			<ImageUI>
				{/*<Image />*/}
				<Image
					src={image}
				/>
			</ImageUI>
			<InfoUI>
				<TitleUI>{title}</TitleUI>
				<SubTitleUI>{subtitle}</SubTitleUI>
			</InfoUI>
		</IndexStepUI>
	);
};

export default React.memo(IndexStep);
