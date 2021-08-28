import {useRef, useCallback} from 'react';

const useDebounce = (callback, delay) => {
    const timer = useRef();

    const debounceFunc  = useCallback((value) => {
        if(timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(value);
        }, delay);
    }, [callback, delay]);

    return debounceFunc;
}

export default useDebounce;