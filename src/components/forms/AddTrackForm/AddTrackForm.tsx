import React, {FC} from 'react';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

import {useAddTrackFormStyle} from './style';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
// import {useMobile} from '@/hooks/useMedia';

const AddTrackForm: FC = () => {

	const {control} = useForm();

	// const {isMobile} = useMobile();

	const {
		TrackFormWrapperUI,
		FormWrapperUI,
		ButtonAddTrackUI,
		TextAreaUI,
		// TextFieldMobileStyleUI
	} = useAddTrackFormStyle();

	return (
		<TrackFormWrapperUI>
			<Box component="form">
				<FormWrapperUI>
					<TextFieldUI
						controller={{
							name: 'name',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: 'Название',
							name: 'name',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Название"',
							// style: isMobile ? TextFieldMobileStyleUI : {}
						}}
					/>

					<TextFieldUI
						controller={{
							name: 'trackNumber2',
							control,
							defaultValue: '',
							rules: {required: true}
						}}
						inputProps={{
							placeholder: 'Трек номер',
							name: 'trackNumber2',
							type: 'text',
							required: true,
							helperText: 'Заполните поле "Почта"',
							// style: isMobile ? TextFieldMobileStyleUI : {}
						}}
					/>

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
							required: true,
							helperText: 'Заполните поле "Почта"',
							multiline: true,
							sx: TextAreaUI
						}}
					/>

					<ButtonUI
						style={ButtonAddTrackUI}
					>
						Добавить
					</ButtonUI>
				</FormWrapperUI>
			</Box>
		</TrackFormWrapperUI>
	);
};

export default React.memo(AddTrackForm);
