import {useState} from 'react';

export const useShopPage = () => {
	const [activeCategory, setActiveCategory] = useState<string[]>([]);

	const handleChangeCategory = (category: string) => {
		return () => {
			setActiveCategory(prevState => {
				const findCategory = prevState.find(item => item == category);
				if (findCategory) {
					return prevState.filter(item => item !== category);
				};
				return [...prevState, category];
			});
		};
	};

	const handleDeleteCategory = (category: string) => {
		return () => {
			setActiveCategory(prevState => prevState.filter(item => item !== category));
		};
	};


	return {
		activeCategory,
		handleChangeCategory,
		handleDeleteCategory,
	};
};
