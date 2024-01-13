import { useState, useEffect } from 'react';

/**
 * Retorna un valor booleano que indica si el scroll está en el tope
 * @returns {boolean}
 */
export default function useOnTop() {
    const [isOnTop, setIsOnTop] = useState(true);

    /**
     * Chequea si el scroll está en el tope y actualiza el estado
     */
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setIsOnTop(false) : setIsOnTop(true);
    };

    /**
     * Agrega event listener al montar el componente
     */
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        };
    }, []);

    return isOnTop;
}
