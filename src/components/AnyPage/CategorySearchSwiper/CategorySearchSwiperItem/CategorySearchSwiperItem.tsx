import React, {FC} from 'react';
import {ICategoryModel} from '@/models/ICategoryModel';

const CategorySearchSwiperItem: FC<ICategoryModel> = ({id, title}) => {
	return (
		<div>
			{title}
		</div>
	);
};

export default React.memo(CategorySearchSwiperItem);
