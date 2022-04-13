import {ICategoryItem} from '@/components/Shops/type';
import {useForm} from 'react-hook-form';
import {fetchSearchShops} from '@/reducers/shopsSlice/asyncThunk/asyncThunk';
import {useAppDispatch} from '@/hooks/useReduxHooks';

interface ISearchData {
	search: string;
	tags: ICategoryItem[];
}

export const useShopPage = () => {
	const dispatch = useAppDispatch();
	const methods = useForm<ISearchData>();
	const activeCategory = methods.watch('tags');

	const onSubmit = (data: ISearchData, type: 'category' | 'search' = 'search') => {
		if (type === 'search') {
			dispatch(fetchSearchShops({search: data.search}));
			// console.log(data);
			// methods.reset({
			// 	search: data.search,
			// 	tags: []
			// });
		}
		if (type === 'category') {
			console.log(data);
			methods.reset({
				search: '',
				tags: data.tags
			});
		}
	};

	const handleSubmitForm = () => {
		methods.handleSubmit((data) => onSubmit(data, 'category'))();
	};

	const handleChangeCategory = (value: ICategoryItem[], onChange: (hint: ICategoryItem[]) => void) => {
		return (categoryItem: ICategoryItem) => {
			if (categoryItem.title) {
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

	return {
		methods,
		onSubmit,
		activeCategory,
		handleChangeCategory,
		handleDeleteCategory,
	};
};
