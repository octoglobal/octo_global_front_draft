import React, {FC} from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import {useShopsPageStyles} from '@/components/Shops/styles';
import CategorySearch from '@/components/AnyPage/CategorySearch/CategorySearch';
import CategorySearchSwiper from '@/components/AnyPage/CategorySwiper/CategorySwiper';
import CategorySearchSwiperActive
	from '@/components/AnyPage/CategorySwiper/CategorySwiperActive/CategorySwiperActive';
import {useShopPage} from '@/components/Shops/useShopPage';
import {FormProvider} from 'react-hook-form';

const ShopsPage: FC = () => {

	const {
		methods,
		onSubmit,
		activeCategory,
		handleDeleteCategory,
		handleChangeCategory
	} = useShopPage();

	return (
		<>
			<HeaderMargin/>
			<ContainerMUI>
				<FormProvider {...methods}>
					<FormMUI onSubmit={methods.handleSubmit(data => onSubmit(data, 'search'))}>
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
					</FormMUI>
				</FormProvider>
			</ContainerMUI>
		</>
	);
};

const {
	FormMUI,
	ContainerMUI,
	SearchWrapperMUI,
	ContainerSwiperMUI
} = useShopsPageStyles();

export default React.memo(ShopsPage);
