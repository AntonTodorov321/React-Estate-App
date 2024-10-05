import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as estateService from '../../services/estateService';

import EstateItem from "../estate-item/EstateItem";
import Pagination from "../pagination/Pagination";

export default function EstateList() {
    const [estates, setEstates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    let page = searchParams.get('page');
    page = page ? page : 1;

    const paginate = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        try {
            estateService.getAll(page)
                .then(data => setEstates(data));
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };

        const savedPosition = localStorage.getItem('scrollPosition');

        if (savedPosition) {
            setTimeout(() => {
                window.scrollTo(0, savedPosition);
            }, 30)
        };
    }, [page]);

    return (
        <>
            {estates.map(estate =>
                <EstateItem
                    key={estate._id}
                    {...estate}
                />)}

            <Pagination
                currentPage={currentPage}
                paginate={paginate}
            />
        </>
    );
};