import React from "react";

function useLocalStorage (storageName, initialValue) {
	//local storage section
	const localStorageItem = localStorage.getItem(storageName);//initial todos in storage

	let parseStorage = [];

	if (!localStorageItem) {
		localStorage.setItem(storageName, JSON.stringify(initialValue));//save empty string
		parseStorage = initialValue;
	} else {
		parseStorage = JSON.parse(localStorageItem);//string to array
	}

	const [storage, setStorage] = React.useState(parseStorage);

	const saveStorage = (newStorage) => {
		localStorage.setItem(storageName, JSON.stringify(newStorage));
		setStorage(newStorage);
	};

	return [storage, saveStorage];
}

export { useLocalStorage };

