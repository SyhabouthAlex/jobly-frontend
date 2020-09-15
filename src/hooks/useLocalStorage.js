import {useState, useEffect} from 'react';

function useLocalStorage(key) {
    const initialValue = localStorage.getItem(key) || null;

    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        if (!item) {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, item);
        }
    }, [key, item]);

    return [item, setItem];
}

export default useLocalStorage;