import { useState } from 'react';

export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        };

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedVale;

        if (typeof value === 'function') {
            serializedVale = JSON.stringify(value(state));
        } else {
            serializedVale = JSON.stringify(value);
        };

        localStorage.setItem(key, serializedVale);
    };

    return [
        state,
        setPersistedState
    ];
};