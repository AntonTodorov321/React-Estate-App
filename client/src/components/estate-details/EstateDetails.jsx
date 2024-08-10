import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';

import { getCurrencySymbol } from '../../utils/currencyUtils.js';
import { AuthContext } from "../../contexts/authContext.jsx";
import styles from './EstateDetails.module.css';
import * as estateService from '../../services/estateService.js';

import ImageCarousel from "../carousel/ImageCarousel.jsx";

export default function EstateDetails() {
    const { estateId } = useParams();
    const [estate, setEstate] = useState({ allImg: [] });
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        estateService.getDetails(estateId)
            .then(data => setEstate(data));
    }, [estateId]);

    let currencySymbol = getCurrencySymbol(estate.currency);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>
                        <h2>Rent {estate.typeOfEstate} apartment</h2>
                        <h4>{estate.location}</h4>
                    </div>

                    <div className={styles.captionDescription}>
                        <div className={styles.importantRed}>{estate.price} {currencySymbol}</div>
                        <div>({(estate.price / estate.size).toFixed(2)} {currencySymbol}/m<sup>2</sup>)</div>
                    </div>
                </div>
                <ImageCarousel allImg={estate.allImg} />
                <h3>Rent {estate.typeOfEstate} apartment</h3>
                <div>{estate.location} ({Math.trunc(estate.price / estate.size)} {currencySymbol}/m<sup>2</sup>)</div>
                <div>Size: {estate.size}m<sup>2</sup>&nbsp; | &nbsp; Floor: {estate.floor}-th from {estate.totalFloors} &nbsp; | &nbsp; Heating: {estate.heating}</div>
                <div>Type of building: {estate.typeOfBuilding}</div>
                <div>Description: {estate.description}</div>
                <div>Contacts: {estate.contacts}</div>

                <div className={styles.edit}>
                    {estate._ownerId === userId &&
                        <but as={Link} to={`/estates/edit/${estateId}`} className={styles.editButton}>Edit</but>
                    }
                </div>
            </div>
        </div>
    );
};