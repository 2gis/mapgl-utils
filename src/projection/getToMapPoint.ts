import { worldSize } from './constants';
import { clamp } from '../common/clamp';
import { degToRad } from '../common/degToRad';

/**
 * Projects point in geographical coordinates to point in map coordinates.
 *
 * ⚠ WARNING: Stable compatibility with the MapGL API is not guaranteed. The function depends on the internal map logic that may be changed in the future.
 */
export function getToMapPoint(geoPoint: number[]): number[] {
    const worldHalf = worldSize / 2;
    const sin = Math.sin(degToRad(geoPoint[1]));

    const x = (geoPoint[0] * worldSize) / 360;
    const y = (Math.log((1 + sin) / (1 - sin)) * worldSize) / (4 * Math.PI);

    return [clamp(x, -worldHalf, worldHalf), clamp(y, -worldHalf, worldHalf)];
}
