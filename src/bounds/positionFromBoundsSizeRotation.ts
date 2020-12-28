import { Bounds } from './type';
import { center } from './center';
import { create } from './create';
import { zoomByBounds } from './zoomByBounds';
import { mapToGeoPoint } from '../projection/mapToGeoPoint';
import { rotate } from '../vec2/rotate';
import { degToRad } from '../common/degToRad';
import { extend } from './extend';

/**
 * Gets your bounds, the map size and rotation and calculates center and zoom.
 *
 * ⚠ WARNING: Stable compatibility with the MapGL API is not guaranteed. The function depends on the internal map logic that may be changed in the future.
 */
export function positionFromBoundsSizeRotation(
    bounds: Bounds,
    mapSize: number[],
    degRotation = 0,
): { center: number[]; zoom: number } {
    const rotation = degToRad(degRotation);

    const a = [0, 0];
    rotate(a, bounds.min, -rotation);

    const b = [0, 0];
    rotate(b, bounds.max, -rotation);

    const rotatedBounds = create();
    extend(rotatedBounds, a);
    extend(rotatedBounds, b);

    const centerVector = [0, 0];
    center(centerVector, rotatedBounds);
    rotate(centerVector, centerVector, rotation);

    return {
        center: mapToGeoPoint(centerVector),
        zoom: zoomByBounds(rotatedBounds, mapSize),
    };
}
