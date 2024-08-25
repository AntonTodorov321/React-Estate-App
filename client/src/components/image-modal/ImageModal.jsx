import { useEffect, useRef, useState } from 'react';

import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

import styles from '../css/Carousel.module.css';
import { getCurrencySymbol } from '../../utils/currencyUtils';
import { completeEstateName } from '../../utils/completeEstateName';
import { compoleteEstateLocation } from '../../utils/completeEstateLocation';

export default function ImageModal({
    isModalOpen,
    closeModal,
    selectedImageIndex,
    estate,
    allImg,
    handleImageChange,
}) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const fullScreenRef = useRef();

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullScreen(document.fullscreenElement === fullScreenRef.current);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    const openFullScreen = () => {
        fullScreenRef.current.requestFullscreen();
        setIsFullScreen(true);
    };

    const closeFullScreen = () => {
        document.exitFullscreen()
        setIsFullScreen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <p className={styles.price}>{estate.price} {getCurrencySymbol(estate.currency)}
                <span className={styles.caption}>{completeEstateName(estate.typeOfEstate)}, {compoleteEstateLocation(estate.location)}</span>
                <span className={styles.spacer}></span>
                <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            </p>
            <span>Size:</span> {estate.size}m<sup>2</sup>

            {estate.floor && (
                <>
                    &nbsp; | &nbsp; Floor: {estate.floor}-th from {estate.totalFloors}
                </>
            )}

            <div
                className={styles.container}
                ref={fullScreenRef}
                tabIndex='0'
            >
                <Carousel
                    autoPlay={false}
                    showThumbs={!isFullScreen}
                    infiniteLoop={true}
                    className={styles.carouselContainer}
                    selectedItem={selectedImageIndex}
                    showIndicators={false}
                    showStatus={false}
                    onChange={handleImageChange}
                >
                    {allImg.map((img, index) => (
                        <div
                            key={index}
                            className={styles.slide}
                            onClick={openFullScreen}
                        >
                            <img src={img} className={styles.carouselImage} />
                        </div>
                    ))}
                </Carousel>

                <div className={styles.imageStatus}>
                    <FontAwesomeIcon icon={faImage} />
                    <p>{selectedImageIndex + 1}/{allImg.length}</p>
                </div>

                {!isFullScreen &&
                    <div className={styles.resize} onClick={openFullScreen}>
                        <FontAwesomeIcon icon={faMaximize} />
                    </div>
                }

                {isFullScreen &&
                    <div className={styles.resize} onClick={closeFullScreen}>
                        <FontAwesomeIcon icon={faMinimize} />
                    </div>
                }

            </div>
        </Modal>
    );
};