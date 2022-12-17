import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useDebounce(value, delay) {
    const [debounce, setDenounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDenounce(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [delay, value]);
    return debounce;
}

useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number,
};
export default useDebounce;
