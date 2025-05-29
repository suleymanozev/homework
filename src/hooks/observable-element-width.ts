import {useState, useEffect, type RefObject} from "react";


export const useObserveElementWidth = (containerRef: RefObject<HTMLDivElement | null>) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        let observerRefValue = null;

        const observer = new ResizeObserver((entries) => {
            setWidth(entries[0].contentRect.width);
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
            observerRefValue = containerRef.current;
        }

        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    },);

    return width;
};