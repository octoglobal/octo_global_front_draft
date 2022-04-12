import React, {FC} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useCategorySearchStyles} from '@/components/AnyPage/CategorySearch/style';

interface ICategorySearchProps {
	callback: () => void;
}

const CategorySearch: FC<ICategorySearchProps> = ({callback}) => {

	const methods = useForm();
	const { searchSx } = useCategorySearchStyles();
	return (
		<FormProvider {...methods}>
			<TextFieldUI
				controller={{
					name: 'search',
					control: methods.control
				}}
				inputProps={{
					sx: searchSx,
					placeholder: 'Поиск'
				}}
			/>
		</FormProvider>
	);
};

export default React.memo(CategorySearch);
