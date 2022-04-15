import React, {FC} from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import {useShopsPageStyles} from '@/components/Shops/styles';
import CategorySearch from '@/components/AnyPage/CategorySearch/CategorySearch';
import CategorySearchSwiper from '@/components/AnyPage/CategorySwiper/CategorySwiper';
import CategorySearchSwiperActive
	from '@/components/AnyPage/CategorySwiper/CategorySwiperActive/CategorySwiperActive';
import {useShopPage} from '@/components/Shops/useShopPage';
import {FormProvider} from 'react-hook-form';
import ShopsList from '@/components/Shops/ShopsList/ShopsList';
import CategoryList from '@/components/AnyPage/TagsList/TagsList';

const ShopsPage: FC = () => {

	const {
		allTags,
		methods,
		onSubmit,
		activeCategory,
		handleDeleteCategory,
		handleChangeCategory,
		handleClickTagInCard
	} = useShopPage();

	return (
		<>
			<HeaderMargin/>
			<ContainerMUI>
				<FormProvider {...methods}>
					<FormMUI
						onSubmit={methods.handleSubmit(data => onSubmit(data, 'search'))}
					>
						<SearchWrapperMUI>
							<CategorySearch onSubmit={onSubmit}/>
							<CategorySearchSwiperActive
								category={activeCategory}
								handleDeleteCategory={handleDeleteCategory}/>
						</SearchWrapperMUI>
						<ContainerTagsMUI>
							<ContainerSwiperMUI>
								<CategorySearchSwiper
									allTags={allTags}
									handleClick={handleChangeCategory}
								/>
							</ContainerSwiperMUI>
							<CategoryList
								allTags={allTags}
								handleClickTagInCard={handleClickTagInCard}
							/>
						</ContainerTagsMUI>
						<ShopsList
							handleClickTagInCard={handleClickTagInCard}
						/>
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
	ContainerTagsMUI,
	ContainerSwiperMUI,
} = useShopsPageStyles();

export default React.memo(ShopsPage);
