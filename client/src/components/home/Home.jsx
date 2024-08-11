import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to Estate App</h1>
                <p className={styles.subtitle}>Find your dream home with ease.</p>
            </header>

            <section className={styles.featuredSection}>
                <h2 className={styles.sectionTitle}>Featured Properties</h2>
                <div className={styles.featuredProperties}>
                    <div className={styles.propertyCard}>
                        <img src="property1.jpg" alt="Property 1" className={styles.propertyImage} />
                        <h3 className={styles.propertyTitle}>Beautiful Villa</h3>
                        <p className={styles.propertyDescription}>A beautiful villa with stunning views and modern amenities.</p>
                        <Link to="/property/1" className={styles.detailsButton}>View Details</Link>
                    </div>
                    <div className={styles.propertyCard}>
                        <img src="property2.jpg" alt="Property 2" className={styles.propertyImage} />
                        <h3 className={styles.propertyTitle}>Modern Apartment</h3>
                        <p className={styles.propertyDescription}>A sleek apartment in the heart of the city with all the modern comforts.</p>
                        <Link to="/property/2" className={styles.detailsButton}>View Details</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};