import Price from "../price/Price";
import styles from './Filter.module.css';

export default function Filter({
    range,
    handleSliderChange,
    filter,
    handleChange,
    search
}) {
    return (
        <div className={styles.container}>
            <Price
                range={range}
                currency={filter.currency}
                handleChange={handleChange}
                handleSliderChange={handleSliderChange}
            />

            <div>
                <label className={styles.label}>Type of estate</label>

                <select
                    value={filter.typeOfEstate}
                    onChange={(e) => handleChange(e)}
                    name="typeOfEstate"
                    className={styles.select}
                >
                    <option value=""></option>
                    <option value="one-bedroom">One-bedroom</option>
                    <option value="maisonette">Maisonette</option>
                    <option value="two-bedroom">Two-bedroom</option>
                </select>
            </div>

            <div>
                <label className={styles.label}>Location</label>

                <select
                    value={filter.location}
                    onChange={(e) => handleChange(e)}
                    name="location"
                    className={styles.select}
                >
                    <option value=""></option>
                    <option value="Manastirski Livadi">Manastirski Livadi</option>
                    <option value="Lozenec">Lozenec</option>
                    <option value="Iztok">Iztok</option>
                    <option value="Studentski Grad">Studentski Grad</option>
                    <option value="Mladost">Mladost</option>
                </select>
            </div>

            <button onClick={search} className={styles.button}>Search</button>
        </div>
    );
};