import React, {FC} from 'react';
import {useHomeSectionTitleStyles} from '@/components/Home/HomeSectionTitle/style';

interface IHomeSectionTitleProps {
	title: string;
}

const HomeSectionTitle: FC<IHomeSectionTitleProps> = ({title}) => {

	const { TitleMUI } = useHomeSectionTitleStyles();

	return (
		<TitleMUI>
			{title}
		</TitleMUI>
	);
};

export default React.memo(HomeSectionTitle);
