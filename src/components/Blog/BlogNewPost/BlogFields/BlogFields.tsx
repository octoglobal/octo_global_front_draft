import React, {FC} from 'react';
import {useBlogFieldsStyles} from '@/components/Blog/BlogNewPost/BlogFields/style';
import { FormProvider } from 'react-hook-form';
import BlogPreviewFields from '@/components/Blog/BlogNewPost/BlogPreviewFields/BlogPreviewFields';
import BlogDescription from '@/components/Blog/BlogNewPost/BlogDescription/BlogDescription';
import BlogTitle from '@/components/Blog/BlogNewPost/BlogTitle/BlogTitle';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import {useBlogFields} from '@/components/Blog/BlogNewPost/BlogFields/useBlogFields';
import { useAppSelector } from '@/hooks/useReduxHooks';
import ModalUI from 'UI/UIComponents/ModalUI/ModalUI';
import ModalSpinner from 'UI/UIComponents/ModalSpinner/ModalSpinner';

interface IBlogFieldsProps {
	open: boolean;
}

const BlogFields: FC<IBlogFieldsProps> = ({open}) => {
	const { blogData,EditMode,error } = useAppSelector(state => state.blogReducer);
	
	const {
		methods,
		openModal,
		loading,
		onSubmit,
		changeOpenModal		
	} = useBlogFields(EditMode.id as number ,blogData,error);
	

	return (
		<ContainerMUI>
			
		
			<CollapseMUI in={open}>
				<FormProvider {...methods}>
					<FormMUI onSubmit={methods.handleSubmit(onSubmit)}>
						<BlogTitle/>
					
						<WrapperMUI>
							<BlogPreviewFields indexField={1}/>
							<BlogPreviewFields indexField={2} />
							<BlogPreviewFields indexField={3} />
						</WrapperMUI>
						<BlogDescription/>
						<ButtonContainerMUI>
							<ButtonUI type='submit' disabled={loading? true : false} >
								{EditMode.id ? 'Изменить':'Сохранить'}								
							</ButtonUI>
							
						</ButtonContainerMUI>
					</FormMUI>
				</FormProvider>
			</CollapseMUI>

			<ModalUI
				dialogProps={{
					open: openModal,
					onClose:changeOpenModal
				}}
				title={error.message}
				closeTime={3}
			/>
			<ModalSpinner open={loading} />
		
		</ContainerMUI>
	);
};

const {
	FormMUI,
	WrapperMUI,
	CollapseMUI,
	ContainerMUI,
	ButtonContainerMUI
} = useBlogFieldsStyles();

export default React.memo(BlogFields);
