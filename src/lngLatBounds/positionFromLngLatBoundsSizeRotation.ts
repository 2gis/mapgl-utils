import { LngLatBounds } from './type';
import { positionFromBoundsSizeRotation } from '../bounds/positionFromBoundsSizeRotation';
import { toBounds } from './toBounds';

/**
 * Gets your lngLatBounds, the map size and rotation and calculates center and zoom.
 *
 * ⚠ WARNING: Stable compatibility with the MapGL API is not guaranteed. The function depends on the internal map logic that may be changed in the future.
 */
export function positionFromLngLatBoundsSizeRotation(
    lngLatBounds: LngLatBounds,
    mapSize: number[],
    degRotation = 0,
): { center: number[]; zoom: number } {
    const bounds = toBounds(lngLatBounds);

    return positionFromBoundsSizeRotation(bounds, mapSize, degRotation);
}
