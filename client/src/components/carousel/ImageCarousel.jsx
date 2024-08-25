import { Carousel } from 'react-responsive-carousel';

import styles from './ImageCarousel.module.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel({
    allImg,
    carouselRef
}) {
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
                    <div key={img} className={styles.slide}>
                        <img src={img} className={styles.carouselImage} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}