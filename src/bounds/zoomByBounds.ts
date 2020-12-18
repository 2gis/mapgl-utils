import { Bounds } from './type';
import { zoomWithEqualScreenAndWorldDistances } from '../projection/zoomWithEqualScreenAndWorldDistances';

export function zoomByBounds(bbox: Bounds, mapSize: number[]): number {
    return Math.min(
        zoomWithEqualScreenAndWorldDistances(mapSize[0], bbox.max[0] - bbox.min[0]),
        zoomWithEqualScreenAndWorldDistances(mapSize[1], bbox.max[1] - bbox.min[1]),
    );
}
