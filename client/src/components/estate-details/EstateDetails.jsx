const baseUrl = 'http://localhost:3030/data/estates';

import { getCurrencySymbol } from '../../utils/currencyUtils.js';

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

    let currencySymbol = getCurrencySymbol(estate.currency);

    return (
        <div>
            <h2>{estate.name}</h2>
            <div>{estate.location}</div>
            <div>{estate.price} {currencySymbol}</div>
            <div>({(estate.price / estate.size).toFixed(2)} {currencySymbol}/m<sup>2</sup>)</div>
            <h3>{estate.name}</h3>
            <div>{estate.location} ({Math.trunc(estate.price / estate.size)} {currencySymbol}/m<sup>2</sup>)</div>
            <div>Size: {estate.size}m<sup>2</sup>&nbsp; | &nbsp; Floor: {estate.floor}-th from {estate.totalFloors} &nbsp; | &nbsp; Heating: {estate.heating}</div>
            <div>Type of building: {estate.typeOfBuilding}</div>
            <div>Description: {estate.description}</div>
            <div>Contacts: {estate.contacts}</div>
        </div>
    );
};