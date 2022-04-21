import React, {FC} from 'react';
import {useBlogPhotoStyles} from '@/components/Blog/BlogNewPost/BlogPhoto/style';
import {useBlogPhoto} from '@/components/Blog/BlogNewPost/BlogPhoto/useBlogPhoto';
import { Controller } from 'react-hook-form';
import PlusIcon from '@/UIIcon/PlusIcon.svg';

interface IBlogPhotoProps {
	indexField: number;
}

const BlogPhoto: FC<IBlogPhotoProps> = ({indexField}) => {
	const {
		control,
		photoSrc,
		inputRef,
		onChangeInput,
		handleAddPhoto,
		handleClearPhoto,
	} = useBlogPhoto(indexField);

	return (
		<PhotoContainerMUI>
			{!photoSrc.defaultPhoto && (
				<DeleteButtonMUI
					onClick={handleClearPhoto}
				>
					<PlusIcon/>
				</DeleteButtonMUI>
			)}
			<UploadButtonMUI onClick={handleAddPhoto}>
				<PhotoButtonMUI
					src={photoSrc.src}
					alt={`postPhoto${indexField}`}
				/>
			</UploadButtonMUI>
			<Controller
				name={`blogPhoto${indexField}`}
				control={control}
				rules={{
					required: true,
				}}
				render={({field: {onChange}}) => (
					<PhotoInputFileMUI
						onChange={(e) => onChangeInput(e, onChange)}
						ref={inputRef}
						name="photoFile"
						type='file'
						accept=
							"image/jpeg, "
						hidden
					/>
				)}
			/>
		</PhotoContainerMUI>
	);
};

const {
	DeleteButtonMUI,
	PhotoButtonMUI,
	UploadButtonMUI,
	PhotoContainerMUI,
	PhotoInputFileMUI,
} = useBlogPhotoStyles();

export default React.memo(BlogPhoto);
