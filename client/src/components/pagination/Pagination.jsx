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

    let startPage = Math.max(currentPage - 2, 1);
    let endPage = startPage + 4;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - 4, 1);
    };

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <div className={styles.pagination}>
            <Link
                to={`?page=${1}`}
                onClick={() => paginate(1)}
                className={`${styles.page} ${currentPage === 1 ? styles.disabled : ''}`}
            >
                &lt;&lt;
            </Link>

            <Link
                to={`?page=${currentPage - 1}`}
                onClick={() => paginate(currentPage - 1)}
                className={`${styles.page} ${currentPage === 1 ? styles.disabled : ''}`}
            >
                Previous
            </Link>

            {pageNumbers.map((page) => (
                <Link
                    key={page}
                    to={`?page=${page}`}
                    onClick={() => paginate(page)}
                    className={`${styles.page} ${currentPage === page ? styles.active : ''}`}
                >
                    {page}
                </Link>
            ))}

            <Link
                to={`?page=${currentPage + 1}`}
                onClick={() => paginate(currentPage + 1)}
                className={`${styles.page} ${currentPage === totalPages ? styles.disabled : ''}`}
            >
                Next
            </Link>

            <Link
                to={`?page=${totalPages}`}
                onClick={() => paginate(totalPages)}
                className={`${styles.page} ${currentPage === totalPages ? styles.disabled : ''}`}
            >
                &gt;&gt;
            </Link>
        </div>
    );
};