import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from './LatestEstates.module.css';
import { getCurrencySymbol } from '../../utils/estateUtils';

export default function LatestEstates({
    _id,
    typeOfEstate,
    mainImg,
    description,
    location,
    price,
    size,
    currency
}) {
    return (
        <Card className={styles.card}>
            <div className={styles.imgWrapper}>
                <Card.Img variant="top" src={mainImg} alt={typeOfEstate} className={styles.img} />
                <div className={styles.moreInfo}>
                    <p>Location: {location}</p>
                    <p>Price: {price} {getCurrencySymbol(currency)}</p>
                    <p>Size: {size} m<sup>2</sup></p>
                </div>
            </div>
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.textCenter}>Rent {typeOfEstate} apartment</Card.Title>
                <Card.Text className={`${styles.textCenter} ${styles.description}`}>
                    {description}
                </Card.Text>
            </Card.Body>
            <div className={styles.textCenter}>
                <Button as={Link} to={`/estates/${_id}`} variant="primary" className={styles.button}>Details</Button>
            </div>
        </Card>
    );
};