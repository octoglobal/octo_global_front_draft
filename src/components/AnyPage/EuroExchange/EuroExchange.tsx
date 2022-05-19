import React from 'react';
import { useEuroExchangeStyles } from './style';
import { useUserStore } from '@/hooks/useUserStore';
import { useEuroExchange } from './useEuroExchange';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';
import {FieldValues, useForm} from 'react-hook-form';
import EditPencil from '@/UIIcon/EditPencil.svg';


const EuroExchange = () => {

	const {		
		isAdmin,
	} = useUserStore();
	const {
		setEditMode,
		isEditMode,
		onSubmitEuroPrice
	} = useEuroExchange();

	const {
		handleSubmit,
		control,
		watch,
		
		
	} = useForm<FieldValues>();

	console.log('434',watch('price'));


	return (
		<ContainerMUI>
			<FormMUI  onSubmit={handleSubmit(onSubmitEuroPrice)} >
				{isAdmin? 
					isEditMode?
					 <>
							<BlockWrap>
								<LabelMUI onClick={()=>{setEditMode(false);}}>Курс евро: &euro;  </LabelMUI>
								<TextFieldEuroMUI>
									<TextFieldUI
										controller={{
											name: 'price',
											control,
											defaultValue: '00.00',
										}}
										
									/>
								</TextFieldEuroMUI>
					
				
							</BlockWrap>
							<ButtonUI
								type="submit"
								style={FormButtonUI}
							>
								Сохранить
							</ButtonUI>
						</>
					 :
					 <>
					 <BlockWrap>
					 	<LabelMUI>Курс евро: &euro;  </LabelMUI>
								<ParagraphMUI>75,32</ParagraphMUI>
					 	<IcoMUI onClick={()=>{setEditMode(true);}}>
							 <EditPencil/>
						 </IcoMUI>
			 
		 
					 </BlockWrap>
					 
				 </>
					:
					<InfoBlockMUI>
						<LabelMUI>Курс евро: &euro;  </LabelMUI>
						<ParagraphMUI>75,32</ParagraphMUI>
						<IcoMUI>
							{'INFO ico'}
							
						</IcoMUI>
					</InfoBlockMUI>
				}
				
				
				{/* <>
					<ParagraphMUI>75,32</ParagraphMUI><IcoMUI onClick={()=>{setEditMode(true);}}><EditPencil/></IcoMUI>
				</> */}
						
				
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
	TextFieldEuroMUI,
	BlockWrap,
	InfoBlockMUI,
} = useEuroExchangeStyles();


export default React.memo(EuroExchange);
