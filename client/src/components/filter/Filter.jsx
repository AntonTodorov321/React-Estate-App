import Price from "../price/Price";

export default function Filter() {
    return (
        <div>
            <Price />

            <div>
                <label >Type of estate</label>

                <select>
                    <option value=""></option>
                    <option value="one-bedroom">One-bedroom</option>
                    <option value="maisonette">Maisonette</option>
                    <option value="two-bedroom">Two-bedroom</option>
                </select>
            </div>

            <label >Location</label>

            <select>
                <option value=""></option>
                <option value="Manastirski Livadi">Manastirski Livadi</option>
                <option value="Lozenec">Lozenec</option>
                <option value="Iztok">Iztok</option>
                <option value="Studentski Grad">Studentski Grad</option>
                <option value="Mladost">Mladost</option>
            </select>
        </div>
    );
};