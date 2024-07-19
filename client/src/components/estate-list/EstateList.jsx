const baseUrl = "http://localhost:3030/data/estates";

import { useEffect, useState } from "react"
import EstateItem from "../estate-item/EstateItem";

export const EstateList = () => {
    const [estate, setEstates] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setEstates(data);
            });
    }, []);

    console.log(estate);

    return (
        <>
            {estate.map(e =>
                <EstateItem
                    key={e._id}
                    {...e}
                />)}
        </>
    )
}