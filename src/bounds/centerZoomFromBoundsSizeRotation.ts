import { Bounds } from './type';
import { center } from './center';
import { create } from './create';
import { zoomByBounds } from './zoomByBounds';
import { mapToGeoPoint } from '../projection/mapToGeoPoint';
import { rotate } from '../vec2/rotate';
import { degToRad } from '../common/degToRad';
import { extend } from './extend';

/**
 * Gets your bounds, the map size and rotation and calculates center and zoom
 */
export function centerZoomFromBoundsSizeRotation(
    bounds: Bounds,
    mapSize: number[],
    degRotation: number,
) {
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

    return {
        center: mapToGeoPoint(centerVector),
        zoom: zoomByBounds(rotatedBounds, mapSize),
    };
}
