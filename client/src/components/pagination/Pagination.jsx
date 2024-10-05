import { useState } from "react";
import { Link } from "react-router-dom";

import * as estateService from '../../services/estateService';

export default function Pagination({
    paginate,
    currentPage
}) {
    const [estateCount, setEstateCount] = useState(0);

    estateService.getEstatesCount().then(setEstateCount);
    const totalPages = Math.ceil(estateCount / 3);

    return (
        <div className="pagination">
            <Link
                to={`?page=${currentPage - 1}`}
                onClick={() => paginate(currentPage - 1)}
            >
                Previous
            </Link>

            {Array.from({ length: totalPages }, (_, index) => (
                <Link
                    key={index}
                    to={`?page=${index + 1}`}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </Link>
            ))}

            <Link
                to={`?page=${currentPage + 1}`}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Link>
        </div>
    );
};