export const useLocalStorage = () => {

	/*
	* return data || null
	* */
	const getData = (key : string) => {
		const lSData : any = localStorage.getItem(key);
		const parsesData = JSON.parse(lSData);
		return parsesData || null;
	};

	const setData = (key : string, data : any) => {
		localStorage.setItem(key, JSON.stringify(data));
	};

	const removeData = (key : string) => {
		localStorage.removeItem(key);
	};

	return {
		getData,
		setData,
		removeData
	};
};
