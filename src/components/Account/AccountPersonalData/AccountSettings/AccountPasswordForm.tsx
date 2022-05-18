import React, {FC, useMemo} from 'react';
import {Box, useMediaQuery} from '@mui/material';
import {useForm} from 'react-hook-form';

import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import TextFieldPasswordUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldPasswordUI/TextFieldPasswordUI';
import {useAccountSettingsStyle} from '@/components/Account/AccountPersonalData/AccountSettings/style';
import {useAccountSettings} from '@/components/Account/AccountPersonalData/AccountSettings/useAccountSettings';
import {useUserStore} from '@/hooks/useUserStore';

const AccountPasswordForm : FC = () => {

	const {
		FormTableUI,
		FormButtonUI,
		FormTableEndUI,
		FormTextFieldUI,
		FormTextFieldBorderUI,
		HelperBoxUI,
		FormTextFieldAdaptiveUI,
		FormTableTopSectionMUI,
		FormTableSectionLeftMUI,
		FormTableSectionRightMUI,
		FormTextFieldContainerMUI,
		FormContainerTopMUI,
		FormContainerBottomMUI

	} = useAccountSettingsStyle();

	const {handleSubmit, control, setError, reset} = useForm();

	const {
		onSubmitPassword,
		isSubmitFormSuccess
	} = useAccountSettings(setError, false, reset);

	const {
		isAdmin
	} = useUserStore();

	const isSubmitForm = useMemo(		
		() =>  isSubmitFormSuccess,
		[ isSubmitFormSuccess]
	);

	const isMobile = useMediaQuery('(max-width: 599px)');

	const passwordLabel = useMemo(() => {
		if (isAdmin) {
			return {
				firstLabel: 'Новый пароль',
				secondLabel: 'Повторить пароль',
			};
		} else {
			return {
				firstLabel: 'Старый пароль',
				secondLabel: 'Новый пароль',
			};
		}
	}, [isAdmin]);


	return (
		<Box component="form" onSubmit={handleSubmit(onSubmitPassword)}>
			<FormTableUI>

				<FormTableTopSectionMUI>
					<FormTableSectionLeftMUI >
						Смена пароля
					</FormTableSectionLeftMUI>
					<FormTableSectionRightMUI>
						<FormTextFieldBorderUI>
							<FormTextFieldContainerMUI>
								<TextFieldPasswordUI
									controller={{
										name: 'oldPassword',
										control,
										defaultValue: '',
										rules: { required: true },
									}}
									inputProps={{
										// label: 'Старый пароль',
										placeholder: passwordLabel.firstLabel,
										name: 'oldPassword',
										type: 'password',
										required: true,
										helperText: 'Заполните поле "Пароль"',
										sx: {
											...FormTextFieldUI,
											...FormTextFieldAdaptiveUI(isMobile),
										},
										// autoFocus: true,
									}}
								/>
							</FormTextFieldContainerMUI>
						</FormTextFieldBorderUI>
					</FormTableSectionRightMUI>
				</FormTableTopSectionMUI>

				<FormTableTopSectionMUI>
					<FormTableSectionLeftMUI>

					</FormTableSectionLeftMUI>
					<FormTableSectionRightMUI>
						<FormTextFieldBorderUI>
							<FormTextFieldContainerMUI>
								<TextFieldPasswordUI
									controller={{
										name: 'newPassword',
										control,
										defaultValue: '',
										rules: { required: true },
									}}
									inputProps={{
										// label: 'Новый пароль',
										placeholder: passwordLabel.secondLabel,
										name: 'newPassword',
										type: 'password',
										required: true,
										// helperText: 'Заполните поле "Пароль"',
										sx: {
											...FormTextFieldUI,
											marginTop: isMobile ? '30px' : '10px',
											...FormTextFieldAdaptiveUI(isMobile),
										},
										// autoFocus: true,
									}}
								/>
							</FormTextFieldContainerMUI>


						</FormTextFieldBorderUI>
					</FormTableSectionRightMUI>
				</FormTableTopSectionMUI>
				{isSubmitForm &&
					<HelperBoxUI>
						Пароль успешно изменен 
					</HelperBoxUI>
				}
				<FormContainerBottomMUI>
					<FormContainerTopMUI>
						<FormTableEndUI>
							<ButtonUI
								type="submit"
								style={FormButtonUI}
							>
								Сохранить
							</ButtonUI>
						</FormTableEndUI>
					</FormContainerTopMUI>
				</FormContainerBottomMUI>

			</FormTableUI>
		</Box>
	);
};

export default React.memo(AccountPasswordForm);
