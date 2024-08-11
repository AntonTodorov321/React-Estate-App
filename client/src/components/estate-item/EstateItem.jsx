import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import styles from './EstateItem.module.css';
import { getCurrencySymbol } from '../../utils/currencyUtils.js';
import { AuthContext } from '../../contexts/authContext.jsx';

export default function EstateItem({
    _id,
    typeOfEstate,
    price,
    currency,
    location,
    mainImg,
    description,
}) {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div>
                    <h4 className={styles.important}>Rent {typeOfEstate} apartment</h4>
                    <p><span className={styles.important}>Location: </span> {location}</p>
                    <p><span className={styles.important}>Price: </span> {price} {getCurrencySymbol(currency)}</p>
                    <p><span className={styles.important}>Description: </span> {description}</p>
                    {isAuthenticated &&
                        <Button as={Link} to={`/estates/${_id}`} variant="primary" className={styles.button}>Details</Button>
                    }

                </div>
                <div ><img src={mainImg} alt={typeOfEstate} className={styles.image} /></div>
            </div>
            <hr />
        </div>
    );
};