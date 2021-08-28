import {useEffect, useRef} from "react";

export const useObserver = (loading, lastElementRef, conditionWithPages, callback) => {
    const observerRef = useRef();

    useEffect(() => {
        if(loading) return;
        if(observerRef.current) observerRef.current.disconnect();

        let lastElement = lastElementRef.current;

        observerRef.current = new IntersectionObserver(([entry ]) => {
            if(entry.isIntersecting && conditionWithPages) {
                callback();
                console.log('observer');
            }
        });

        observerRef.current.observe(lastElement);

        return () => observerRef.current.unobserve(lastElement);
    }, [loading]);
}