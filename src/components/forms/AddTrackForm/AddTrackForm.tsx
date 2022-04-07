import React, {FC, useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

import {useAddTrackFormStyle} from './style';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {useAddTrackForm} from '@/components/forms/AddTrackForm/useAddTrackForm';

const AddTrackForm: FC = () => {

	const {handleSubmit, control, reset} = useForm();
	const [showPromt, setShowPromt] = useState(false);

	const {
		TrackFormWrapperUI,
		FormWrapperUI,
		ButtonAddTrackUI,
		TextAreaUI,
		HelperBoxMUI,
		BottomHelperBoxMUI,
		// TextFieldMobileStyleUI
	} = useAddTrackFormStyle();

	const successSubmit = () => {
		setShowPromt(true);
	};

	const {onSubmit} = useAddTrackForm(successSubmit, reset);

	useEffect(() => {
		const delay5s = setTimeout(() => {
			setShowPromt(false);
		}, 5000);

		return () => {
			clearTimeout(delay5s);
		};
	}, [showPromt]);

	return (
		<TrackFormWrapperUI>
			<Box component="form" onSubmit={handleSubmit(onSubmit)}>
				<FormWrapperUI>
					<TextFieldUI
						controller={{
							name: 'title',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: 'Название',
							name: 'title',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Название"',
							// style: isMobile ? TextFieldMobileStyleUI : {}
						}}
					/>

					<TextFieldUI
						controller={{
							name: 'track_number',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: 'Трек номер',
							name: 'track_number',
							type: 'text',
							required: true,
							// helperText: 'Заполните поле "Почта"',
							// style: isMobile ? TextFieldMobileStyleUI : {}
						}}
					/>

					<BottomHelperBoxMUI>
						<TextFieldUI
							controller={{
								name: 'comment',
								control,
								defaultValue: '',
								rules: {required: true}
							}}
							inputProps={{
								placeholder: 'Комментарий',
								name: 'comment',
								type: 'text',
								// required: true,
								// helperText: 'Заполните поле "Почта"',
								multiline: true,
								sx: TextAreaUI
							}}
						/>
						{showPromt && (
							< HelperBoxMUI >
								Посылка успешно добавлена
							</HelperBoxMUI>
						)}
					</BottomHelperBoxMUI>

					<ButtonUI
						style={ButtonAddTrackUI}
						type="submit"
					>
						Добавить
					</ButtonUI>
				</FormWrapperUI>
			</Box>
		</TrackFormWrapperUI>
	);
};

export default React.memo(AddTrackForm);
