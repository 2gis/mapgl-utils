import { tileSizePx, worldSize } from './constants';

/**
 * Calculates zoom where screen distance in logical pixels and world distance in map points are equal.
 *
 * ⚠ WARNING: Stable compatibility with the MapGL API is not guaranteed. The function depends on the internal map logic that may be changed in the future.
 */
export function zoomWithEqualScreenAndMapDistances(px: number, world: number): number {
    if (px === 0) {
        return -Infinity;
    }

    return -Math.log((world * tileSizePx) / (px * worldSize)) / Math.LN2;
}
