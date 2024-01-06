import React from "react";

function useLocalStorage (storageName, initialValue) {
	//local storage section

	const [storage, setStorage] = React.useState(initialValue);

	const [loading, setLoading] = React.useState(true);//loading todos

	const [error, setError] = React.useState(false);//error app

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(storageName);//initial todos in storage
	
				let parseStorage;
	
				if (!localStorageItem) {
					localStorage.setItem(storageName, JSON.stringify(initialValue));//save empty string
					parseStorage = initialValue;
				} else {
					parseStorage = JSON.parse(localStorageItem);//string to array
					setStorage(parseStorage);
				}
	
				setLoading(false);
			} catch(error){
				setError(true);
				setLoading(false);
			}
		}, 2000);
	}, [storageName, initialValue]);

	const saveStorage = (newStorage) => {
		localStorage.setItem(storageName, JSON.stringify(newStorage));
		setStorage(newStorage);
	};

	return {storage, saveStorage, loading, error};
}

export { useLocalStorage };

