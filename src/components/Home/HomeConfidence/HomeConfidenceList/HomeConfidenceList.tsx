import React, {FC} from 'react';
import {useHomeConfidenceListStyles} from '@/components/Home/HomeConfidence/HomeConfidenceList/style';
import HomeConfidenceListItem from '../HomeConfidenceListItem/HomeConfidenceListItem';

const homeConfidenceData = [
	'Наши услуги для вас бесплатны',
	'Помогаем с поиском и оплатой любого товара',
	'Консультируем и помогаем на любом этапе',
	'Заполняем экспортную декларацию',
	'Покупаем на территории Европейского Союза',
	'Заказываем любой вид товара от одежды до бытовой техники',
	'Предоставляем возможность оплачивать Bitcoin',
];


const HomeConfidenceList: FC = () => {

	// const listRef = useRef<HTMLUListElement>(null);
	//
	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		const element = listRef.current;
	// 		gsap.fromTo(element, {
	// 			opacity: 0,
	// 			transform: 'translateY(200px)'
	// 		}, {
	// 			opacity: 1,
	// 			transform: 'translateY(0px)',
	// 			scrollTrigger: {
	// 				trigger: element,
	// 				start: 'top 120%',
	// 				markers: false,
	// 			}
	// 		});
	// 	}
	// }, []);

	// ref={listRef}
	return (
		<ListMUI>
			{homeConfidenceData.map(confidenceItem => (
				<HomeConfidenceListItem
					key={confidenceItem}
					title={confidenceItem}
				/>
			))}
		</ListMUI>
	);
};

const { ListMUI } = useHomeConfidenceListStyles();


export default React.memo(HomeConfidenceList);
