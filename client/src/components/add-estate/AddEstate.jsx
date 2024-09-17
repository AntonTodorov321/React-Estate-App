import { useNavigate } from "react-router-dom";

import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import * as estateService from '../../services/estateService';
import { FORM_KEYS } from '../../utils/add-estate/formKeys';
import { formInitialState } from '../../utils/add-estate/formInitialState';
import { Path } from "../../paths";
import styles from '../css/AddOrEditEstate.module.css';

import AddImage from "../add-image/AddImage";
import { editOrAddEstateSchema } from "../../schemas";

export default function AddEstate() {
    const submitHandler = async (values) => {
        try {
            await estateService.create({
                ...values,
                mainImg: values.allImg[0]
            });

            navigate(Path.AllEstates);
        } catch (err) {

            toast.error('An error occurred: ' + err.message);
        }
    };

    const navigate = useNavigate();

    const { values, errors, touched,
        handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
            initialValues: formInitialState,
            validationSchema: editOrAddEstateSchema,
            onSubmit: submitHandler
        });

    const removeUrlFromList = (indexToRemove) => {
        setFieldValue('allImg', values.allImg.filter((_, index) => index !== indexToRemove));
    };

    const handleAddUrlToList = (newUrl) => {
        setFieldValue('allImg', [...values.allImg, newUrl]);
    };

    return (
        <div className={styles.container}>
            <form className={styles.textContainer} onSubmit={handleSubmit}>

                <div className={styles.firstRow}>
                    <div className={styles.containerInput}>
                        <label className={styles.text}>Type of estate</label>

                        <select
                            onChange={handleChange}
                            value={values.typeOfEstate}
                            className={`${styles.selectOption} ${styles.inputSize} 
                            ${errors.typeOfEstate && touched.typeOfEstate ? styles.inputError : ''}`}
                            name={FORM_KEYS.typeOfEstate}
                            onBlur={handleBlur}
                        >
                            <option value=""></option>
                            <option value="one-bedroom">One-bedroom</option>
                            <option value="maisonette">Maisonette</option>
                            <option value="two-bedroom">Two-bedroom</option>
                        </select>
                        {errors.typeOfEstate && touched.typeOfEstate &&
                            <p className={styles.errorMessage}>{errors.typeOfEstate}</p>}
                    </div>
                </div>

                <div className={styles.firstRow}>
                    <div className={styles.containerInput}>
                        <label className={styles.text}>Location</label>

                        <select
                            value={values.location}
                            onChange={handleChange}
                            className={`${styles.selectOption} ${styles.inputSize} 
                             ${errors.location && touched.location ? styles.inputError : ''}`}
                            name={FORM_KEYS.location}
                            onBlur={handleBlur}
                        >
                            <option value=""></option>
                            <option value="Manastirski Livadi">Manastirski Livadi</option>
                            <option value="Lozenec">Lozenec</option>
                            <option value="Iztok">Iztok</option>
                            <option value="Studentski Grad">Studentski Grad</option>
                            <option value="Mladost">Mladost</option>
                        </select>
                        {errors.location && touched.location &&
                            <p className={styles.errorMessage}>{errors.location}</p>}
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="price" className={styles.text}>Price</label>
                        <input
                            type="number"
                            value={values.price}
                            onChange={handleChange}
                            name={FORM_KEYS.price}
                            id={FORM_KEYS.price}
                            className={`${styles.selectOption} ${styles.inputSize}
                            ${errors.price && touched.price ? styles.inputError : ''}`}
                            onBlur={handleBlur}
                        />
                        {errors.price && touched.price &&
                            <p className={styles.errorMessage}>{errors.price}</p>}
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="currency" className={styles.text}>Currency</label>

                        <select
                            onChange={handleChange}
                            value={values.currency}
                            className={`${styles.selectOption} ${styles.inputSize}
                            ${errors.currency && touched.currency ? styles.inputError : ''}`}
                            name={FORM_KEYS.currency}
                            onBlur={handleBlur}
                        >
                            <option value=""></option>
                            <option value="lv">lv</option>
                            <option value="EUR">EUR</option>
                        </select>
                        {errors.currency && touched.currency &&
                            <p className={styles.errorMessage}>{errors.currency}</p>}
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="size" className={styles.text}>Size</label>
                        <input
                            type="number"
                            onChange={handleChange}
                            value={values.size}
                            name={FORM_KEYS.size}
                            id={FORM_KEYS.size}
                            className={`${styles.selectOption} ${styles.inputSize}
                            ${errors.size && touched.size ? styles.inputError : ''}`}
                            onBlur={handleBlur}
                        />
                        {errors.size && touched.size &&
                            <p className={styles.errorMessage}>{errors.size}</p>}
                    </div>
                </div>

                <div className={styles.thirdRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="floor" className={styles.text}>Floor</label>
                        <input
                            type="number"
                            onChange={handleChange}
                            value={values.floor}
                            name={FORM_KEYS.floor}
                            id={FORM_KEYS.floor}
                            className={`${styles.selectOption}
                        ${errors.floor && touched.floor ? styles.inputError : ''}`}
                            onBlur={handleBlur}
                        />
                        {errors.floor && touched.floor &&
                            <p className={`${styles.errorMessage}`}>{errors.floor}</p>}
                    </div>
                </div>

                <div className={styles.thirdRow}>

                    <div className={styles.containerInput}>
                        <label className={styles.text}>Total floors</label>
                        <input
                            type="number"
                            onChange={handleChange}
                            value={values.totalFloors}
                            name={FORM_KEYS.totalFloors}
                            className={`${styles.selectOption}
                        ${errors.totalFloors && touched.totalFloors ? styles.inputError : ''}`}
                            onBlur={handleBlur}
                        />
                        {errors.totalFloors && touched.totalFloors &&
                            <p className={styles.errorMessage}>{errors.totalFloors}</p>}
                    </div>
                </div>


                <div className={styles.thirdRow}>

                    <div className={styles.containerInput}>
                        <label className={styles.text}>Heating</label>

                        <select
                            value={values.heating}
                            onChange={handleChange}
                            className={`${styles.selectOption}
                        ${errors.heating && touched.heating ? styles.inputError : ''}`}
                            name={FORM_KEYS.heating}
                            onBlur={handleBlur}
                        >
                            <option value=""></option>
                            <option value="GAS">GAS</option>
                            <option value="Air conditioner">Air conditioner</option>
                            <option value="TPP">TPP</option>
                        </select>
                        {errors.heating && touched.heating &&
                            <p className={styles.errorMessage}>{errors.heating}</p>}
                    </div>
                </div>


                <div className={styles.thirdRow}>

                    <div className={styles.containerInput}>
                        <label className={styles.text}>Type of building</label>

                        <select
                            onChange={handleChange}
                            value={values.typeOfBuilding}
                            className={`${styles.selectOption}
                        ${errors.typeOfBuilding && touched.typeOfBuilding ? styles.inputError : ''}`}
                            name={FORM_KEYS.typeOfBuilding}
                            onBlur={handleBlur}
                        >
                            <option value=""></option>
                            <option value="brick">brick</option>
                            <option value="EPK">EPK</option>
                            <option value="panel">panel</option>
                        </select>
                        {errors.typeOfBuilding && touched.typeOfBuilding &&
                            <p className={styles.errorMessage}>{errors.typeOfBuilding}</p>}
                    </div>
                </div>


                <div className={styles.fullRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="contacts" className={styles.text}>Contacts</label>
                        <input
                            type="text"
                            value={values.contacts}
                            onChange={handleChange}
                            name={FORM_KEYS.contacts}
                            id={FORM_KEYS.contacts}
                            className={`${styles.inputSizeContacts} ${styles.selectOption}
                            ${errors.contacts && touched.contacts ? styles.inputError : ''}`}
                            onBlur={handleBlur}
                        />
                        {errors.contacts && touched.contacts &&
                            <p className={styles.errorMessage}>{errors.contacts}</p>}
                    </div>
                </div>

                <div className={styles.fullRow}>
                    <div className={styles.containerInput}>
                        <label htmlFor="description" className={styles.text}>Description</label>
                        <textarea
                            rows="4"
                            onChange={handleChange}
                            value={values.description}
                            className={`${styles.textareaSize}
                            ${errors.description && touched.description ? styles.inputError : ''}`}
                            name={FORM_KEYS.description}
                            id={FORM_KEYS.description}
                            onBlur={handleBlur}
                        />
                        {errors.description && touched.description &&
                            <p className={styles.errorMessage}>{errors.description}</p>}
                    </div>
                </div>

                <AddImage
                    imageUrls={values.allImg}
                    removeUrlFromList={removeUrlFromList}
                    handleAddUrlToList={handleAddUrlToList}
                />

                <div className={styles.fullRowSubmit}>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </div>
            </form >
        </div >
    );
};