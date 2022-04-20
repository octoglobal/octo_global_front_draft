import {useCallback, useEffect} from 'react';
import {ICategoryItem} from '@/components/Shops/type';
import {useForm} from 'react-hook-form';
import {
	fetchAllTagsShops,
	fetchMoreTagShops,
	fetchSearchShops,
	fetchTagShops
} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {getFulfilledInString} from '@/services/services';
import {shopSlice} from '@/reducers/shopsSlice/shopsSlice';

export type SearchSubmitType = 'category' | 'search'

export interface ISearchData {
	search: string;
	tags: ICategoryItem[];
}

export const useShopPage = () => {
	const {
		page,
		searchHints,
		updateShops,
		shopsEnd,
		tags: tagsStore,
		search,
		allTags,
		isNotFoundShops
	} = useAppSelector(state => state.shopReducer);
	const dispatch = useAppDispatch();
	const methods  = useForm<ISearchData>();
	const activeCategory = methods.watch('tags') as ICategoryItem[];

	const activeCategoryQuery = (tags: ICategoryItem[]) => {
		let tagString = '';
		if (Array.isArray(tags)) {
			for (let i = 0; i < tags.length; i++) {
				tagString += `tag=${tags[i].id}&`;
			}
		}
		return tagString;
	};

	const onSubmit = (data: ISearchData, type: SearchSubmitType = 'search') => {
		if (type === 'search' && data.search) {
			if (searchHints.length) {
				dispatch(fetchSearchShops({search: data.search}))
					.then(r => {
						try {
							if (getFulfilledInString(r.type)) {
								methods.reset({
									search: data.search,
									tags: []
								});
							}
						} catch (e) {
							throw new Error('Ошибка поиска по названию');
						}
					});
			} else {
				methods.reset({
					search: '',
					tags: [],
				});
				dispatch(fetchTagShops({tagsQuery: '', isSearchNotFound: true}));
			}
		}
		if (type === 'category') {
			const tags = methods.getValues('tags');
			const tagsQuery = activeCategoryQuery(tags);
			dispatch(fetchTagShops({tagsQuery: tagsQuery}))
				.then(r => {
					try {
						if (getFulfilledInString(r.type)) {
							methods.reset({
								search: '',
								tags: data.tags
							});
						}
					} catch (e) {
						throw new Error('Ошибка поиска по тегам');
					}
				});
		}
	};

	const handleSubmitForm = () => {
		methods.handleSubmit(
			(data) => onSubmit(data, 'category')
		)();
	};

	//! Category
	const handleClickTagInCard = (tagTitle: string, tagId: number, type: 'tagInList' | 'tagInCard') => {
		return () => {
			methods.setValue('search', '');
			if (Array.isArray(activeCategory)) {
				const findTag = activeCategory.find(item => item.title === tagTitle);
				const tagObj = {title: tagTitle, id: tagId};
				if (findTag) {
					if (type === 'tagInList') {
						methods.setValue(
							'tags',
							[
								...activeCategory.filter(tag => tag.title !== tagTitle),
							]
						);
					}
					handleSubmitForm();
					return;
				} else {
					methods.setValue(
						'tags',
						[
							...activeCategory,
							tagObj
						]
					);
				}
				window.scrollTo({
					behavior: 'auto',
					top: 0,
				});
				handleSubmitForm();
			}
		};
	};

	const handleChangeCategory = (value: ICategoryItem[], onChange: (hint: ICategoryItem[]) => void) => {
		return (categoryItem: ICategoryItem) => {
			if (categoryItem.title) {
				methods.setValue('search', '');
				const findCategory = value.find(item => item.title == categoryItem.title);
				if (findCategory) {
					onChange(value.filter(item => item.title !== categoryItem.title));
					handleSubmitForm();
					return;
				}
				onChange([...value, categoryItem]);
				handleSubmitForm();
			}
			return;
		};
	};

	const handleDeleteCategory = (category: ICategoryItem) => {
		return () => {
			const value = methods.getValues('tags') as ICategoryItem[];
			methods.setValue(
				'tags',
				[...value.filter(item => item.title !== category.title)]
			);
			handleSubmitForm();
		};
	};

	const handleResetCategory = () => {
		methods.reset({
			search: '',
			tags: [],
		});
		handleSubmitForm();
	};

	//! Category

	//! InfinityScroll
	const handleUpdateShops = useCallback(() => {
		dispatch(shopSlice.actions.updatePost());
	}, [page]);

	const onScroll: EventListener = (event: Event) => {
		if (typeof window !== 'undefined') {
			const window = event.currentTarget as Window;
			const documentHeight =  document.querySelector('main')?.offsetHeight as number;
			const currentScrollTop = window.pageYOffset + window.innerHeight;
			if (currentScrollTop > documentHeight - 600) {
				handleUpdateShops();
			}
		}
	};

	useEffect(() => {
		//! First Shops
		if (!search) {
			dispatch(fetchMoreTagShops({tagsQuery: '', page: 1}));
		}
		if (!allTags.length) {
			dispatch(fetchAllTagsShops());
		}
		window.addEventListener(
			'scroll',
			onScroll
		);
		return () => {
			window.removeEventListener(
				'scroll',
				onScroll
			);
			dispatch(shopSlice.actions.resetSlice());
		};
	}, []);


	useEffect(() => {
		if (page > 1 && updateShops && !shopsEnd && !search && !methods.getValues('search')) {
			const tags = methods.getValues('tags');
			const tagsQuery = activeCategoryQuery(tags);
			if (tagsQuery == tagsStore) {
				dispatch(fetchMoreTagShops({tagsQuery, page}));
			}
		}
	}, [updateShops, activeCategory]);
	//! InfinityScroll

	return {
		allTags,
		methods,
		onSubmit,
		activeCategory,
		isNotFoundShops,
		handleResetCategory,
		handleChangeCategory,
		handleDeleteCategory,
		handleClickTagInCard,
	};
};
