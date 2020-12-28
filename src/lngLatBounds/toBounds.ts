import { LngLatBounds } from './type';
import { create } from '../bounds/create';
import { getToMapPoint } from '../projection/getToMapPoint';
import { Bounds } from '../bounds/type';

export function toBounds(lngLatBounds: LngLatBounds): Bounds {
    const bounds = create();
    bounds.min = getToMapPoint(lngLatBounds.southWest);
    bounds.max = getToMapPoint(lngLatBounds.northEast);
    return bounds;
}
