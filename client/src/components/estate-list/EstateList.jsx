import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as styles from './EstateList.module.css';
import * as estateService from '../../services/estateService';

import EstateItem from "../estate-item/EstateItem";
import Pagination from "../pagination/Pagination";
import Filter from "../filter/Filter";

export default function EstateList() {
    const location = useLocation();

    const [estates, setEstates] = useState([]);
    const [currentPage, setCurrentPage] = useState(() => {
        const searchParams = new URLSearchParams(location.search);
        let page = searchParams.get('page');
        return Number(page) > 0 ? Number(page) : 1;
    });

    const searchParams = new URLSearchParams(location.search);
    let page = searchParams.get('page');
    page = page ? page : 1;

    const paginate = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const savedPosition = localStorage.getItem('scrollPosition');

        if (savedPosition) {
            setTimeout(() => {
                window.scrollTo(0, savedPosition);
            }, 30)
        };
    }, [])

    useEffect(() => {
        try {
            estateService.getAll(page)
                .then(data => setEstates(data));
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };

        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            <div className={styles.content}>
                <Filter />
                <div >
                    {estates.map(estate =>
                        <EstateItem
                            key={estate._id}
                            {...estate}
                        />)}
                </div>
            </div>
            
            <Pagination
                currentPage={currentPage}
                paginate={paginate}
            />
        </>
    );
};