import { Bounds } from './type';
import { zoomWithEqualScreenAndMapDistances } from '../projection/zoomWithEqualScreenAndMapDistances';

/**
 * ⚠ WARNING: Stable compatibility with the MapGL API is not guaranteed. The function depends on the internal map logic that may be changed in the future.
 */
export function zoomByBounds(bbox: Bounds, mapSize: number[]): number {
    return Math.min(
        zoomWithEqualScreenAndMapDistances(mapSize[0], bbox.max[0] - bbox.min[0]),
        zoomWithEqualScreenAndMapDistances(mapSize[1], bbox.max[1] - bbox.min[1]),
    );
}
