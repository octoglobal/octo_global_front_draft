export const summ = (a: number, b: number) => a + b;

export const isObjectEmpty = (obj = {}) : boolean => {
	if (Object.keys(obj).length == 0) {
		return true;
	} else {
		return false;
	}
};

export const ObjectHasOwnProperty = (object = {}, property : string) : boolean => {
	return Object.prototype.hasOwnProperty.call(object, property);
};

export const getTrueItemInObj = (obj = {}) => {
	const trueArr = [];
	for (const [, value] of Object.entries(obj)) {
		if (value) trueArr.push(value);
	}
	return trueArr;
};
