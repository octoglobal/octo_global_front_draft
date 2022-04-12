import React, {FC} from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import {useShopsPageStyles} from '@/components/Shops/styles';
import CategorySearch from '@/components/AnyPage/CategorySearch/CategorySearch';
import CategorySearchSwiper from '@/components/AnyPage/CategorySwiper/CategorySwiper';
import CategorySearchSwiperActive
	from '@/components/AnyPage/CategorySwiper/CategorySwiperActive/CategorySwiperActive';
import {useShopPage} from '@/components/Shops/useShopPage';
import {FormProvider, useForm} from 'react-hook-form';
import CategorySearchHint from '@/components/AnyPage/CategorySearch/CategorySearchHints/CategorySearchHints';

const ShopsPage: FC = () => {

	const methods = useForm();

	const {
		activeCategory,
		handleDeleteCategory,
		handleChangeCategory
	} = useShopPage();

	return (
		<>
			<HeaderMargin/>
			<ContainerMUI>
				<FormProvider {...methods}>
					<SearchWrapperMUI>
						<CategorySearch/>
						<CategorySearchSwiperActive
							category={activeCategory}
							handleDeleteCategory={handleDeleteCategory}/>
					</SearchWrapperMUI>
					<ContainerSwiperMUI>
						<CategorySearchSwiper
							handleClick={handleChangeCategory}
						/>
					</ContainerSwiperMUI>
				</FormProvider>
			</ContainerMUI>
		</>
	);
};

const {
	ContainerMUI,
	SearchWrapperMUI,
	ContainerSwiperMUI
} = useShopsPageStyles();

export default React.memo(ShopsPage);
