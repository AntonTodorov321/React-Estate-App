import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

import { toast } from "react-toastify";

import * as styles from './EstateList.module.css';
import * as estateService from '../../services/estateService';

import EstateItem from "../estate-item/EstateItem";
import Pagination from "../pagination/Pagination";
import Filter from "../filter/Filter";
import NoResults from "../no-results/NoResults";

export default function EstateList() {
    const location = useLocation();

    const [estatesCount, setEstateCount] = useState(0);
    const [estates, setEstates] = useState([]);
    const [currentPage, setCurrentPage] = useState(() => {
        const searchParams = new URLSearchParams(location.search);
        let page = searchParams.get('page');
        return Number(page) > 0 ? Number(page) : 1;
    });

    const [range, setRange] = useState([0, 2500]);
    const [filter, setFilter] = useState({
        currency: 'EUR'
    });

    const searchParams = new URLSearchParams(location.search);
    let page = searchParams.get('page');
    page = page ? page : 1;

    useEffect(() => {
        const savedPosition = localStorage.getItem('scrollPosition');

        if (savedPosition) {
            setTimeout(() => {
                window.scrollTo(0, savedPosition);
            }, 30)
        };

        try {
            estateService.getEstates(range, filter)
                .then(data => setEstates(data));

            estateService.getEstatesCount(range, filter)
                .then(setEstateCount);
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        };
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const handleSliderChange = (event, newValue) => {
        setRange(newValue);
    };

    const handleChange = (e) => {
        if (e.target.dataset.name) {
            const selectedCurrency = e.target.textContent;

            setFilter(state => ({
                ...state,
                [e.target.dataset.name]: selectedCurrency
            }));
            setRange(selectedCurrency === 'EUR' ? [0, 2500] : [0, 5000]);
        } else {
            setFilter(state => ({
                ...state,
                [e.target.name]: e.target.value
            }));
        };
    };

    const search = () => {
        estateService.getEstates(range, filter)
            .then(data => setEstates(data));

        estateService.getEstatesCount(range, filter)
            .then(setEstateCount);

        setCurrentPage(1);
    };

    const paginate = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className={styles.content}>
                <Filter
                    range={range}
                    handleSliderChange={handleSliderChange}
                    filter={filter}
                    handleChange={handleChange}
                    search={search}
                />

                <div>
                    {estates.slice((currentPage - 1) * 3, (currentPage - 1) * 3 + 3).
                        map(estate =>
                            <EstateItem
                                key={estate._id}
                                {...estate}
                            />)}
                    {estatesCount === 0 && <NoResults />}
                </div>
            </div>

            {estatesCount > 0 &&
                <Pagination
                    currentPage={currentPage}
                    paginate={paginate}
                    estateCount={estatesCount}
                />
            }
        </>
    );
};