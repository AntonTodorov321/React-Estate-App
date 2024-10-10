import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import * as estateUtil from '../../utils/estateUtils.js';
import * as estateService from '../../services/estateService.js';
import * as callService from '../../services/callService.js';
import { AuthContext } from "../../contexts/authContext.jsx";
import { Path } from "../../paths.js";
import styles from './EstateDetails.module.css';

import ImageCarousel from "../image-carousel/ImageCarousel.jsx";
import Map from "../map/Map.jsx";
import CallItem from "../comment-item/CallItem.jsx";

export default function EstateDetails() {
    const [estate, setEstate] = useState({ allImg: [] });
    const [views, setViews] = useState(0);
    const [calls, setCalls] = useState([]);
    const focusDivRef = useRef();
    const carouselRef = useRef();
    const { estateId } = useParams();
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        estateService.getDetails(estateId)
            .then(setEstate);

        estateService.getViews(estateId)
            .then(setViews)

        callService.getAll(estateId)
            .then(setCalls);

        window.scrollTo(0, 0);
        focusDivRef.current.focus({ preventScroll: true });
    }, [estateId]);

    let currencySymbol = estateUtil.getCurrencySymbol(estate.currency);

    const deleteButtonClickHandler = async () => {
        const result = confirm(`Are you sure you want to delete ${estate.typeOfEstate} apartment in ${estate.location}?`)

        if (result) {
            try {
                await estateService.remove(estateId);

                navigate(Path.AllEstates);
            } catch (err) {
                toast.error('An error occurred: ' + err.message);
            };
        };
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            carouselRef.current.decrement();
        } else if (e.key === 'ArrowRight') {
            carouselRef.current.increment();
        };
    };

    const [formattedDate, formattedTime] = estateUtil.getFormattedDate(estate._createdOn);

    return (
        <div
            ref={focusDivRef}
            onKeyDown={handleKeyDown}
            tabIndex='-1'
            className={styles.container}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <div>
                        <h2>{estateUtil.completeEstateName(estate.typeOfEstate)}</h2>
                        <h4>{estateUtil.completeEstateLocation(estate.location)}</h4>
                    </div>

                    <div className={styles.captionDescription}>
                        <div className={styles.importantRed}>{estate.price} {currencySymbol}</div>
                        <div>({(estate.price / estate.size).toFixed(2)} {currencySymbol}/m<sup>2</sup>)</div>
                    </div>
                </div>

                <ImageCarousel
                    allImg={estate.allImg}
                    carouselRef={carouselRef}
                    estate={estate}
                />

                <h3 className={styles.caption}>{estateUtil.completeEstateName(estate.typeOfEstate)}</h3>
                <div className={styles.textBold}>{estateUtil.completeEstateLocation(estate.location)}</div>

                <div className={styles.additionalInfo}>
                    <div className={styles.importantRed}> {estate.price}({Math.trunc(estate.price / estate.size)} {currencySymbol}/m<sup>2</sup>)</div>
                    <div className={styles.smallerText}>
                        <div>Created on {formattedDate} at {formattedTime}</div>
                        <div >The ad has been visited <span className={styles.bold}>{views}</span> time{views === 1 ? "" : "s"}</div>
                    </div>
                </div>

                <div>
                    <span className={styles.textBold}>Size:</span> {estate.size}m<sup>2</sup>

                    {estate.floor && (
                        <>
                            <span className={styles.textBold}> &nbsp; | &nbsp; Floor:</span>
                            {estate.floor}-th from {estate.totalFloors} &nbsp; | &nbsp;
                        </>
                    )}

                    {estate.heating && (
                        <>
                            <span className={styles.textBold}>Heating:</span> {estate.heating}
                        </>
                    )}
                </div>

                {estate.typeOfBuilding && (
                    <div>
                        <span className={styles.textBold}>Type of building:</span> {estate.typeOfBuilding}
                    </div>
                )}

                {estate.description && (
                    <div>
                        <span className={styles.textBold}>Description:</span> {estate.description}
                    </div>
                )}

                <div><span className={styles.textBold}>Contacts:</span> {estate.contacts}</div>

                <div className={styles.edit}>
                    {estate._ownerId === userId &&
                        <>
                            <Link to={`/estates/edit/${estateId}`} className={styles.editButton}>Edit</Link>
                            <button onClick={deleteButtonClickHandler} className={styles.deleteButton}>Delete</button>
                        </>
                    }
                </div>

                {calls.length > 0 && (
                    <>
                        <h3 className={styles.title}>Calls:</h3>

                        {calls.map(call => (
                            <CallItem key={call._id} {...call} />
                        ))}
                    </>
                )}
            </div>

            <Map />
        </div>
    );
};