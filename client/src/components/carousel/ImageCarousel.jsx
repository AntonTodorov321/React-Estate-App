import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel({
    allImg
}) {
    return (
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            {allImg.map((img) => (
                <div key={img}>
                    <img src={img}  />
                </div>
            ))}
        </Carousel>
    );
}