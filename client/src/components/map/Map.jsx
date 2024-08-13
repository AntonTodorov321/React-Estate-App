import { Autocomplete } from '@react-google-maps/api';

export default function Map() {
    const MapWithSearch = () => {
        const [map, setMap] = React.useState(null);
        const [autocomplete, setAutocomplete] = React.useState(null);

        const handlePlaceChanged = () => {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                map.panTo(place.geometry.location);
                map.setZoom(14);
            }
        };

        return (
            <LoadScript googleMapsApiKey="AIzaSyDLktYSYR8Rq3qFJXG6eIHjK7wp3EcJM-I" libraries={['places']}>
                <div>
                    <Autocomplete onLoad={setAutocomplete}>
                        <input
                            type="text"
                            placeholder="Search for a place"
                            onChange={handlePlaceChanged}
                        />
                    </Autocomplete>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={14}
                        onLoad={setMap}
                    >
                        <Polygon paths={polygonCoords} options={options} />
                    </GoogleMap>
                </div>
            </LoadScript>
        );
    };
}
