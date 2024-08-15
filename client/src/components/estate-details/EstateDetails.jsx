import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import { getCurrencySymbol } from '../../utils/currencyUtils.js';
import { AuthContext } from "../../contexts/authContext.jsx";
import { Path } from "../../paths.js";
import styles from './EstateDetails.module.css';
import * as estateService from '../../services/estateService.js';
import * as commentService from '../../services/commentService.js';

import ImageCarousel from "../carousel/ImageCarousel.jsx";
import Map from "../map/Map.jsx";
import AddComment from "../add-comment/AddComment.jsx";
import CommnetItem from "../../comment-item/CommentItem.jsx";

export default function EstateDetails() {
    const [estate, setEstate] = useState({ allImg: [] });
    const [comments, setComment] = useState([]);
    const { estateId } = useParams();
    const { userId, username } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        estateService.getDetails(estateId)
            .then(setEstate);

        commentService.getCurrent(estateId)
            .then(setComment);
    }, [estateId]);

    let currencySymbol = getCurrencySymbol(estate.currency);

    const deleteButtonClickHandler = async () => {
        const result = confirm(`Are you sure you want to delete ${estate.typeOfEstate} apartment in ${estate.location}?`)

        if (result) {
            try {
                await estateService.remove(estateId);

                navigate(Path.AllEstates);
            } catch (err) {
                toast.error('An error occurred: ' + err.message);
            }
        };
    };

    const addComment = (newComment) => {
        setComment(state => [...state, { ...newComment, owner: { username } }]);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div>
                            <h2>Rent {estate.typeOfEstate} apartment</h2>
                            <h4>Sofia, {estate.location}</h4>
                        </div>

                        <div className={styles.captionDescription}>
                            <div className={styles.importantRed}>{estate.price} {currencySymbol}</div>
                            <div>({(estate.price / estate.size).toFixed(2)} {currencySymbol}/m<sup>2</sup>)</div>
                        </div>
                    </div>
                    <ImageCarousel allImg={estate.allImg} />
                    <h3>Rent {estate.typeOfEstate} apartment</h3>
                    <div className={styles.textBold}>Sofia, {estate.location}</div>
                    <div className={styles.importantRed}> {estate.price}({Math.trunc(estate.price / estate.size)} {currencySymbol}/m<sup>2</sup>)</div>
                    <div>
                        <span className={styles.textBold}>Size:</span> {estate.size}m<sup>2</sup>&nbsp; | &nbsp;
                        <span className={styles.textBold}>Floor:</span> {estate.floor}-th from {estate.totalFloors} &nbsp; | &nbsp;
                        <span className={styles.textBold}>Heating:</span> {estate.heating}
                    </div>
                    <div><span className={styles.textBold}>Type of building:</span> {estate.typeOfBuilding}</div>
                    <div><span className={styles.textBold}>Description:</span> {estate.description}</div>
                    <div><span className={styles.textBold}>Contacts:</span> {estate.contacts}</div>

                    <div className={styles.edit}>
                        {estate._ownerId === userId &&
                            <>
                                <Link to={`/estates/edit/${estateId}`} className={styles.editButton}>Edit</Link>
                                <button onClick={deleteButtonClickHandler} className={styles.deleteButton}>Delete</button>
                            </>
                        }
                    </div>

                    {comments.length > 0 && (
                        <>
                            <h3 className={styles.title}>Comments:</h3>

                            {comments.map(comment => (
                                <CommnetItem key={comment._id} {...comment} />
                            ))}
                        </>
                    )}
                </div>
            </div>

            <AddComment
                estateId={estateId}
                addComment={addComment}
            />

            <Map />
        </>
    );
};