import {ChangeEvent} from 'react';
import { IOrdersSearchAdmin, ISearchAdminModel, IUserSearchAdmin } from '@/models/ISearchAdminModel';
import { IAdminHintsData } from '@/reducers/adminSlice/adminSlice';

export const checkValidArray = (arr: Array<unknown>): boolean => Array.isArray(arr) && !!arr?.length;

export const summ = (a: number, b: number) => a + b;

export const isObjectEmpty = (obj = {}): boolean => {
	return Object.keys(obj).length == 0;
};

export const ObjectHasOwnProperty = (object = {}, property: string): boolean => {
	return Object.prototype.hasOwnProperty.call(object, property);
};

export const getFulfilledInString = (str: string) => {
	return str.includes('fulfilled');
};

// export const getTrueItemInObj = (obj = {}) => {
// 	const trueArr = [];
// 	for (const [, value] of Object.entries(obj)) {
// 		if (value) trueArr.push(value);
// 	}
// 	return trueArr;
// };

export function ToDefaultDate(date: string) {
	const adDate = new Date(date),
		options = {
			month: 'numeric',
			day: 'numeric',
			year: 'numeric'
		};
	const dateArray = adDate.toLocaleString('ru', options as object).split('.');
	const day = dateArray[0];
	const mount = dateArray[1];
	const year = dateArray[2].substring(2,);
	return `${day}.${mount}.${year}`;
}

export function ToDefaultTime(date: string) {
	const adDate = new Date(date),
		options = {
			hour: 'numeric',
			minute: 'numeric'
		};
	return adDate.toLocaleString('ru', options as object);
}

//
// export function formatDate(date) {
// 	return date.getFullYear() + '/' +
// 		(date.getMonth() + 1) + '/' +
// 		date.getDate() + ' ' +
// 		date.getHours() + ':' +
// 		date.getMinutes();
// }

export default function PhoneMask(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, value: string, setValue: (string: string) => void) {

	let inputOnlyNumber = e.target.value.replace(/\D/g, '');
	let formattedInputValue = '';

	if (!inputOnlyNumber) {
		setValue('');
		return;
	}

	if (inputOnlyNumber[0] === '9') inputOnlyNumber = '7' + inputOnlyNumber;
	formattedInputValue = '+7 ';
	if (inputOnlyNumber.length > 1) {
		formattedInputValue += '(' + inputOnlyNumber.substring(1, 4);
	}
	if (inputOnlyNumber.length >= 5) {
		formattedInputValue += ') ' + inputOnlyNumber.substring(4, 7);
	}
	if (inputOnlyNumber.length >= 8) {
		formattedInputValue += '-' + inputOnlyNumber.substring(7, 9);
	}
	if (inputOnlyNumber.length >= 10) {
		formattedInputValue += '-' + inputOnlyNumber.substring(9, 11);
	}

	if (e.target.value.length >= 0 && e.target.value.length <= 18) {
		setValue(formattedInputValue);
	}

	return inputOnlyNumber;
};

export const ucFirst = (str: string): string => {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
};

export const translit = (word: string): string => {
	const converter: {
		[key: string]: string;
	} = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
		'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
		'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
		'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
		'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
		'э': 'e', 'ю': 'yu', 'я': 'ya'
	};
	word = word.toLowerCase();
	let answer = '';
	for (let i = 0; i < word.length; ++i) {
		if (converter[word[i]] == undefined) {
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
	answer = answer.replace(/[^-0-9a-z]/g, '-');
	answer = answer.replace(/[-]+/g, '-');
	answer = answer.replace(/^\\-|-$/g, '');

	return ucFirst(answer);
};

export const checkMedia = (screen: number, type: 'innerWidth' | 'innerHeight' = 'innerWidth') => {
	if (typeof window != 'undefined') {
		return window[type] <= screen;
	}
	return false;
};

export const ellipsis = (string : string, count : number) : string => {
	if (string?.length > count) {
		return (`${string.substr(0, (count - 1))}..`);
	} else {
		return (string);
	}
};

export const addZero = (n : number | string) : number | string => {
	if (n < 10) {
		return `0${n}`;
	}
	else {
		return n;
	}
};

const MonthArray=[
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Ноября',
	'Декабря',
];


export const ToRusDate = (date : string) : string => {

	

	const expaireData = new Date(date);

	const time = expaireData.getTime();
	const grinvic = new Date(time);
	// const diff = grinvic.getTimezoneOffset();
	// const local = new Date(time - (diff * 60 * 1000));


	// const options = {
	// 	month: 'long',
	// };

	

	const h = addZero(grinvic.getHours());
	const mi = addZero(grinvic.getMinutes());

	const d = addZero(grinvic.getDate());
	const m = grinvic.getMonth();
	const y = grinvic.getFullYear();

	// const month = local.toLocaleString('ru', options);
	const month = MonthArray[m];

	// const wordEnd = wordAutoEnding(month, )

	const timeLocal = `${h}:${mi}`;
	const dateLocal = `${d} ${month} ${y}`;


	return `${timeLocal} ${dateLocal}`;
};

export const sortItemArrayInId = (array: unknown, arrayId: number[]) => {
	let filterArray = array as [];
	for (let i = 0; i < arrayId.length; i++) {
		filterArray = filterArray.filter((item: {id: number}) => item.id !== arrayId[i]) as [];
	}
	return filterArray;
};

export const generateAdminHintsData = (data: ISearchAdminModel) => {
	const modificationArray: IAdminHintsData[] = [];
	for (const [, value] of Object.entries(data)) {
		value.forEach((item: IOrdersSearchAdmin & IUserSearchAdmin, index: number) => {
			const innerObj: IAdminHintsData = {
				userAreaId: null,
				email: null,
				orderNumber: null,
				trackNumber: null,
				name: '',
				type: null,
				url: '',
				title: 'test',
				id: null
			};

			const type = item?.trackNumber || item?.trackNumber ? 'order' : 'user';

			if (type == 'order') {
				innerObj.userAreaId = item?.userAreaId;
				innerObj.name = item?.userName;
				innerObj.email = item?.userEmail;
				innerObj.id = item.userId;
				innerObj.orderNumber = item?.longId;
				innerObj.trackNumber = item?.trackNumber;
				innerObj.title = item.userEmail;
				innerObj.url = `${item?.userEmail}${item?.userName}${item?.userAreaId}${item.trackNumber}${item.longId}`;
			}

			if (type == 'user') {
				innerObj.userAreaId = item?.personalAreaId;
				innerObj.name = item?.name;
				innerObj.email = item?.email;
				innerObj.orderNumber = null;
				innerObj.id = item.id;
				innerObj.trackNumber = null;
				innerObj.title = item.email;
				innerObj.url = `${item?.email}${item?.name}${item?.personalAreaId}${index}`;
			}
			innerObj.type = type;

			const findItem = modificationArray.find(item => item.id == innerObj.id);
			if (!findItem) {
				modificationArray.push(innerObj);
			}
		});
 	}
	return modificationArray.splice(0, 5);
};


export const getLocationWindow = (search: string) => {
	if (typeof window !== undefined) {
		return window.location.search?.split(search)[1]?.split('&')[0].replace('%40', '@');
	}
};

export const getSelectArray = (obj: object) => {
	const trueArray = [];
	for (const [key, value] of Object.entries(obj)) {
		if (value) trueArray.push(+key);
	}
	return trueArray;
};

export const findItemInArrayForId = (array: unknown, arrayId: number[]) => {
	const innerArray = [];
	if (Array.isArray(array)) {
		for (let i = 0; i < arrayId.length; i++) {
			const findItem = array.find((item) => item.id == arrayId[i]);
			if (findItem) {
				innerArray.push(findItem);
			}
		}
	}
	return innerArray;
};

export const onScroll = (event: Event, callback: () => void) => {
	const window = event.currentTarget as Window;
	if (window) {
		const bodyHeight = document.body.offsetHeight / 100 * 70;
		const offsetTop = window.scrollY + window.innerHeight;
		if (offsetTop > bodyHeight) {
			callback();
		}
	}
};
export const WHATSAPP = (phone:string)=> `https://api.whatsapp.com/send?phone=${phone}&text=Здравствуйте!`;