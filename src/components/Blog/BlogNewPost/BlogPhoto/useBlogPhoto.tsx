import React, {useMemo, useRef} from 'react';
import {useFormContext, useWatch} from 'react-hook-form';
import {IPhotoFormState} from '@/components/Blog/BlogNewPost/BlogFields/useBlogFields';

export const useBlogPhoto = (indexField: number) => {
	const photo = useWatch({name: `blogPhoto${indexField}`}) as IPhotoFormState;
	const {control, setValue} = useFormContext();

	const inputRef = useRef<HTMLInputElement>(null);
	const defaultPhoto = '/image/BlogAddPhoto.jpg';


	const photoSrc = useMemo(() => {
		if (photo?.base64) {
			return {
				src: photo.base64,
				defaultPhoto: false
			};
		}
		return {
			src: defaultPhoto,
			defaultPhoto: true,
		};
	}, [photo]);

	const handleAddPhoto = () => {
		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleClearPhoto = () => {
		setValue(`blogPhoto${indexField}`, undefined);
	};

	const onChangeInput = (
		event: React.ChangeEvent<HTMLInputElement>,
		onChange: (state: IPhotoFormState) => void
	) => {
		const fileList = event.target.files as FileList;
		if (fileList.length) {
			const reader = new FileReader();
			const file = fileList[0];
			reader.onload = (ev) => {
				if (ev.target) {
					const result = ev.target.result;
					if (result) {
						onChange({
							base64: result.toString(),
							file: file,
						});
					}
				}
			};
			onChange({
				base64: '',
				file: file,
			});

			reader.readAsDataURL(file);
		}
	};


	return {
		photo,
		control,
		photoSrc,
		inputRef,
		onChangeInput,
		handleAddPhoto,
		handleClearPhoto,
	};
};
