import React from 'react';
import { useEuroExchangeStyles } from './style';
import { useUserStore } from '@/hooks/useUserStore';
import { useEuroExchange } from './useEuroExchange';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import ButtonUI from 'UI/UIComponents/ButtonUI/ButtonUI';


const EuroExchange = () => {

	const {
		
		isAdmin,
	} = useUserStore();
	const {
		setEditMode,
		editMode,
	} = useEuroExchange();

    
	return (
		<ContainerMUI>
			<FormMUI >
				<LabelMUI>Курс евро: &euro;  </LabelMUI>                
				{isAdmin?
					editMode?
						<> <input type="text" defaultValue={'75,32'}/><ButtonUI
							type="submit"
							style={FormButtonUI}
						>
							Сохранить
						</ButtonUI></>: <><ParagraphMUI>75,32</ParagraphMUI><IcoMUI onClick={()=>{setEditMode(true);}}>{'EDIT ICO'}</IcoMUI></> 
					:
					<><ParagraphMUI>75,32</ParagraphMUI>{'INFO ICO'}</>
						
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
	IcoMUI
} = useEuroExchangeStyles();


export default React.memo(EuroExchange);
