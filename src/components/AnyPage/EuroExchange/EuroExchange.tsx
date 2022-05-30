import React from 'react';
import { useEuroExchangeStyles } from './style';
import { useUserStore } from '@/hooks/useUserStore';
import { useEuroExchange } from './useEuroExchange';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {FieldValues, useForm} from 'react-hook-form';
import { useMobile } from '@/hooks/useMedia';
import EditPencil from '@/UIIcon/EditPencil.svg';
import Info from '@/UIIcon/Info.svg';
import {styled} from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';



const EuroExchange = () => {
	
	const {
		isMobile
	} = useMobile();


	const {		
		isAdmin,
	} = useUserStore();
	const {
		setEditMode,
		isEditMode,
		onSubmitEuroPrice,
		value,
		open,
		handleTooltipClose,
		handleTooltipOpen,
	} = useEuroExchange();

	const {
		handleSubmit,
		control,		
	} = useForm<FieldValues>();


	


	return (
		<ContainerMUI admin={isAdmin}>
			<FormMUI admin={isAdmin} onSubmit={handleSubmit(onSubmitEuroPrice)} >
				{isAdmin? 
					isEditMode?
					 <>
							<BlockWrap>
								<LabelMUI admin={isAdmin} onClick={()=>{setEditMode(false);}}>Курс евро: &euro;  </LabelMUI>
								<TextFieldEuroMUI>
									<TextFieldUI
										controller={{
											name: 'rate',
											control,
											defaultValue: value,
										}}
										inputProps={{
											name: 'rate',
											type: 'text',}}
										
									/>
								</TextFieldEuroMUI>
					
				
							</BlockWrap>
							<ButtonUI
								type="submit"
								style={FormButtonUI(isMobile)}
							>
								Сохранить
							</ButtonUI>
						</>
					 :
					 <>
					 <BlockWrap>
					 	<LabelMUI admin={isAdmin}  >Курс евро: &euro;  </LabelMUI>
								<ParagraphMUI admin={isAdmin}>{value}</ParagraphMUI>
					 	<IcoMUI onClick={()=>{setEditMode(true);}}>
							 <EditPencil/>
						 </IcoMUI>
			 
		 
					 </BlockWrap>
					 
				 </>
					:
					<InfoBlockMUI>
						<LabelMUI admin={isAdmin}>Курс евро: &euro;  </LabelMUI>
						<ParagraphMUI admin={isAdmin}>{value}</ParagraphMUI>

						<ClickAwayListener onClickAway={handleTooltipClose}>
							<div>
								<LightTooltip 
									onClose={handleTooltipClose}
									open={open}
									disableFocusListener									
									disableHoverListener
									disableTouchListener
									PopperProps={{
										disablePortal: true,
								  }}
									title="По данному курсу евро Вы можете зачислить валюту на свой лич­ный счет в Octo Glob­al.">
									<IconMUI onClick={handleTooltipOpen}>
										<Info></Info>													
									</IconMUI>
								</LightTooltip>
							
							</div>
							
							
						</ClickAwayListener>
						
					
						
					</InfoBlockMUI>
				}				
							
				
			</FormMUI>
			
			

		</ContainerMUI>
	);
};

const {
	ContainerMUI,		
	ParagraphMUI,
	LabelMUI,
	FormMUI,
	FormButtonUI,
	IcoMUI,
	IconMUI,
	TextFieldEuroMUI,
	BlockWrap,
	InfoBlockMUI,
	
	
} = useEuroExchangeStyles();

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
	 
	  [theme.breakpoints.down(500)]: {
			width: 140,
			padding: '8px 11px 9px 11px',
	  }
	},
}));


export default React.memo(EuroExchange);
