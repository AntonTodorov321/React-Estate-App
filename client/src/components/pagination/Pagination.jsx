import { useState } from "react";
import { Link } from "react-router-dom";

import * as estateService from '../../services/estateService';
import * as styles from './Pagination.module.css';

export default function Pagination({
    paginate,
    currentPage
}) {
    const [estateCount, setEstateCount] = useState(0);

    estateService.getEstatesCount().then(setEstateCount);
    const totalPages = Math.ceil(estateCount / 3);

    return (
        <div className={styles.pagination}>
            <Link
                to={`?page=${currentPage - 1}`}
                onClick={() => paginate(currentPage - 1)}
                className={`${styles.page} ${currentPage === 1 ? styles.disabled : ''}`}
            >
                Previous
            </Link>

            {Array.from({ length: totalPages }, (_, index) => (
                <Link
                    key={index}
                    to={`?page=${index + 1}`}
                    onClick={() => paginate(index + 1)}
                    className={`${styles.page} ${currentPage === index + 1 ? styles.active : ''}`}
                >
                    {index + 1}
                </Link>
            ))}

            <Link
                to={`?page=${currentPage + 1}`}
                onClick={() => paginate(currentPage + 1)}
                className={`${styles.page} ${currentPage === totalPages ? styles.disabled : ''}`}
            >
                Next
            </Link>
        </div>
    );
};