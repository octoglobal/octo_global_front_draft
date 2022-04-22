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
import ShopsNotFound from '@/components/Shops/ShopsNotFound/ShopsNotFound';

const ShopsPage: FC = () => {

	const {
		allTags,
		methods,
		onSubmit,
		activeCategory,
		isNotFoundShops,
		handleResetCategory,
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
								handleDeleteCategory={handleDeleteCategory}
								handleResetCategory={handleResetCategory}
							/>
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
							{isNotFoundShops && (
								<ShopsNotFound/>
							)}
						</ContainerTagsMUI>
					</FormMUI>
					<ShopsList
						handleClickTagInCard={handleClickTagInCard}
					/>
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
