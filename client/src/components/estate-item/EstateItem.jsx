import Button from 'react-bootstrap/Button';
import styles from './EstateItem.module.css';

export default function EstateItem({
    name,
    price,
    currency,
    location,
    img,
    description
}) {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div>
                    <h4 className={styles.important}>{name}</h4>
                    <p><div className={styles.important}>Location: </div> {location}</p>
                    <p><div className={styles.important}>Price: </div> {price}  {currency === 'Euro' ? '€' : 'lv'}</p>
                    <p><div className={styles.important}>Description: </div> {description}</p>
                    <Button variant="primary" className={styles.button}>Details</Button>
                    <Button variant="danger">Delete</Button>
                </div>
                <div ><img src={img} alt={name} className={styles.image} /></div>
            </div>
            <hr />
        </div>
    );
};