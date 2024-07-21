const baseUrl = 'http://localhost:3030/data/estates';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EstateDetails() {
    const { estateId } = useParams();
    const [estate, setEstate] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/${estateId}`)
            .then(res => res.json())
            .then(data => setEstate(data));
    }, [estateId]);

    console.log(estate);

    return (
        <div>
            <h2>{estate.name}</h2>
            <div>{estate.location}</div>
            <div>{estate.price}</div>
        </div>
    );
};