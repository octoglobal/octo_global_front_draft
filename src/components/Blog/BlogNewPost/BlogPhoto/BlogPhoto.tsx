import React, {FC} from 'react';
import {useBlogPhotoStyles} from '@/components/Blog/BlogNewPost/BlogPhoto/style';
import {useBlogPhoto} from '@/components/Blog/BlogNewPost/BlogPhoto/useBlogPhoto';
import { Controller } from 'react-hook-form';
import PlusIcon from '@/UIIcon/PlusIcon.svg';

interface IBlogPhotoProps {
	indexField: number;
	photoReady: string
}

const BlogPhoto: FC<IBlogPhotoProps> = ({indexField, photoReady}) => {
	const {
		control,
		photoSrc,
		inputRef,
		onChangeInput,
		handleAddPhoto,
		handleClearPhoto,
	} = useBlogPhoto(indexField,photoReady);
	
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
					// src={'data:image;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7'}
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
							"image/jpeg,image/png,image/jpg,image/webp,image/raw,image/tiff,image/psd,image/bmp,image/gif,image/jp2"
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
