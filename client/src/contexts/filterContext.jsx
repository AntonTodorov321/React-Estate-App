import { createContext, useState } from "react";

export const FilterContext = createContext();

const initialRange = [0, 2500];
const initialFilter = {
    currency: 'EUR',
    typeOfEstate: '',
    location: ''
};

export const FilterProvider = ({
    children,
}) => {
    const [range, setRange] = useState(initialRange);
    const [filter, setFilter] = useState(initialFilter);

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
    };

    const handleChange = (e) => {
        if (e.target.dataset.name) {
            const selectedCurrency = e.target.textContent;

            setFilter(state => ({
                ...state,
                [e.target.dataset.name]: selectedCurrency
            }));
            setRange(selectedCurrency === 'EUR' ? [0, 2500] : [0, 5000]);
        } else {
            setFilter(state => ({
                ...state,
                [e.target.name]: e.target.value
            }));
        };
    };

    const cleanFilter = () => {
        setRange(initialRange);
        setFilter(initialFilter);
    };

    const values = {
        range,
        filter,
        handleSliderChange,
        handleChange,
        cleanFilter,
        initialRange,
        initialFilter,
    };

    return (
        <FilterContext.Provider value={values}>
            {children}
        </FilterContext.Provider>
    );
};