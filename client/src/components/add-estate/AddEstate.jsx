import { useState } from "react";

import { FORM_KEYS } from '../../utils/add-estate/formKeys';
import { formInitialState } from '../../utils/add-estate/formInitialState';

import AddImage from "../add-image/AddImage";

export default function AddEstate() {
    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = () => {
        console.log(formValues);
    };

    return (
        <>
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name={FORM_KEYS.name}
                    id={FORM_KEYS.name}
                    value={formValues.name}
                    onChange={changeHandler}
                />
                <br />

                <label htmlFor="contacts">Contacts: </label>
                <input
                    type="text"
                    name={FORM_KEYS.contacts}
                    id={FORM_KEYS.contacts}
                    value={formValues.contacts}
                    onChange={changeHandler}
                />
                <br />

                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    name={FORM_KEYS.description}
                    id={FORM_KEYS.description}
                    value={formValues.description}
                    onChange={changeHandler}
                />
                <br />

                <label htmlFor="floor">Floor: </label>
                <input
                    type="number"
                    name={FORM_KEYS.floor}
                    id={FORM_KEYS.floor}
                    value={formValues.floor}
                    onChange={changeHandler}
                />

                <label>from: </label>
                <input
                    type="number"
                    name={FORM_KEYS.totalFloors}
                    value={formValues.totalFloors}
                    onChange={changeHandler}
                />
                <br />

                <label>Heating: </label>
                <select onChange={changeHandler} name={FORM_KEYS.heating}>
                    <option value=""></option>
                    <option value="GAS">GAS</option>
                    <option value="Air conditioner">Air conditioner</option>
                    <option value="TPP">TPP</option>
                </select>
                <br />

                <label>Location: </label>
                <select onChange={changeHandler} name={FORM_KEYS.location}>
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
                    name={FORM_KEYS.price}
                    id={FORM_KEYS.price}
                    value={formValues.price}
                    onChange={changeHandler}
                />
                <select onChange={changeHandler} name={FORM_KEYS.currency}>
                    <option value=""></option>
                    <option value="lv">lv</option>
                    <option value="EUR">EUR</option>
                </select>
                <br />

                <label htmlFor="size">Size: </label>
                <input
                    type="number"
                    name={FORM_KEYS.size}
                    id={FORM_KEYS.size}
                    value={formValues.size}
                    onChange={changeHandler}
                />
                <br />

                <label>Type of building: </label>
                <select onChange={changeHandler} name={FORM_KEYS.typeOfBuilding}>
                    <option value=""></option>
                    <option value="brick">brick</option>
                    <option value="EPK">EPK</option>
                    <option value="panel">panel</option>
                </select>
                <br />

                <AddImage />

                <button type="button" onClick={submitHandler}>Submit</button>
            </form>
        </>
    )
}