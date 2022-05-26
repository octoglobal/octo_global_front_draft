import React, { FC } from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { useContactsStyle } from './style';
import TextFieldUI from 'UI/UIComponents/TextFIeldUI/TextFieldUI';
import { useContactPage } from './useContactPage';
import WhatsAppIconLarge from '@/UIIcon/WhatsAppLarge.svg';
import {SUPPORT_PHONE_DE, SUPPORT_PHONE_RU} from '@/constants/constants';
import { WHATSAPP } from '@/lib/services/services';

const ContactsPage: FC = () => {		

	const {
		control,
		handleSubmit,
		watch,		
		onSubmit,
		errors,
		isOk,		
	} = useContactPage();	


	console.log('watch',watch());
	


	return (
		<ContainerMUI>
			<HeaderMargin/>
					
			<H1MUI>Контакты</H1MUI>

			<PBOX>
				<ParagraphMUI>ANV Hansekontor GmbH </ParagraphMUI>
				<ParagraphMUI>Lademannbogen 6,</ParagraphMUI>
				<ParagraphMUI>22339 Hamburg</ParagraphMUI>
			</PBOX>
			
			<LinksBox>
				<ContactBox>
					<MarkMUI>Поддержка на любом этапе в России</MarkMUI>
					<IcoBoxMUI>
						<LinkMUI
							// href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_RU}&text=Здавствуйте! `}
							href={WHATSAPP(SUPPORT_PHONE_RU)}
						>	
						  
							<WhatsAppIconLarge/>
						</LinkMUI>
						
					</IcoBoxMUI>
					
					
				
				</ContactBox>

				<ContactBox>
					<MarkMUI>Поддержка на любом этапе в Германии на русском</MarkMUI>
					<IcoBoxMUI>
						<LinkMUI
							// href={`https://api.whatsapp.com/send?phone=${SUPPORT_PHONE_DE}&text=Здавствуйте! `}
							href={WHATSAPP(SUPPORT_PHONE_DE)}
						>
							<WhatsAppIconLarge/>
						</LinkMUI>
					</IcoBoxMUI>
				</ContactBox>
			</LinksBox>
			

			<H2MUI>
				График работы (МСК)
			</H2MUI>

			<PBOX>
				<DaysGridMUI>
					
					<ParagraphMUI>Понедельник</ParagraphMUI><ParagraphMUI>10:00 - 20:00</ParagraphMUI>
					<ParagraphMUI>Вторник</ParagraphMUI><ParagraphMUI>10:00 - 20:00</ParagraphMUI>
					<ParagraphMUI>Среда</ParagraphMUI><ParagraphMUI>10:00 - 20:00</ParagraphMUI>
					<ParagraphMUI>Четверг</ParagraphMUI><ParagraphMUI>10:00 - 20:00</ParagraphMUI>
					<ParagraphMUI>Пятница</ParagraphMUI><ParagraphMUI>10:00 - 20:00</ParagraphMUI>
					<ParagraphMUI>Выходные и праздничные дни </ParagraphMUI><ParagraphMUI>12:00 - 16:00</ParagraphMUI>
					
				</DaysGridMUI>
			</PBOX>

			<PBOX>
				<TextBoxMUI>
					<ParagraphMUI>
				Заявки, поданные не в рабочее время, будут обработаны <MarkMUI>на следующий день</MarkMUI>
					</ParagraphMUI>
				</TextBoxMUI>
			
			</PBOX>
			

			<H2BOX>
				<H2MUI>
					Если у вас возникли вопросы, пожалуйста,
					свяжитесь с нами
				</H2MUI>
			</H2BOX>
			<FormMUI onSubmit={handleSubmit(onSubmit)}>				
				<TextFieldContainerMUI>
					<TextFieldUI
						controller={{
							name: 'contactEmail',
							control,					
						}}
						inputProps={{
							name: 'contactEmail',
							type: 'email',
							placeholder:'Почта для обратной связи'
						}}					
					/>
				</TextFieldContainerMUI>
				
				<TextAreaContainerMUI>
					<TextFieldUI
						controller={{
							name: 'contactText',
							control,					
						}}
						inputProps={{
							name: 'contactText',							
							placeholder:'Ваш вопрос',
							multiline: true,
							maxRows: 4,

						}}					
					/>
				</TextAreaContainerMUI>				
				
				<EpmtyBoxMUI>
					{errors.test && <ErrorMUI>{errors.test.message}</ErrorMUI>}
					{isOk && <OkMUI>{'Сообщение отправленно'}</OkMUI>}
				</EpmtyBoxMUI>
				

				<ButtonMUI type='submit'>Отправить</ButtonMUI>
			</FormMUI>
			
		</ContainerMUI>
	);
};

const {
	ParagraphMUI,
	ContainerMUI,
	H1MUI,
	FormMUI,
	H2BOX,
	H2MUI,
	MarkMUI,
	ContactBox,
	IcoBoxMUI,
	TextAreaContainerMUI,
	PBOX,
	LinksBox,
	TextFieldContainerMUI,	
	ButtonMUI,
	LinkMUI,
	DaysGridMUI,
	TextBoxMUI,
	ErrorMUI,
	EpmtyBoxMUI,
	OkMUI,
} = useContactsStyle();

export default React.memo(ContactsPage);
