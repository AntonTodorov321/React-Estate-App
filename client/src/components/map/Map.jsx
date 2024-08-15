const ApiKey = 'AIzaSyDLktYSYR8Rq3qFJXG6eIHjK7wp3EcJM-I';

import { useEffect, useState } from 'react';

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

import Spinner from '../spinner/Spinner';

const mapWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
};

const containerStyle = {
    width: '60%',
    height: '60vh'
};

const center = {
    lat: 42.6977,
    lng: 23.3219
};

export default function Map() {
    const [map, setMap] = useState();

    useEffect(() => {
        if (map) {
            const controlDiv = document.createElement('div');
            controlDiv.style.position = 'absolute';
            controlDiv.style.top = '10px';
            controlDiv.style.left = '10px';

            const controlUI = document.createElement('div');
            controlUI.style.backgroundColor = 'white';
            controlUI.style.border = '1px solid #ccc';
            controlUI.style.padding = '10px';
            controlUI.style.borderRadius = '3px';
            controlUI.style.cursor = 'pointer';
            controlUI.innerHTML = 'Back';

            controlDiv.appendChild(controlUI);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);

            controlUI.addEventListener('click', () => map.panTo(center));

            return () => {
                controlDiv.remove();
            };
        }
    }, [map]);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: ApiKey,
    });

    if (loadError) {
        return <div>Error loading map</div>;
    };

    if (!isLoaded) {
        return <Spinner />;
    };

    return (
        <div style={mapWrapperStyle}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                onLoad={(map) => setMap(map)}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};
