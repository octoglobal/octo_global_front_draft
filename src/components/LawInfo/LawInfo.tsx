import React,{FC} from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import { useLawInfoStyle } from './Style';

const {ContainerMUI,H1MUI} = useLawInfoStyle();


const LawInfo: FC = () => {
	return (
		<ContainerMUI>
			<HeaderMargin/>			
			<H1MUI>{'заглушка!'}</H1MUI>			
		</ContainerMUI>
	);
};





export default React.memo(LawInfo);
