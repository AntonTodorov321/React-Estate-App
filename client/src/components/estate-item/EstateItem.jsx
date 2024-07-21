import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import styles from './EstateItem.module.css';
import {getCurrencySymbol} from '../../utils/currencyUtils.js';

export default function EstateItem({
    _id,
    name,
    price,
    currency,
    location,
    mainImg,
    description
}) {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div>
                    <h4 className={styles.important}>{name}</h4>
                    <p><span className={styles.important}>Location: </span> {location}</p>
                    <p><span className={styles.important}>Price: </span> {price} {getCurrencySymbol(currency)}</p>
                    <p><span className={styles.important}>Description: </span> {description}</p>
                    <Button as={Link} to={`/estates/${_id}`} variant="primary" className={styles.button}>Details</Button>
                    <Button variant="danger">Delete</Button>
                </div>
                <div ><img src={mainImg} alt={name} className={styles.image} /></div>
            </div>
            <hr />
        </div>
    );
};