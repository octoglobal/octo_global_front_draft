import {ChangeEvent} from 'react';

export const checkValidArray = (arr: Array<unknown>): boolean => Array.isArray(arr) && !!arr?.length;

export const summ = (a: number, b: number) => a + b;

export const isObjectEmpty = (obj = {}): boolean => {
	return Object.keys(obj).length == 0;
};

export const ObjectHasOwnProperty = (object = {}, property: string): boolean => {
	return Object.prototype.hasOwnProperty.call(object, property);
};

// export const getTrueItemInObj = (obj = {}) => {
// 	const trueArr = [];
// 	for (const [, value] of Object.entries(obj)) {
// 		if (value) trueArr.push(value);
// 	}
// 	return trueArr;
// };

// export function ToRusDate(date) {
// 	const adDate = new Date(date),
// 		options = {
// 			month: 'long',
// 			day: 'numeric',
// 			hour: 'numeric',
// 			minute: 'numeric'
// 		}
// 	return adDate.toLocaleString("ru", options);
// }
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
	if (n && n < 10) {
		return `0${n}`;
	} else {
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

	// console.log('date: , ', date);

	const expaireData = new Date(date);

	const time = expaireData.getTime();
	const grinvic = new Date(time);
	const diff = grinvic.getTimezoneOffset();
	const local = new Date(time - (diff * 60 * 1000));

	// console.log('localdate: ', local);
	// console.log('diff: ', diff);
	// console.log('grinvic: ', grinvic);

	// const options = {
	// 	month: 'long',
	// };

	// console.log(typeof grinvic.getHours());

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

	// console.log('timeLocal: ', timeLocal);
	// console.log('dmy: ', d, m, y);
	// console.log('month: ', local.toLocaleString("ru", options));

	return `${timeLocal} ${dateLocal}`;
};
