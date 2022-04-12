import React, {FC} from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import {useShopsPageStyles} from '@/components/Shops/styles';
import CategorySearch from '@/components/AnyPage/CategorySearch/CategorySearch';
import CategorySearchSwiper from '@/components/AnyPage/CategorySearchSwiper/CategorySearchSwiper';

const ShopsPage : FC = () => {
	const { ContainerMUI } = useShopsPageStyles();

	return (
		<>
			<HeaderMargin/>
			<ContainerMUI>
				<CategorySearch callback={() => console.log(1)}/>
				<CategorySearchSwiper/>
			</ContainerMUI>
		</>
	);
};

export default React.memo(ShopsPage);
