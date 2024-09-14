import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import * as estateUtil from '../../utils/estateUtils.js';
import styles from './EstateItem.module.css';
import * as estateUtils from '../../utils/estateUtils.js';
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
                    <h4 className={styles.important}>{estateUtil.completeEstateName(typeOfEstate)}</h4>
                    <p><span className={styles.important}>Location: </span>{estateUtil.completeEstateLocation(location)}</p>
                    <p><span className={styles.important}>Price: </span> {price} {estateUtils.getCurrencySymbol(currency)}</p>
                    {description &&
                        <p className={styles.description}>
                            <span className={styles.important}>Description:</span>
                            {description}
                        </p>}
                        
                    {isAuthenticated &&
                        <Button as={Link} to={`/estates/${_id}`} variant="primary" className={styles.button}>Details</Button>
                    }
                </div>

                <div>
                    <img src={mainImg} alt={typeOfEstate} className={styles.image} />
                </div>

                <div className={styles.call}>
                    <span className={styles.callText}>Call
                        <FontAwesomeIcon icon={faPhone} className={styles.phone} />
                    </span>
                </div>
            </div>
            <hr />
        </div>
    );
};