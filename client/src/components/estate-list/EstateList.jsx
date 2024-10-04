import { useEffect, useState } from "react"

import { toast } from "react-toastify";

import * as estateService from '../../services/estateService';

import EstateItem from "../estate-item/EstateItem";
import Pagination from "../pagination/Pagination";

export default function EstateList() {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        try {
            estateService.getAll()
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
    }, []);

    return (
        <>
            {estates.map(estate =>
                <EstateItem Item
                    key={estate._id}
                    {...estate}
                />)}

            <Pagination />
        </>
    );
};