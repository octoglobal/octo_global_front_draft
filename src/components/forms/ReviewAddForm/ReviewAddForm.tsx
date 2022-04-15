import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {Box} from '@mui/material';
import {FieldValues, useForm} from 'react-hook-form';

import {useCustomSize, useMobile} from '@/hooks/useMedia';
import {useReviewAddForm} from './useReviewAddForm';
import {useFormsStyle} from '@/components/forms/style';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldUI from '../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import {useReviewAddFormStyle} from '@/components/forms/ReviewAddForm/style';
import {TAddReview} from '../../../types/types';
// import {useAppDispatch} from "@/hooks/useReduxHooks";
// import { toggleDrawer } from '@/store/reducers/swipeableDrawerSlice/swipeableDrawerSlice';
import {useSwipeableDrawerStore} from '@/hooks/useSwipeableDrawerStore';

interface IReviewAddForm {
	defaultText?:string
}

const ReviewAddForm: FC<IReviewAddForm> = ({defaultText}) => {

	const {
		handleSubmit,
		control,
		setError,
		getValues,
		reset,
		formState: {
			dirtyFields,
			isSubmitted,
		}
	} = useForm<FieldValues | TAddReview>({
		defaultValues: {
			text: defaultText || ''
		}
	});

	const {isMobile} = useMobile();
	const {isCustomSize} = useCustomSize(null, 1241);
	// const dispatch = useAppDispatch();

	const successSubmit = () => {
		getReviews(currentPage);
		setShowPromt(true);
		if(isMobile && currentPage) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
		reset({
			text: '',
		}, {
			keepIsSubmitted: false,
		});
	};

	const {
		pushTo,
		isAuth,
		onSubmit,
		setData,
		showPromt, setShowPromt,
		currentPage,
		getReviews,
	} = useReviewAddForm(successSubmit, setError);

	const {
		toggleDrawer,
		toggleTab,
	} = useSwipeableDrawerStore();

	const dirtyText = useMemo(
		() => dirtyFields.text,
		[dirtyFields.text]
	);

	const isShowSubmitButton = useMemo(
		() => !isSubmitted && dirtyText,
		[isSubmitted, dirtyText]
	);

	const placeHolderText = useMemo(
		() => isAuth ? (isMobile ? 'Оставьте отзыв' : 'Введите текст') : 'Отзывы доступны после регистрации',
		[isAuth, isMobile]
	);

	const handlerClickButton = useCallback(() => {
		if(!isAuth) {
			const textData = getValues('text');
			setData('savedReview', textData);
			if(isMobile) {
				toggleDrawer();
				toggleTab('signup');
			} else{
				pushTo('/signup');
			}
		}
	}, [isAuth, isMobile]);

	useEffect(() => {
		const delay5s = setTimeout(() => {
			setShowPromt(false);
		}, 10000);

		return () => {
			clearTimeout(delay5s);
		};
	}, [showPromt]);

	return (
		<ReviewAddFormWrapperMUI>
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<FormsWrapperBox>
					<TextFieldUI
						controller={{
							name: 'text',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: placeHolderText,
							name: 'text',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Почта"',
							multiline: true,
							sx: TextAreaReviewMUI,
							inputProps: {
								maxLength: 430,
							},
							inputRef: input => {
								if(input && dirtyText) {
									input.focus();
									input.selectionStart = input.value.length;
								}
							},
						}}
					/>
					{showPromt && (
						<HelperBoxMUI>
							Ваш отзыв добавлен
						</HelperBoxMUI>
					)}
					{isCustomSize || isShowSubmitButton ? (
						<ButtonUI
							type={isAuth ? 'submit' : 'button'}
							style={ButtonSubmitMUI}
							onClick={handlerClickButton}
						>
							{isAuth ? 'Отправить' : 'Регистрация'}
						</ButtonUI>
					) : null}
				</FormsWrapperBox>
			</Box>
		</ReviewAddFormWrapperMUI>
	);
};

export default React.memo(ReviewAddForm);

const {
	FormsWrapperBox,
} = useFormsStyle();

const {
	ReviewAddFormWrapperMUI,
	ButtonSubmitMUI,
	HelperBoxMUI,
	TextAreaReviewMUI
} = useReviewAddFormStyle();
