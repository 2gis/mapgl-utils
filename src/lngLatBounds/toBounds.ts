import { LngLatBounds } from './type';
import { create } from '../bounds/create';
import { getToMapPoint } from '../projection/getToMapPoint';

export function toBounds(lngLatBounds: LngLatBounds) {
    const bounds = create();
    bounds.min = getToMapPoint(lngLatBounds.southWest);
    bounds.max = getToMapPoint(lngLatBounds.northEast);
    return bounds;
}
