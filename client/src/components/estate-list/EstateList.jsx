import { useEffect, useState } from "react"

import * as estateService from '../../services/estateService';

import EstateItem from "../estate-item/EstateItem";

export default function EstateList() {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        estateService.getAll()
            .then(data => setEstates(data));
    }, []);
    console.log(estates);

    return (
        <>
            {estates.map(e =>
                <EstateItem
                    key={e._id}
                    {...e}
                />)}
        </>
    )
}