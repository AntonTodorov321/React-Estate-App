import { useState } from 'react';

import { Carousel } from 'react-responsive-carousel';

import styles from './ImageCarousel.module.css';

import ImageModal from '../image-modal/ImageModal'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel({
    allImg,
    carouselRef,
    estate
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(0);

    const openModal = (img) => {
        console.log('open');

        setSelectedImg(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImg(null);
    };

    return (


        <div className={styles.div}>
            <Carousel
                showThumbs={true}
                autoPlay={false}
                infiniteLoop={true}
                ref={carouselRef}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                className={styles.carouselContainer}
            >
                {allImg.map((img) => (
                    <div
                        key={img}
                        className={styles.slide}
                        onClick={() => openModal(img)}
                    >
                        <img src={img} className={styles.carouselImage} />
                    </div>
                ))}
            </Carousel>


            <ImageModal
                estate={estate}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />

        </div>
    );
}