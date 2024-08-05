const FORM_KEYS = {
    name: 'name',
    contacts: 'contacts',
    description: 'description',
    floor: 'floor',
    totalFloors: 'total-floors',
    price: 'price',
    size: 'size'
};

console.log(FORM_KEYS);

export default function AddEstate() {

    return (
        <>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name={FORM_KEYS.name}
                    id={FORM_KEYS.name}
                />
                <br />

                <label htmlFor="contacts">Contacts: </label>
                <input
                    type="text"
                    name="contacts"
                    id="contacts"
                />
                <br />

                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                />
                <br />

                <label htmlFor="floor">Floor: </label>
                <input
                    type="number"
                    name="floor"
                    id="floor"
                />

                <label>from: </label>
                <input
                    type="number"
                    name="total-floors"
                />
                <br />

                <label>Heating: </label>
                <select>
                    <option value=""></option>
                    <option value="GAS">GAS</option>
                    <option value="Air conditioner">Air conditioner</option>
                    <option value="TPP">TPP</option>
                </select>
                <br />

                <label>Location: </label>
                <select>
                    <option value=""></option>
                    <option value="Manastirski Livadi">Manastirski Livadi</option>
                    <option value="Lozenec">Lozenec</option>
                    <option value="Iztok">Iztok</option>
                    <option value="Studentski Grad">Studentski Grad</option>
                    <option value="Mladost">Mladost</option>
                </select>
                <br />

                <label htmlFor="price">Price: </label>
                <input
                    type="number"
                    name="price"
                    id="price"
                />
                <select>
                    <option value=""></option>
                    <option value="lv">lv</option>
                    <option value="EUR">EUR</option>
                </select>
                <br />

                <label htmlFor="size">Size: </label>
                <input
                    type="number"
                    name="size"
                    id="size"
                />
                <br />

                <label>Type of building: </label>
                <select>
                    <option value=""></option>
                    <option value="brick">brick</option>
                    <option value="EPK">EPK</option>
                    <option value="panel">panel</option>
                </select>
                <button type="button">Submit</button>
            </form>
        </>
    )
}