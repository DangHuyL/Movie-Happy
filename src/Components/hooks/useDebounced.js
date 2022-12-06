import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDenounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDenounce(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debounce;
}

export default useDebounce;
