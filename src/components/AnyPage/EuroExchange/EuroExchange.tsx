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
	} = useEuroExchange();

	const {
		handleSubmit,
		control,		
	} = useForm<FieldValues>();
	


	return (
		<ContainerMUI admin={isAdmin}>
			<FormMUI  onSubmit={handleSubmit(onSubmitEuroPrice)} >
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
											type: 'number',}}
										
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
						<IconMUI>
							<Info></Info>													
						</IconMUI>
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


export default React.memo(EuroExchange);
