export function isArrayEqual(arr1: Array<string>, arr2: Array<string>) {
	return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export const isEmpty = (obj: { [s: string]: unknown; } | ArrayLike<unknown>) => (obj && Object.entries(obj).length === 0 && obj.constructor === Object ? true : false);

export const isFunction = (functionToCheck: any) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

export const isArrayNullOrEmpty = (arr: Array<any>) => (arr ? (arr.length > 0 ? false : true) : true);

export const isMapNullorEmpty = (map: {}) => (map ? (Object.keys(map).length < 1 ? true : false) : true);

export const changeCursorUI = (value: 'wait' | 'default') => (document.body.style.cursor = value);

export const createGuid = () => {
	const S4 = () => {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
};

export function getRandomString(len: number, charSet?: string) {
	charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var randomString = '';
	for (var i = 0; i < len; i++) {
		var randomPoz = Math.floor(Math.random() * charSet.length);
		randomString += charSet.substring(randomPoz, randomPoz + 1);
	}
	return randomString;
}

export function getSplitArray(arr: string | any[], size: number) {
	let i = 0;
	let arrays = [];
	if (arr.length < size) {
		arrays.push(arr);
	}
	while (arr.length >= size) {
		let temp = arr.slice(i, i + size);
		temp.length && arrays.push(temp);
		i = i + size;
		if (i > arr.length) {
			break;
		}
	}
	return arrays;
}