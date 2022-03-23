export const summ = (a: number, b: number) => a + b;

export const isObjectEmpty = (obj = {}) => {
	if (Object.keys(obj).length == 0) {
		return true;
	} else {
		return false;
	}
}
