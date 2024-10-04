import { useEffect, useState } from "react";

import * as estateService from '../../services/estateService';

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [estateCount, setEstateCount] = useState(0);

    estateService.getEstatesCount().then(setEstateCount);
    const totalPages = Math.ceil(estateCount / 3);

    const paginate = (pageNumber) => setCurrentPage(pageNumber); 

    return (
        <div className="pagination">
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};