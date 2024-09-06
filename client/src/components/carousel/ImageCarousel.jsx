import { useEffect, useRef, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './ImageCarousel.module.css';

import ImageModal from '../image-modal/ImageModal'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel({
    allImg,
    carouselRef,
    estate
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isPortrait, setIsPortrait] = useState([]);

    const handleImageLoad = (index, e) => {
        setIsPortrait(prevState => {
            const newState = [...prevState];
            newState[index] = e.target.naturalHeight > e.target.naturalWidth;
            return newState;
        });
    };

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleImageChange = (index) => {
        setSelectedImageIndex(index);
    };

    const handlePrevClick = () => {
        carouselRef.current.decrement();
    };

    const handleNextClick = () => {
        carouselRef.current.increment();
    };

    return (
        <div className={styles.container}>
            <Carousel
                showThumbs={true}
                autoPlay={false}
                infiniteLoop={true}
                ref={carouselRef}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                onChange={handleImageChange}
                className={`${styles.carouselContainer} ${isModalOpen ? styles.carouselHidden : ''}`}
            >
                {allImg.map((img, index) => (
                    <div
                        key={img}
                        className={styles.img}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={img}
                            onLoad={(e) => handleImageLoad(index, e)}
                            className={`${isPortrait[index] ? styles.portrait : styles.landscape}`}
                        />
                    </div>
                ))}
            </Carousel>

            <div className={styles.showStatus}>
                <div className={styles.centerArrows}>
                    <span className={styles.arrow} onClick={handlePrevClick}>&lt;</span>
                    {selectedImageIndex + 1}/{allImg.length}
                    <span className={styles.arrow} onClick={handleNextClick}>&gt;</span>
                </div>
                <div className={styles.biggerText} onClick={() => openModal(selectedImageIndex)}>
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className={styles.magnifyingGlas} />
                    <span className={styles.bigger}>Bigger</span>
                </div>
            </div>

            <ImageModal
                estate={estate}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                selectedImageIndex={selectedImageIndex}
                handleImageChange={handleImageChange}
            />
        </div>
    );
}