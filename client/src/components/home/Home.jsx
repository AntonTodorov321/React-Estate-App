import { useEffect, useState } from 'react';

import styles from './Home.module.css';
import * as estateService from '../../services/estateService';

import LatestEstates from '../latest-estates/LatestEstates';

export default function Home() {
    const [latestEstates, getLatestEstates] = useState([]);

    useEffect(() => {
        estateService.getLatest()
            .then(data => getLatestEstates(data));
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to Estate App</h1>
                <p className={styles.subtitle}>Find your dream home with ease.</p>
            </header>

            <section className={styles.featuredSection}>
                <h2 className={styles.sectionTitle}>Newest apartments</h2>
                <div className={styles.featuredProperties}>
                    {latestEstates.map(estate => <LatestEstates key={estate._id} {...estate} />)}
                </div>
            </section>
        </div>
    );
};