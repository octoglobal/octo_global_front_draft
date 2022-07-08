import React from 'react';
import {useAccountInstuctionFormStyle} from '@/components/Account/AccountInstruction/AccountInstructionForm/style';
import {
	useAccountInstructionForm
} from '@/components/Account/AccountInstruction/AccountInstructionForm/useAccountInstructionForm';
import TextFieldUI from '../../../../UI/UIComponents/TextFIeldUI/TextFieldUI';
import Info from '@/UIIcon/Info.svg';
import {styled} from '@mui/material';
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip';
import {Controller} from 'react-hook-form';
import ArrowLeftIcon from '@/UIIcon/ArrowLeftPayment.svg';
import ArrowRightIcon from '@/UIIcon/ArrowRightPayment.svg';
import ButtonUI from '../../../../UI/UIComponents/ButtonUI/ButtonUI';
import ModalUI from '../../../../UI/UIComponents/ModalUI/ModalUI';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const AccountInstructionForm = () => {

	const {
		control,
		onSubmit,
		handleCloseTooltip,
		isVisibleSuccessModal,
		handleCloseModal,
		handleUpCounter,
		handleDownCounter,
		handleSubmit,
		open,
		handleTooltipOpen,
	} = useAccountInstructionForm();


	return (
		<>
			<ContainerForm onSubmit={handleSubmit(onSubmit)}>
				<ContainerInputOneForm>
					<ContainerInputUrl>
						<TextFieldUI
							controller={{name: 'url', control, rules: {required: 'Обязательное поле'}}}
							inputProps={{placeholder: 'Ссылка на товар'}}
						/>
					</ContainerInputUrl>
					<ClickAwayListener onClickAway={handleCloseTooltip}>
						<div>
							<LightTooltip
								onClose={handleCloseTooltip}
								open={open}
								disableFocusListener
								disableHoverListener
								disableTouchListener
								PopperProps={{
									disablePortal: true,
								}}
								title="Когда человек сознательно или интуитивно выбирает себе в жизни какую-то цель, жизненную задачу, он невольно дает себе оценку. По тому, ради чего человек.">
								<IconTooltipMUI onClick={handleTooltipOpen}>
									<Info></Info>
								</IconTooltipMUI>
							</LightTooltip>
						</div>
					</ClickAwayListener>
				</ContainerInputOneForm>
				<ContainerCounter>
					<ContainerInputTitle>Количество</ContainerInputTitle>
					<div>
						<Controller
							name='count'
							control={control}
							defaultValue={1}
							render={({field: {value, onChange}}) => (
								<CounterContainer>
									<CounterButton type='button' onClick={handleDownCounter(value, onChange)}>
										<ArrowLeftIcon/>
									</CounterButton>
									<ContainerInputCounter>{value}</ContainerInputCounter>
									<CounterButton type='button' onClick={handleUpCounter(value, onChange)}>
										<ArrowRightIcon/>
									</CounterButton>
								</CounterContainer>
							)}
						/>
					</div>
				</ContainerCounter>
				<SendButtonContainer>
					<ButtonUI type='submit'>
						Отправить запрос на выкуп товара
					</ButtonUI>
				</SendButtonContainer>
			</ContainerForm>
			<ModalUI
				closeTime={3}
				title='Заявка успешно отправлена'
				buttonClick={handleCloseModal}
				dialogProps={{open: isVisibleSuccessModal, onClose: handleCloseModal}}/>
		</>
	);
};

const {
	ContainerInputUrl,
	SendButtonContainer,
	CounterButton,
	ContainerForm,
	CounterContainer,
	IconTooltipMUI,
	ContainerInputTitle,
	ContainerInputCounter,
	ContainerCounter,
	ContainerInputOneForm
} = useAccountInstuctionFormStyle();


const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		width: 165,
		backgroundColor: theme.palette.common.white,
		fontWeight: 300,
		boxShadow: theme.shadows[1],
		fontSize: 12,
		padding: '25px 22px 20px 24px',
		textAlign: 'center',
		color: '#3A3A3A',
		lineHeight: '14px',
	},
}));

export default React.memo(AccountInstructionForm);
