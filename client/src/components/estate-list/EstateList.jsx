import { useEffect, useState } from "react"

import { toast } from "react-toastify";

import * as estateService from '../../services/estateService';

import EstateItem from "../estate-item/EstateItem";

export default function EstateList() {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        try {
            estateService.getAll()
                .then(data => setEstates(data));
        } catch (err) {
            toast.error('An error occurred: ' + err.message);
        }
    }, []);

    return (
        <>
            {estates.map(estate =>
                <EstateItem
                    key={estate._id}
                    {...estate}
                />)}
        </>
    );
};