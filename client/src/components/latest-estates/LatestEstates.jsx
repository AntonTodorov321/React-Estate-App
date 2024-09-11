import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from './LatestEstates.module.css';

export default function LatestEstates({
    _id,    
    typeOfEstate,
    mainImg,
    description
}) {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={mainImg} alt={typeOfEstate} className={styles.img} />
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.textCenter}>Rent {typeOfEstate} apartment</Card.Title>
                <Card.Text className={styles.textCenter}>
                    {description}
                </Card.Text>
            </Card.Body>
                <div className={styles.textCenter}>
                    <Button as={Link} to={`/estates/${_id}`} variant="primary" className={styles.button}>Details</Button>
                </div>
        </Card>
    );
};