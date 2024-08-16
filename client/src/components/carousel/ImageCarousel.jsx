import { useEffect, useRef } from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel({
    allImg,
}) {
    const focusDivRef = useRef();
    const carouselRef = useRef();

    useEffect(() => {
        focusDivRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            carouselRef.current.decrement();
        } else if (e.key === 'ArrowRight') {
            carouselRef.current.increment();
        }
    };

    return (
        <div ref={focusDivRef} onKeyDown={handleKeyDown} tabIndex='0'>
            <Carousel
                showThumbs={true}
                autoPlay={false}
                infiniteLoop={true}
                ref={carouselRef}
            >
                {allImg.map((img) => (
                    <div key={img}>
                        <img src={img} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}