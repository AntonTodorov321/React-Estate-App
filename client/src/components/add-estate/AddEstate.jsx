export default function AddEstate() {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name"></input>
            <br />
            <label htmlFor="contacts">Contacts: </label>
            <input type="text" id="contacts"></input>
            <br />
            <label htmlFor="description">Description: </label>
            <input type="text" id="description"></input>
            <br />
            <label htmlFor="floor">Floor: </label>
            <input type="number" id="floor"></input>
            <label>from: </label>
            <input type="number"></input>
            <br />
            <label>Heating: </label>
            <select>
                <option value=""></option>
                <option value="option1">GAS</option>
                <option value="option1">Air conditioner</option>
                <option value="option1">TPP</option>
            </select>
            <br />
            <label>Location: </label>
            <select>
                <option value=""></option>
                <option value="option1">Manastirski Livadi</option>
                <option value="option1">Lozenec</option>
                <option value="option1">Iztok</option>
                <option value="option1">Studentski Grad</option>
                <option value="option1">Mladost</option>
            </select>
            <br />
            <label htmlFor="price">Price: </label>
            <input type="number" id="price"></input>
            <select>
                <option value=""></option>
                <option value="option1">lv</option>
                <option value="option2">EUR</option>
            </select>
            <br />
            <label htmlFor="size">Size: </label>
            <input type="number" id="size"></input>
            <br />
            <label>Type of building: </label>
            <select>
                <option value=""></option>
                <option value="option1">brick</option>
                <option value="option1">EPK</option>
                <option value="option1">panel</option>
            </select>
        </div>
    )
}