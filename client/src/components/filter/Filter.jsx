import { useState } from "react";
import Price from "../price/Price";

export default function Filter() {
    const [range, setRange] = useState([0, 2500]);
    const [currency, setCurrency] = useState('EUR');
    const [filter, setFilter] = useState({
        location: '',
        typeOfEstate: ''
    });

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
    };

    const changeCurrency = (e) => {
        const selectedCurrency = e.target.textContent;
        setCurrency(selectedCurrency);

        setRange(selectedCurrency === 'EUR' ? [0, 2500] : [0, 5000]);
    };

    const handleChange = (e) => {
        setFilter(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const search = () => {
        console.log(range);
        console.log(currency);
        console.log(filter.location);
        console.log(filter.typeOfEstate);
    };

    return (
        <div>
            <Price
                range={range}
                currency={currency}
                changeCurrency={changeCurrency}
                handleSliderChange={handleSliderChange}
            />

            <div>
                <label >Type of estate</label>

                <select
                    value={filter.typeOfEstate}
                    onChange={handleChange}
                    name="typeOfEstate"
                >
                    <option value=""></option>
                    <option value="one-bedroom">One-bedroom</option>
                    <option value="maisonette">Maisonette</option>
                    <option value="two-bedroom">Two-bedroom</option>
                </select>
            </div>

            <label >Location</label>

            <select
                value={filter.location}
                onChange={handleChange}
                name="location"
            >
                <option value=""></option>
                <option value="Manastirski Livadi">Manastirski Livadi</option>
                <option value="Lozenec">Lozenec</option>
                <option value="Iztok">Iztok</option>
                <option value="Studentski Grad">Studentski Grad</option>
                <option value="Mladost">Mladost</option>
            </select>

            <button onClick={search}>Search</button>
        </div>
    );
};