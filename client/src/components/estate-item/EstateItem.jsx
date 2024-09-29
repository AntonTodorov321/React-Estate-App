import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import * as callService from '../../services/callService.js';
import * as estateUtils from '../../utils/estateUtils.js';
import styles from './EstateItem.module.css';

import CallModal from '../call-modal/CallModal.jsx';

export default function EstateItem({
    _id,
    typeOfEstate,
    price,
    currency,
    location,
    mainImg,
    description,
    contacts,
    _createdOn,
    owner
}) {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lastCall, setLastCall] = useState([]);

    useEffect(() => {
        callService.getLast(_id)
            .then(setLastCall);

        if (isModalOpen) {
            window.addEventListener('keydown', handleKeyDown);
        };

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen]);

    let containerColorStyle = styles.uncalled;

    if (lastCall[0]) {
        const callStstus = lastCall[0].call.callStatus;

        if (callStstus === 'Picked up') {
            containerColorStyle = styles.pickedUp;
        } else if (callStstus === 'Didnt answer') {
            containerColorStyle = styles.didntAnswer;
        } else if (callStstus === 'Wrong number') {
            containerColorStyle = styles.wrongNumber;
        };
    };

    const openDetails = () => {
        localStorage.setItem('scrollPosition', window.scrollY);
        navigate(`/estates/${_id}`);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        };
    };

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        };
    };

    return (
        <>
            <div className={styles.content}>
                <div className={`${styles.container} ${containerColorStyle}`}>
                    <div>
                        <h4 className={`${styles.important} ${styles.heading}`} onClick={openDetails}>
                            {estateUtils.completeEstateName(typeOfEstate)}
                        </h4>
                        <p><span className={styles.important}>Location: </span>{estateUtils.completeEstateLocation(location)}</p>
                        <p><span className={styles.important}>Price: </span> {price} {estateUtils.getCurrencySymbol(currency)}</p>
                        {description &&
                            <p className={styles.description}>
                                <span className={styles.important}>Description:</span>
                                {description}
                            </p>}
                    </div>

                    {mainImg &&
                        <div onClick={openDetails}>
                            <img src={mainImg} alt={typeOfEstate} className={styles.image} />
                        </div>
                    }

                    {!mainImg &&
                        <div onClick={openDetails}>
                            <img src='https://res.cloudinary.com/heyset/image/upload/v1689582418/buukmenow-folder/no-image-icon-0.jpg' className={styles.image} />
                        </div>
                    }

                    <div className={styles.call} onClick={openModal}>
                        <span className={styles.callText}>Call
                            <FontAwesomeIcon icon={faPhone} className={styles.phone} />
                        </span>
                    </div>
                </div>
                <hr />
            </div>

            {isModalOpen &&
                <CallModal
                    contacts={contacts}
                    username={owner.username}
                    createdOn={_createdOn}
                    _id={_id}
                    closeModal={closeModal}
                    handleBackgroundClick={handleBackgroundClick}
                />
            }
        </>
    );
};