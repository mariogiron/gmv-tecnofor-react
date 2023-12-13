import { useEffect, useState } from 'react';

export function useGeolocation(options: PositionOptions): [
    GeolocationPosition | undefined,
    GeolocationPositionError | undefined
] {
    const [position, setPosition] = useState<GeolocationPosition>();
    const [error, setError] = useState<GeolocationPositionError>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition(position);
            },
            (error) => {
                setError(error);
            },
            options
        );
    }, []);

    return [position, error];
}