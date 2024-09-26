import { Link, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const openDetails = () => {
        navigate(`/estates/${_id}`);
    };

    return (
        <Card className={styles.card}>
            <div className={styles.imgWrapper}>
                {mainImg &&
                    <Card.Img
                        src={mainImg}
                        alt={typeOfEstate}
                        className={styles.img}
                        onClick={openDetails}
                    />
                }

                {!mainImg &&
                    <Card.Img
                        src='https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg'
                        className={styles.img}
                        onClick={openDetails}
                    />
                }

                <div className={styles.moreInfo} onClick={openDetails}>
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