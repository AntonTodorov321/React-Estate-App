const baseUrl = "http://localhost:3030/data/estates";

import { useEffect, useState } from "react"
import EstateItem from "../estate-item/EstateItem";

export default function EstateList() {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                setEstates(data);
            });
    }, []);

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