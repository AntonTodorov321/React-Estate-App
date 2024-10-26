import Price from "../price/Price";

export default function Filter({
    range,
    handleSliderChange,
    filter,
    handleChange,
    search
}) {
    return (
        <div>
            <Price
                range={range}
                currency={filter.currency}
                handleChange={handleChange}
                handleSliderChange={handleSliderChange}
            />

            <div>
                <label >Type of estate</label>

                <select
                    value={filter.typeOfEstate}
                    onChange={() => handleChange(e)}
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
                onChange={() => handleChange(e)}
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