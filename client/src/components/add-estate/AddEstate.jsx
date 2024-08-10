import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as estateService from '../../services/estateService';
import { FORM_KEYS } from '../../utils/add-estate/formKeys';
import { formInitialState } from '../../utils/add-estate/formInitialState';
import { Path } from "../../paths";
import styles from '../css/AddOrEditEstate.module.css';

import AddImage from "../add-image/AddImage";

export default function AddEstate() {
    const [formValues, setFormValues] = useState(formInitialState);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async () => {
        await estateService.create({
            ...formValues,
            mainImg: formValues.allImg[0]
        });

        navigate(Path.AllEstates);
    };

    const removeUrlFromList = (indexToRemove) => {
        setFormValues(state => ({
            ...state,
            allImg: state.allImg.filter((_, index) => index !== indexToRemove)
        }));
    };

    const handleAddUrlToList = (currentUrl) => {
        setFormValues({
            ...formValues,
            allImg: [...formValues.allImg, currentUrl]
        });
    };

    return (
        <div className={styles.container}>
            <form className={styles.textContainer}>

                <div className={styles.firstRow}>
                    <div className={styles.containerInput}>
                        <label className={styles.text}>Type of estate</label>
                        <select className={`${styles.selectOption} ${styles.inputSize}`} onChange={changeHandler} name={FORM_KEYS.typeOfEstate}>
                            <option value=""></option>
                            <option value="one-bedroom">One-bedroom</option>
                            <option value="maisonette">Maisonette</option>
                            <option value="two-bedroom">Two-bedroom</option>
                        </select>
                    </div>
                </div>

                <div className={styles.firstRow}>
                    <div className={styles.containerInput}>
                        <label className={styles.text}>Location</label>
                        <select onChange={changeHandler} name={FORM_KEYS.location} className={`${styles.selectOption} ${styles.inputSize}`}>
                            <option value=""></option>
                            <option value="Manastirski Livadi">Manastirski Livadi</option>
                            <option value="Lozenec">Lozenec</option>
                            <option value="Iztok">Iztok</option>
                            <option value="Studentski Grad">Studentski Grad</option>
                            <option value="Mladost">Mladost</option>
                        </select>
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="price" className={styles.text}>Price</label>
                        <input
                            type="number"
                            name={FORM_KEYS.price}
                            id={FORM_KEYS.price}
                            value={formValues.price}
                            onChange={changeHandler}
                            className={`${styles.selectOption} ${styles.inputSize}`}
                        />
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="currency" className={styles.text}>Currency</label>
                        <select onChange={changeHandler} name={FORM_KEYS.currency} className={`${styles.selectOption} ${styles.inputSize}`}>
                            <option value=""></option>
                            <option value="lv">lv</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="size" className={styles.text}>Size</label>
                        <input
                            type="number"
                            name={FORM_KEYS.size}
                            id={FORM_KEYS.size}
                            value={formValues.size}
                            onChange={changeHandler}
                            className={`${styles.selectOption} ${styles.inputSize}`}
                        />
                    </div>
                </div>

                <div className={styles.containerInput}>
                    <label htmlFor="floor" className={styles.text}>Floor</label>
                    <input
                        type="number"
                        name={FORM_KEYS.floor}
                        id={FORM_KEYS.floor}
                        value={formValues.floor}
                        onChange={changeHandler}
                        className={styles.selectOption}
                    />
                </div>

                <div className={styles.containerInput}>
                    <label className={styles.text}>Total floors</label>
                    <input
                        type="number"
                        name={FORM_KEYS.totalFloors}
                        value={formValues.totalFloors}
                        onChange={changeHandler}
                        className={styles.selectOption}
                    />
                </div>

                <div className={styles.containerInput}>
                    <label className={styles.text}>Heating</label>
                    <select onChange={changeHandler} name={FORM_KEYS.heating} className={styles.selectOption}>
                        <option value=""></option>
                        <option value="GAS">GAS</option>
                        <option value="Air conditioner">Air conditioner</option>
                        <option value="TPP">TPP</option>
                    </select>
                </div>

                <div className={styles.containerInput}>
                    <label className={styles.text}>Type of building</label>
                    <select onChange={changeHandler} name={FORM_KEYS.typeOfBuilding} className={styles.selectOption}>
                        <option value=""></option>
                        <option value="brick">brick</option>
                        <option value="EPK">EPK</option>
                        <option value="panel">panel</option>
                    </select>
                </div>

                <div className={styles.fullRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="contacts" className={styles.text}>Contacts</label>
                        <input
                            type="text"
                            name={FORM_KEYS.contacts}
                            id={FORM_KEYS.contacts}
                            value={formValues.contacts}
                            onChange={changeHandler}
                            className={`${styles.inputSizeContacts} ${styles.selectOption}`}
                        />
                    </div>
                </div>

                <div className={styles.fullRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="description" className={styles.text}>Description</label>
                        <textarea
                            rows="4"
                            className={styles.textareaSize}
                            name={FORM_KEYS.description}
                            id={FORM_KEYS.description}
                            value={formValues.description}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <AddImage
                    imageUrls={formValues.allImg}
                    removeUrlFromList={removeUrlFromList}
                    handleAddUrlToList={handleAddUrlToList}
                />

                <div className={styles.fullRowSubmit}>
                    <button type="button" onClick={submitHandler} className={styles.submit}>Submit</button>
                </div>
            </form >
        </div >
    );
};