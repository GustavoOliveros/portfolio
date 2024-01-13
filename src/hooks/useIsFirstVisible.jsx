import { useEffect, useState } from 'react';

export function useIsFirstVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    const [firstIntersection, setFirstIntersection] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !firstIntersection) {
                setFirstIntersection(true);
                setIntersecting(true);
            }
        });

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}
