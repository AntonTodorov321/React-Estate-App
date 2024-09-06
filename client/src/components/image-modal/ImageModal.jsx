import { useEffect, useRef, useState } from 'react';

import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

import styles from './ImageModal.module.css';
import * as estateUtils from '../../utils/estateUtils';

export default function ImageModal({
    isModalOpen,
    closeModal,
    selectedImageIndex,
    estate,
    handleImageChange,
}) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const fullScreenRef = useRef();
    const [isPortrait, setIsPortrait] = useState([]);

    const handleImageLoad = (index, e) => {
        setIsPortrait(prevState => {
            const newState = [...prevState];
            newState[index] = e.target.naturalHeight > e.target.naturalWidth;
            return newState;
        });
    };

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
            <p className={styles.price}>{estate.price} {estateUtils.getCurrencySymbol(estate.currency)}
                <span className={styles.caption}>{estateUtils.completeEstateName(estate.typeOfEstate)}, {estateUtils.completeEstateLocation(estate.location)}</span>
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
                    showArrows={false}
                    onChange={handleImageChange}
                >
                    {estate.allImg.map((img, index) => (
                        <div
                            key={index}
                            className={styles.img}
                            onClick={openFullScreen}
                        >
                            <img
                                src={img}
                                onLoad={(e) => handleImageLoad(index, e)}
                                className={`${isPortrait[index] ? styles.portrait : styles.landscape}`}
                            />
                        </div>
                    ))}
                </Carousel>

                <div className={styles.imageStatus}>
                    <FontAwesomeIcon icon={faImage} />
                    <p style={{ margin: 0 }}>{selectedImageIndex + 1}/{estate.allImg.length}</p>
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