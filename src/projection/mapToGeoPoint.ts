import { worldSize } from './constants';
import { radToDeg } from '../common/radToDeg';

export function mapToGeoPoint(mapPoint: number[]): number[] {
    const geoPoint = [0, 0];

    geoPoint[0] = (mapPoint[0] * 360) / worldSize;

    const latFactor = (-2 * Math.PI) / worldSize;
    geoPoint[1] = 90.0 - 2 * radToDeg(Math.atan(Math.exp(mapPoint[1] * latFactor)));

    return geoPoint;
}
